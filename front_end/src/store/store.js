import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);
const baseUrl = "http://localhost:1337/";

//async function fetchMovieDetails(movieId) {
//const apiKey = "2667dbf5b5c2a3cb54f33edae7b32831";
//const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

//try {
//const response = await fetch(url);
//const movieData = await response.json();
//return movieData;
//} catch (error) {
//console.error("Erro ao buscar dados do filme:", error);
//}
//}

//async function saveMovieToStrapi(movieData) {
//const strapiUrl = "http://localhost:1337/filmes";
//const token =
//"c504e2aa1d45683af4ab6a1a2a5bb38b6960c0745c09068ddcd5e78fe57504ed60de5c027032d19c7be677c2f6977e15530062503190e9ec9a54ab2e865f8cfb229e31f588b8aedfe64aee9eca053e22fcf6180af72b6140c1733484c16967c8632ad351403bd11e07d75197a5d9fd9d8b248de4717cec9942eb3d94baf8df0c";

//const moviePayload = {
//Nome_Filme: movieData.title,
//Ano_lancamento: movieData.release_date,
//Foto_Capa: movieData.poster_path
//  ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
//  : null,
//Descricao: movieData.overview,
//};

//try {
///  const response = await fetch(strapiUrl, {
//   method: "POST",
///   headers: {
//    "Content-Type": "application/json",
//Authorization: `Bearer ${token}`,
//},
//body: JSON.stringify(moviePayload),
//});

//if (response.ok) {
//const result = await response.json();
//console.log("Filme salvo com sucesso no Strapi:", result);
//} else {
//console.error("Erro ao salvar o filme no Strapi:", response.statusText);
//}
//} catch (error) {
//console.error("Erro ao fazer a requisição ao Strapi:", error);
//}
//}

