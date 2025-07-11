/**
 * Serviço para integração com API do Carrossel
 * 
 * Este serviço fornece funções para buscar dados do carrossel de uma API externa
 * e transformar os dados no formato esperado pelo componente.
 */

/**
 * Endpoint base da API - deve ser configurado nas variáveis de ambiente
 */
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.exemplo.com/v1';

/**
 * Busca itens do carrossel da API
 * @param {number} limit - Número máximo de itens a retornar (opcional)
 * @returns {Promise<Array>} - Promise com array de itens formatados
 */
export const fetchCarouselItems = async (limit = null) => {
  try {
    let url = `${API_BASE_URL}/carousel`;
    if (limit) {
      url += `?limit=${limit}`;
    }

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        // Adicione aqui headers de autenticação se necessário
      }
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    
    // Transforma os dados da API no formato esperado pelo componente
    return transformApiData(data);
  } catch (error) {
    console.error('Erro ao buscar itens do carrossel:', error);
    throw error;
  }
};

/**
 * Transforma os dados da API no formato esperado pelo componente
 * @param {Array} apiData - Dados brutos da API
 * @returns {Array} - Dados formatados
 */
const transformApiData = (apiData) => {
  return apiData.map(item => ({
    id: item.id || item._id,
    title: item.title || item.nome,
    content: item.content || item.descricao || '',
    imageUrl: item.imageUrl || item.imagem?.url || '',
    altText: item.altText || item.imagem?.alt || item.title || '',
    ctaText: item.ctaText || item.callToAction?.text || 'Saiba mais',
    ctaLink: item.ctaLink || item.callToAction?.url || '#'
  }));
};

/**
 * Exemplo de uso no componente:
 * 
 * useEffect(() => {
 *   const loadCarouselData = async () => {
 *     try {
 *       const items = await fetchCarouselItems(5);
 *       setItems(items);
 *     } catch (error) {
 *       setError('Erro ao carregar o carrossel');
 *     } finally {
 *       setLoading(false);
 *     }
 *   };
 * 
 *   loadCarouselData();
 * }, []);
 */