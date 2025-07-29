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
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState(null);
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
      // Remover auto-refresh - atualizar apenas manualmente ou quando há novos leads
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

  const deleteLead = async (leadId) => {
    try {
      await apiService.deleteLead(leadId);
      toast.success('Lead excluído com sucesso!');
      fetchLeads(); // Refresh da lista
      setShowDeleteConfirm(false);
      setLeadToDelete(null);
    } catch (error) {
      console.error('Erro ao excluir lead:', error);
      toast.error('Erro ao excluir lead: ' + error.message);
    }
  };

  const cleanupDemoLeads = async () => {
    try {
      const result = await apiService.cleanupDemoLeads();
      toast.success(`${result.deleted_count || 0} leads demo removidos!`);
      fetchLeads(); // Refresh da lista
    } catch (error) {
      console.error('Erro ao limpar leads demo:', error);
      toast.error('Erro ao limpar leads demo: ' + error.message);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const formatFullDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
          <div className="flex flex-wrap gap-2 items-center">
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
            
            <div className="ml-auto flex gap-2">
              <button
                onClick={cleanupDemoLeads}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center"
              >
                <i className="fas fa-broom mr-2"></i>
                Limpar Demos
              </button>
              <button
                onClick={fetchLeads}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
              >
                <i className="fas fa-sync-alt mr-2"></i>
                Atualizar
              </button>
            </div>
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
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {
                              setSelectedLead(lead);
                              setShowDetailModal(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                            title="Ver detalhes"
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                          <button
                            onClick={() => {
                              setSelectedLead(lead);
                              setShowModal(true);
                            }}
                            className="text-purple-600 hover:text-purple-900"
                            title="Editar status"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <a
                            href={`tel:${lead.phone}`}
                            className="text-green-600 hover:text-green-900"
                            title="Ligar"
                          >
                            <i className="fas fa-phone"></i>
                          </a>
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-indigo-600 hover:text-indigo-900"
                            title="Enviar email"
                          >
                            <i className="fas fa-envelope"></i>
                          </a>
                          <button
                            onClick={() => {
                              setLeadToDelete(lead);
                              setShowDeleteConfirm(true);
                            }}
                            className="text-red-600 hover:text-red-900"
                            title="Excluir"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
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

        {/* Modal de Detalhes Completos */}
        {showDetailModal && selectedLead && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Detalhes do Lead</h3>
                  <button
                    onClick={() => setShowDetailModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Informações Básicas */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <i className="fas fa-user mr-2 text-blue-600"></i>
                      Informações Pessoais
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Nome</label>
                        <p className="text-gray-900 font-medium">{selectedLead.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <p className="text-gray-900">{selectedLead.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Telefone</label>
                        <p className="text-gray-900">{selectedLead.phone}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Idioma</label>
                        <p className="text-gray-900">{selectedLead.language || 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mensagem */}
                  {selectedLead.message && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <i className="fas fa-comment mr-2 text-blue-600"></i>
                        Mensagem do Cliente
                      </h4>
                      <div className="bg-white p-4 rounded border border-blue-200">
                        <p className="text-gray-900 whitespace-pre-wrap">{selectedLead.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Status e Tracking */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <i className="fas fa-chart-line mr-2 text-green-600"></i>
                      Status e Acompanhamento
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Status Atual</label>
                        <span
                          className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                            statusColors[selectedLead.status] || 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {statusLabels[selectedLead.status] || selectedLead.status}
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Fonte</label>
                        <p className="text-gray-900">{selectedLead.source}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Consentimento SMS</label>
                        <p className="text-gray-900">
                          {selectedLead.sms_consent ? 
                            <span className="text-green-600">✅ Sim</span> : 
                            <span className="text-red-600">❌ Não</span>
                          }
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Responsável</label>
                        <p className="text-gray-900">{selectedLead.assigned_to || 'Não atribuído'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Datas */}
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <i className="fas fa-calendar mr-2 text-purple-600"></i>
                      Histórico de Datas
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-600">Data de Criação</label>
                        <p className="text-gray-900">{formatFullDate(selectedLead.created_at)}</p>
                      </div>
                      {selectedLead.contacted_at && (
                        <div>
                          <label className="block text-sm font-medium text-gray-600">Data do Contato</label>
                          <p className="text-gray-900">{formatFullDate(selectedLead.contacted_at)}</p>
                        </div>
                      )}
                      {selectedLead.converted_at && (
                        <div>
                          <label className="block text-sm font-medium text-gray-600">Data da Conversão</label>
                          <p className="text-gray-900">{formatFullDate(selectedLead.converted_at)}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Notas */}
                  {selectedLead.notes && (
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <i className="fas fa-sticky-note mr-2 text-yellow-600"></i>
                        Notas
                      </h4>
                      <div className="bg-white p-4 rounded border border-yellow-200">
                        <p className="text-gray-900 whitespace-pre-wrap">{selectedLead.notes}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Ações do Modal */}
                <div className="flex gap-3 mt-8 pt-6 border-t">
                  <button
                    onClick={() => {
                      setShowDetailModal(false);
                      setShowModal(true);
                    }}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center"
                  >
                    <i className="fas fa-edit mr-2"></i>
                    Editar Status
                  </button>
                  <a
                    href={`tel:${selectedLead.phone}`}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center text-decoration-none"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Ligar
                  </a>
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 flex items-center justify-center text-decoration-none"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Confirmação de Exclusão */}
        {showDeleteConfirm && leadToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="text-center mb-6">
                <i className="fas fa-trash text-4xl text-red-500 mb-4"></i>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Confirmar Exclusão</h3>
                <p className="text-gray-600">
                  Tem certeza que deseja excluir o lead de <strong>{leadToDelete.name}</strong>?
                </p>
                <p className="text-sm text-red-600 mt-2">Esta ação não pode ser desfeita!</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setLeadToDelete(null);
                  }}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => deleteLead(leadToDelete.id)}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Excluir
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