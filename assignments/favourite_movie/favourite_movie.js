const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    switch(operation){
        case "add":
            movies.push(movie);
            break;
        case "remove":
            val=movies.pop();
            break;
    }
    return movies
}

module.exports = favouriteMovie;
