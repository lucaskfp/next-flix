const fetcher = (endpoint, params) => {
  return fetch(
    `${process.env.TMDB_BASE_URL}/${endpoint}?api_key=${process.env.TMDB_KEY}&language=pt-BR&${params}`
  );
};

export default fetcher;
