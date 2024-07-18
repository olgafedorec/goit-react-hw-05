import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTExN2NiZGVlN2E1OTVhYWVjODk5NDljY2RlM2ViMyIsIm5iZiI6MTcyMDczMTg1Ni40NDM5NSwic3ViIjoiNjY5MDQ0NzM0OTM3ZjIwZTFjYWFhY2JhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.t9gjPImCjf1De_jfE7JlfjZ1KEg3eWTqRp9ENTt2mpk'
    }
}

export const getMovies = async () => {
    const response = await axios.get('trending/movie/day', options);
    return response.data;
};

export const getMovieById = async (movieId) => {
    const response = await axios.get(`movie/${movieId}`, options);
    return response.data;
}


export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`, options);
    return response.data;
}

export const getMovieCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`, options);
    return response.data;
}

export const searchMovie = async (query) => {
    const response = await axios.get('search/movie', {
        params: { query },
        ...options
    });
    return response.data.results;
}



