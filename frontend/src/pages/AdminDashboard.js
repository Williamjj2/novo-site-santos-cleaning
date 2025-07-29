import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { apiService } from '../services/api';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    converted: 0,
    lost: 0
  });

  // Senha simples (em produção real, usar autenticação JWT)
  const ADMIN_PASSWORD = 'santos2024admin';

  const statusColors = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    converted: 'bg-green-100 text-green-800',
    lost: 'bg-red-100 text-red-800'
  };

  const statusLabels = {
    new: 'Novo',
    contacted: 'Contatado',
    converted: 'Convertido',
    lost: 'Perdido'
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowLogin(false);
      localStorage.setItem('santos_admin_auth', 'true');
      toast.success('Login realizado com sucesso!');
    } else {
      toast.error('Senha incorreta!');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLogin(true);
    localStorage.removeItem('santos_admin_auth');
    toast.success('Logout realizado com sucesso!');
  };

  // Verificar se já está autenticado
  useEffect(() => {
    const isAuth = localStorage.getItem('santos_admin_auth') === 'true';
    if (isAuth) {
      setIsAuthenticated(true);
      setShowLogin(false);
    }
  }, []);

  const fetchLeads = useCallback(async () => {
    if (!isAuthenticated) return;
    
    try {
      setLoading(true);
      console.log('Buscando leads com filtro:', filter);
      
      const response = await apiService.getLeads(filter === 'all' ? null : filter);
      console.log('Resposta da API:', response);
      
      const leadsData = response.leads || [];
      setLeads(leadsData);
      
      // Calcular estatísticas baseado em TODOS os leads
      const allLeadsResponse = await apiService.getLeads(null); // Buscar todos
      const allLeads = allLeadsResponse.leads || [];
      
      const newStats = {
        total: allLeads.length,
        new: 0,
        contacted: 0,
        converted: 0,
        lost: 0
      };
      
      allLeads.forEach(lead => {
        if (newStats.hasOwnProperty(lead.status)) {
          newStats[lead.status]++;
        }
      });
      
      console.log('Estatísticas calculadas:', newStats);
      setStats(newStats);
      
    } catch (error) {
      console.error('Erro ao buscar leads:', error);
      toast.error('Erro ao carregar leads: ' + error.message);
    } finally {
      setLoading(false);
    }
  }, [filter, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
      // Auto refresh a cada 30 segundos
      const interval = setInterval(fetchLeads, 30000);
      return () => clearInterval(interval);
    }
  }, [fetchLeads, isAuthenticated]);

  const updateLeadStatus = async (leadId, newStatus, notes = '') => {
    try {
      await apiService.updateLead(leadId, { status: newStatus, notes });
      toast.success('Status atualizado com sucesso!');
      fetchLeads(); // Refresh da lista
      setShowModal(false);
    } catch (error) {
      console.error('Erro ao atualizar lead:', error);
      toast.error('Erro ao atualizar status: ' + error.message);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const getTimeAgo = (dateString) => {
    if (!dateString) return '';
    const diff = Date.now() - new Date(dateString).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    
    if (days > 0) return `${days}d atrás`;
    if (hours > 0) return `${hours}h atrás`;
    if (minutes > 0) return `${minutes}min atrás`;
    return 'Agora mesmo';
  };

  // Tela de Login
  if (showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-shield-alt text-2xl text-blue-600"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Santos Cleaning Solutions
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha de Acesso
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite a senha do administrador"
                autoFocus
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={!password}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <i className="fas fa-sign-in-alt mr-2"></i>
              Entrar
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Acesso restrito apenas para administradores
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard de Leads
            </h1>
            <p className="text-gray-600">
              Gerencie e acompanhe seus leads do formulário de contato
            </p>
          </div>
          
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            Sair
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <i className="fas fa-users text-blue-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <i className="fas fa-star text-blue-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Novos</p>
                <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <i className="fas fa-phone text-yellow-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Contatados</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.contacted}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <i className="fas fa-check-circle text-green-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Convertidos</p>
                <p className="text-2xl font-bold text-green-600">{stats.converted}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <i className="fas fa-times-circle text-red-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Perdidos</p>
                <p className="text-2xl font-bold text-red-600">{stats.lost}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos ({stats.total})
            </button>
            {Object.entries(statusLabels).map(([status, label]) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  filter === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label} ({stats[status] || 0})
              </button>
            ))}
            <button
              onClick={fetchLeads}
              className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
            >
              <i className="fas fa-sync-alt mr-2"></i>
              Atualizar
            </button>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <i className="fas fa-spinner fa-spin text-2xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">Carregando leads...</p>
            </div>
          ) : leads.length === 0 ? (
            <div className="p-8 text-center">
              <i className="fas fa-inbox text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">
                {filter === 'all' ? 'Nenhum lead encontrado' : `Nenhum lead com status "${statusLabels[filter] || filter}"`}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contato
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fonte
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leads.map((lead) => (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {lead.name}
                          </div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {lead.message || 'Sem mensagem'}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.phone}</div>
                        <div className="text-sm text-gray-500">{lead.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            statusColors[lead.status] || 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {statusLabels[lead.status] || lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {lead.source}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatDate(lead.created_at)}
                        </div>
                        <div className="text-xs text-gray-500">
                          {getTimeAgo(lead.created_at)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => {
                            setSelectedLead(lead);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <a
                          href={`tel:${lead.phone}`}
                          className="text-green-600 hover:text-green-900 mr-4"
                        >
                          <i className="fas fa-phone"></i>
                        </a>
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-purple-600 hover:text-purple-900"
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal de Edição */}
        {showModal && selectedLead && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-bold mb-4">Atualizar Lead</h3>
              
              <div className="mb-4">
                <p className="font-medium">{selectedLead.name}</p>
                <p className="text-sm text-gray-600">{selectedLead.email}</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => updateLeadStatus(selectedLead.id, 'contacted')}
                  className="w-full p-3 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 flex items-center"
                >
                  <i className="fas fa-phone mr-3"></i>
                  Marcar como Contatado
                </button>
                
                <button
                  onClick={() => updateLeadStatus(selectedLead.id, 'converted')}
                  className="w-full p-3 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 flex items-center"
                >
                  <i className="fas fa-check-circle mr-3"></i>
                  Marcar como Convertido
                </button>
                
                <button
                  onClick={() => updateLeadStatus(selectedLead.id, 'lost')}
                  className="w-full p-3 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 flex items-center"
                >
                  <i className="fas fa-times-circle mr-3"></i>
                  Marcar como Perdido
                </button>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;