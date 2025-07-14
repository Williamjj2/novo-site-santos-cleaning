// Santos Cleaning Solutions - Before/After Images Configuration
// Substitua as URLs pelas suas imagens hospedadas

export const BEFORE_AFTER_IMAGES = [
  {
    id: 'bathroom',
    title: 'Transformação do Banheiro',
    description: 'Do rejunte negligenciado aos azulejos brilhantes',
    emoji: '🛁',
    // SUBSTITUA ESTAS URLs PELAS SUAS IMAGENS:
    beforeImage: 'https://sua-hospedagem.com/bathroom-before.jpg',
    afterImage: 'https://sua-hospedagem.com/bathroom-after.jpg',
    beforeAlt: 'Banheiro sujo antes da limpeza Santos Cleaning',
    afterAlt: 'Banheiro limpo depois da limpeza Santos Cleaning',
    category: 'Limpeza Profunda Banheiro'
  },
  {
    id: 'kitchen',
    title: 'Restauração da Cozinha', 
    description: 'Cozinha restaurada da gordura ao brilho',
    emoji: '🍳',
    // SUBSTITUA ESTAS URLs PELAS SUAS IMAGENS:
    beforeImage: 'https://sua-hospedagem.com/kitchen-before.jpg',
    afterImage: 'https://sua-hospedagem.com/kitchen-after.jpg',
    beforeAlt: 'Cozinha suja antes da limpeza Santos Cleaning',
    afterAlt: 'Cozinha limpa depois da limpeza Santos Cleaning',
    category: 'Limpeza Profunda Cozinha'
  },
  {
    id: 'room',
    title: 'Transformação do Quarto',
    description: 'Quarto empoeirado transformado em santuário aconchegante',
    emoji: '🛏️',
    // SUBSTITUA ESTAS URLs PELAS SUAS IMAGENS:
    beforeImage: 'https://sua-hospedagem.com/room-before.jpg',
    afterImage: 'https://sua-hospedagem.com/room-after.jpg',
    beforeAlt: 'Quarto bagunçado antes da limpeza Santos Cleaning',
    afterAlt: 'Quarto limpo depois da limpeza Santos Cleaning',
    category: 'Organização de Quartos'
  },
  {
    id: 'living-room',
    title: 'Renovação da Sala',
    description: 'Do caos bagunçado ao conforto organizado',
    emoji: '🛋️',
    // SUBSTITUA ESTAS URLs PELAS SUAS IMAGENS:
    beforeImage: 'https://sua-hospedagem.com/livingroom-before.jpg',
    afterImage: 'https://sua-hospedagem.com/livingroom-after.jpg',
    beforeAlt: 'Sala bagunçada antes da limpeza Santos Cleaning',
    afterAlt: 'Sala organizada depois da limpeza Santos Cleaning',
    category: 'Área de Estar'
  },
  {
    id: 'office',
    title: 'Limpeza do Home Office',
    description: 'Transformação do espaço de trabalho profissional',
    emoji: '💼',
    // SUBSTITUA ESTAS URLs PELAS SUAS IMAGENS:
    beforeImage: 'https://sua-hospedagem.com/office-before.jpg',
    afterImage: 'https://sua-hospedagem.com/office-after.jpg',
    beforeAlt: 'Home office bagunçado antes da limpeza Santos Cleaning',
    afterAlt: 'Home office limpo depois da limpeza Santos Cleaning',
    category: 'Home Office'
  },
  {
    id: 'garage',
    title: 'Organização da Garagem',
    description: 'Do caos de armazenamento ao espaço organizado',
    emoji: '🏠',
    // SUBSTITUA ESTAS URLs PELAS SUAS IMAGENS:
    beforeImage: 'https://sua-hospedagem.com/garage-before.jpg',
    afterImage: 'https://sua-hospedagem.com/garage-after.jpg',
    beforeAlt: 'Garagem bagunçada antes da organização Santos Cleaning',
    afterAlt: 'Garagem organizada depois da organização Santos Cleaning',
    category: 'Organização de Garagem'
  }
];

// Função para otimizar URLs de imagem (opcional)
export const optimizeImageUrl = (url, width = 600, height = 400) => {
  // Se usando Cloudinary, adiciona parâmetros de otimização
  if (url.includes('cloudinary.com')) {
    return url.replace('/upload/', `/upload/w_${width},h_${height},c_fill,q_auto,f_auto/`);
  }
  
  // Se usando outras CDNs, retorna URL original
  return url;
};