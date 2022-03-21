//Aqui é onde fica a chave da API do site The Movie DB e o a URL fixa para usar nas requisições
const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b'; 
const API_BASE = 'https://api.themoviedb.org/3';

/*Agora vamos importar todas essas categorias através da API:
-originais da netflix
-recomendados(trending)
-em alta(top rated)
-acao
-comedia
-terror
-romance
-documentarios
*/

const basicFetch = async (endpoint) => { // Função para fazer a requisição. 'async' pois não será em sincronica com a leitura 'normal' do código
    const req = await fetch(`${API_BASE}${endpoint}`); //O retorno da API será armazenada na var 'req'. 'await' pois ela irá esperar a requisção ser feita
    const json = await req.json(); // Iremos 'transformar' a req em um arquivo json
    return json; //Resposta final da função
}

export default {
    getHomeList: async () => { // Função para 'construir' a nossa lista de filmes
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=en-US&api_key=${API_KEY}`) 
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=en-US&api_key=${API_KEY}`) 
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=en-US&api_key=${API_KEY}`)  
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=en-US&api_key=${API_KEY}`) 
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=en-US&api_key=${API_KEY}`) 
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=en-US&api_key=${API_KEY}`)  
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=en-US&api_key=${API_KEY}`) 
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
            }
        }

        return info;
    }
}