export default new Vuex.Store({
  state: {
    listaDoComentario: [], // Estado para armazenar os comentários    topRatedMovies: [],
    popularMovies: [],
    upcomingMovies: [],
    movie: {},
    serchResults: [],
    modes: [
      {
        type: "popular",
        title: "Popular Movies",
      },
      {
        type: "topRated",
        title: "Top Rated Movie",
      },
      {
        type: "upcoming",
        title: "Upcoming Movies",
      },
      {
        type: "search",
        title: "Search Results",
      },
    ],
    menuItems: [
      {
        icon: "mdi-view-dashboard",
        title: "Home",
        shortTitle: "Home",
        name: "home",
        param: "",
      },
      {
        icon: "mdi-movie-roll",
        title: "Popular Movies",
        shortTitle: "Popular",
        name: "moviesList",
        param: "popular",
      },
      {
        icon: "mdi-star",
        title: "Top Rated Movies",
        shortTitle: "Top Rated",
        name: "moviesList",
        param: "topRated",
      },
      {
        icon: "mdi-calendar",
        name: "moviesList",
        title: "Upcoming Movies",
        shortTitle: "Upcoming",
        name: "moviesList",
        param: "upcoming",
      },
    ],
    menuItems: [
      {
        icon: "mdi-view-dashboard",
        title: "Home",
        shortTitle: "Home",
        name: "home",
        param: "",
      },
      {
        icon: "mdi-movie-roll",
        title: "Popular Movies",
        shortTitle: "Popular",
        name: "moviesList",
        param: "popular",
      },
      {
        icon: "mdi-star",
        title: "Top Rated Movies",
        shortTitle: "Top Rated",
        name: "moviesList",
        param: "topRated",
      },
      {
        icon: "mdi-calendar",
        name: "moviesList",
        title: "Upcoming Movies",
        shortTitle: "Upcoming",
        name: "moviesList",
        param: "upcoming",
      },
    ],
    URL_BASE: "https://api.themoviedb.org/3/movie/",

    PARAMS_BASE: "api_key=" + process.env.VUE_APP_API_KEY + "&language=en-US",
  },
  getters: {
    getListaDeComentario(state) {
      return state.listaDoComentario;
    },

    poster: (state) => (path) => {
      if (path) {
        return "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + path;
      }
    },
    backdrop: (state) => {
      if (state.movie.backdrop_path) {
        return "https://image.tmdb.org/t/p/w780" + state.movie.backdrop_path;
      }
    },
    popularMovies: (state) => {
      return state.popularMovies;
    },
    topRatedMovies: (state) => {
      return state.topRatedMovies;
    },
    upcomingMovies: (state) => {
      return state.upcomingMovies;
    },
    searchResults: (state) => {
      return state.serchResults;
    },
  },
  mutations: {
    setListaDeComentario(state, payload) {
      state.listaDoComentario = payload;
    },

    POPULAR_MOVIES(state, page) {
      if (page === 1) {
        state.popularMovies = [];
      }
      let urlmovies = `${state.URL_BASE}popular?${state.PARAMS_BASE}&page=${page}`;
      axios
        .get(urlmovies)
        .then((result) => {
          result.data.results.forEach((movies) => {
            state.popularMovies.push(movies);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    TOP_RATED_MOVIES(state, page) {
      if (page === 1) {
        state.topRatedMovies = [];
      }
      let urlmovies = `${state.URL_BASE}top_rated?${state.PARAMS_BASE}&page=${page}`;
      axios
        .get(urlmovies)
        .then((result) => {
          result.data.results.forEach((movies) => {
            state.topRatedMovies.push(movies);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    UPCOMING_MOVIES(state, page) {
      if (page === 1) {
        state.upcomingMovies = [];
      }
      let urlmovies = `${state.URL_BASE}upcoming?${state.PARAMS_BASE}&page=${page}`;
      axios
        .get(urlmovies)
        .then((result) => {
          result.data.results.forEach((movies) => {
            state.upcomingMovies.push(movies);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    MOVIE: (state, id) => {
      state.movie = [];
      let url = `${state.URL_BASE}${id}?${state.PARAMS_BASE}`;
      axios
        .get(url)
        .then((result) => {
          state.movie = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    SEARCH: (state, query) => {
      state.serchResults = [];
      let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
      axios
        .get(searchUrl)
        .then((result) => {
          result.data.results.forEach((movies) => {
            state.serchResults.push(movies);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  actions: {
    //async fetchAndSaveMovies({ commit }) {
    //const apiKey = "2667dbf5b5c2a3cb54f33edae7b32831"; // Substitua pela sua chave de API
    //const discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`;

    //try {
    //  const response = await fetch(discoverUrl);
    //  const data = await response.json();
    //  const movies = data.results;

    //  for (const movie of movies) {
    //    const movieDetails = await fetchMovieDetails(movie.id);
    //    await saveMovieToStrapi(movieDetails);
    //  }
    //
    //  console.log("Todos os filmes foram salvos no Strapi.");
    //} catch (error) {
    //  console.error("Erro ao buscar e salvar filmes:", error);
    //}
    //},

    //////

    async getListaDeComentario({ commit }) {
      try {
        const url = "http://localhost:1337/comentarios/"; // URL correta da sua API de comentários
        const resposta = await fetch(url);
        const listado = await resposta.json(); // Certifique-se de aguardar a resposta
        console.log(listado);
        commit("setListaDeComentario", listado); // Enviar os dados para a mutation
      } catch (error) {
        console.error("Erro ao buscar comentários:", error);
      }
    },

    getPopularMovies(context, page) {
      context.commit("POPULAR_MOVIES", page);
    },
    getTopRatedMovies(context, page) {
      context.commit("TOP_RATED_MOVIES", page);
    },
    getUpcomingMovies(context, page) {
      context.commit("UPCOMING_MOVIES", page);
    },
    getMovie(context, id) {
      context.commit("MOVIE", id);
    },
    search(context, query) {
      context.commit("SEARCH", query);
    },
  },
});
