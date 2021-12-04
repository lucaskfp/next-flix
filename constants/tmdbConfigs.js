const getTMDBConfigs = async () => {
  try {
    const response = await fetch(
      `${process.env.TMDB_BASE_URL}/configuration?api_key=${process.env.TMDB_API}`
    );
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    return error.message;
  }
};

export default getTMDBConfigs;
