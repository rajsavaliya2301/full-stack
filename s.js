const movies = [
    { title: "Pushpa2", genre: "Action", rating: 8.8, releaseYear: 2024 },
    { title: "Mufasa: The Lion King", genre: "Adventure", rating: 9.0, releaseYear: 2024 },
    { title: "Venom The Last Dance", genre: "Sci-Fi", rating: 8.6, releaseYear: 2024 }
];
const addMovie = (collection, movie) => {
    collection.push(movie);
};

addMovie(movies, { title: "Tenet", genre: "Sci-Fi", rating: 7.5, releaseYear: 2020 });
console.log(movies);


const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};
console.log(listMoviesByGenre(movies, "Sci-Fi"));


const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};
console.log(findHighestRatedMovie(movies));


const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};
console.log(getMovieTitles(movies));


const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};
console.log(moviesAfterYear(movies, 2020));


movies.forEach(movie => {
    console.log(${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.);
});