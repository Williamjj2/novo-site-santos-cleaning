import React, { useState, useEffect } from 'react';
import { useTranslations } from '../utils/translations';
import SEOHead from '../components/SEOHead';

const LegalPolicies = () => {
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const { t } = useTranslations(currentLanguage);
  const [activeSection, setActiveSection] = useState('privacidade');

  // Detectar idioma do localStorage ou URL
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'pt';
    setCurrentLanguage(savedLanguage);
  }, []);

  const sections = [
    { id: 'privacidade', icon: '📋', key: 'privacy-policy' },
    { id: 'termos', icon: '📜', key: 'terms-service' },
    { id: 'aviso', icon: '⚖️', key: 'legal-notice' },
    { id: 'acessibilidade', icon: '♿', key: 'accessibility' },
    { id: 'cookies', icon: '🍪', key: 'cookies-policy' }
  ];

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* SEO Head */}
      <SEOHead currentLanguage={currentLanguage} currentSection={activeSection} />
      
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src="/images/logo.svg" alt="Santos Cleaning Solutions Logo" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Santos Cleaning Solutions</h1>
                <p className="text-sm text-gray-600">{t('legal-policies-subtitle')}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="flex space-x-2">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    currentLanguage === 'en' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  🇺🇸 EN
                </button>
                <button
                  onClick={() => changeLanguage('es')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    currentLanguage === 'es' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  🇪🇸 ES
                </button>
                <button
                  onClick={() => changeLanguage('pt')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    currentLanguage === 'pt' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  🇧🇷 PT
                </button>
              </div>
              
              <button 
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <i className="fas fa-arrow-left"></i>
                <span>{t('back-to-site')}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Quick Navigation */}
          <nav className="lg:w-80 lg:sticky lg:top-32 lg:h-fit">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                <i className="fas fa-list-ul text-blue-600 mr-2"></i>
                {t('quick-navigation')}
              </h3>
              
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all mb-2 ${
                    activeSection === section.id 
                      ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600 shadow-md' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="font-medium">{t(section.key)}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {/* Privacy Policy */}
            <section id="privacidade" className="mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-shield-alt text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{t('privacy-policy')}</h2>
                    <p className="text-sm text-gray-500">{t('last-updated')}: {t('january-2025')}</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('information-we-collect')}</h3>
                  <p className="text-gray-600 mb-4">{t('privacy-intro')}</p>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li><strong>{t('personal-data')}:</strong> {t('personal-data-desc')}</li>
                    <li><strong>{t('location-data')}:</strong> {t('location-data-desc')}</li>
                    <li><strong>{t('navigation-data')}:</strong> {t('navigation-data-desc')}</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('how-we-use-info')}</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>{t('provide-services')}</li>
                    <li>{t('contact-scheduling')}</li>
                    <li>{t('improve-services')}</li>
                    <li>{t('send-relevant-info')}</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('information-sharing')}</h3>
                  <p className="text-gray-600 mb-6">{t('no-sharing-policy')}</p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('your-rights')}</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>{t('access-info')}</li>
                    <li>{t('correct-data')}</li>
                    <li>{t('delete-data')}</li>
                    <li>{t('revoke-consent')}</li>
                  </ul>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">{t('contact')}</h4>
                    <p className="text-blue-700 text-sm">{t('contact-info')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Terms of Service */}
            <section id="termos" className="mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-file-contract text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{t('terms-service')}</h2>
                    <p className="text-sm text-gray-500">{t('last-updated')}: {t('january-2025')}</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('acceptance-terms')}</h3>
                  <p className="text-gray-600 mb-6">{t('terms-acceptance')}</p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('service-description')}</h3>
                  <p className="text-gray-600 mb-4">{t('services-offered')}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>{t('deep-cleaning')}</li>
                    <li>{t('regular-maintenance')}</li>
                    <li>{t('move-cleaning')}</li>
                    <li>{t('appliance-cleaning')}</li>
                    <li>{t('laundry-services')}</li>
                    <li>{t('cabinet-cleaning')}</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('scheduling-cancellation')}</h3>
                  <p className="text-gray-600 mb-6">{t('scheduling-policy')}</p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('responsibilities')}</h3>
                  <p className="text-gray-600 mb-6">{t('responsibility-policy')}</p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">{t('liability-limitation')}</h4>
                    <p className="text-yellow-700 text-sm">{t('liability-policy')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Notice */}
            <section id="aviso" className="mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-balance-scale text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{t('legal-notice')}</h2>
                    <p className="text-sm text-gray-500">{t('last-updated')}: {t('january-2025')}</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('general-info')}</h3>
                  <p className="text-gray-600 mb-6">{t('company-info')}</p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('website-purpose')}</h3>
                  <p className="text-gray-600 mb-6">{t('purpose-description')}</p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('changes')}</h3>
                  <p className="text-gray-600 mb-6">{t('changes-policy')}</p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('disclaimer')}</h3>
                  <p className="text-gray-600 mb-6">{t('disclaimer-text')}</p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">{t('external-links')}</h4>
                    <p className="text-red-700 text-sm">{t('external-links-policy')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Accessibility Statement */}
            <section id="acessibilidade" className="mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-universal-access text-indigo-600 text-xl"></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{t('accessibility')}</h2>
                    <p className="text-sm text-gray-500">{t('last-updated')}: {t('january-2025')}</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('our-commitment')}</h3>
                  <p className="text-gray-600 mb-6">{t('accessibility-commitment')}</p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('accessibility-standards')}</h3>
                  <p className="text-gray-600 mb-4">{t('wcag-standards')}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>{t('perceivable')}</li>
                    <li>{t('operable')}</li>
                    <li>{t('understandable')}</li>
                    <li>{t('robust')}</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('improvements')}</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>{t('alt-text')}</li>
                    <li>{t('keyboard-nav')}</li>
                    <li>{t('color-contrast')}</li>
                    <li>{t('semantic-structure')}</li>
                  </ul>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">{t('feedback-support')}</h4>
                    <p className="text-green-700 text-sm">{t('accessibility-feedback')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookie Policy */}
            <section id="cookies" className="mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-cookie-bite text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{t('cookies-policy')}</h2>
                    <p className="text-sm text-gray-500">{t('last-updated')}: {t('january-2025')}</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('what-are-cookies')}</h3>
                  <p className="text-gray-600 mb-6">{t('cookies-definition')}</p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('types-cookies')}</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li><strong>{t('essential-cookies')}:</strong> {t('essential-desc')}</li>
                    <li><strong>{t('preference-cookies')}:</strong> {t('preference-desc')}</li>
                    <li><strong>{t('analytics-cookies')}:</strong> {t('analytics-desc')}</li>
                    <li><strong>{t('marketing-cookies')}:</strong> {t('marketing-desc')}</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('cookie-purpose')}</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>{t('improve-functionality')}</li>
                    <li>{t('remember-preferences')}</li>
                    <li>{t('analyze-traffic')}</li>
                    <li>{t('personalize-experience')}</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('cookie-control')}</h3>
                  <p className="text-gray-600 mb-6">{t('browser-control')}</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">{t('third-parties')}</h4>
                    <p className="text-blue-700 text-sm">{t('third-party-cookies')}</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LegalPolicies;