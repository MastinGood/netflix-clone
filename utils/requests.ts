const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  // Home
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  
  // TV ShowS
  // fetchLatestTVShows: `${BASE_URL}/tv/latest?api_key=${API_KEY}&language=en-US`,
  fetchAiringToday: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularTV: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedTVShows: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTVOntheAir: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests