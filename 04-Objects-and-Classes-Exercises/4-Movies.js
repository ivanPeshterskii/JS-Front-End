function solve(input) {
    let movies = [];

    for (const row of input) {
        const command = getCommand(row);

        switch (command) {
            case 'addMovie':
                addMovie(row);
                break;
            case 'directedBy':
                addDirector(row);
                break;
            case 'onDate':
                addDate(row);
                break;
        }
    }

    printMovies(movies);

    function getCommand(input) {
        if (input.includes('addMovie')) {
            return 'addMovie';
        }

        if (input.includes('directedBy')) {
            return 'directedBy';
        }

        if (input.includes('onDate')) {
            return 'onDate';
        }

        return null;
    }

    function addMovie(input) {
        const movie = {
            name: input.replace('addMovie ', ''),
        };

        movies.push(movie);
    }

    function addDirector(input) {
        const args = input.split(' directedBy ');
        const movieName = args[0];
        const directorName = args[1];

        const movie = movies.find(movie => movie.name === movieName)

        if (!movie) {
            return;
        }

        movie.director = directorName;
    }

    function addDate(input) {
        const args = input.split(' onDate ');
        const movieName = args[0];
        const date = args[1];

        const movie = movies.find(movie => movie.name === movieName);

        if (!movie) {
            return;
        }

        movie.date = date;
    }

    function printMovies(movies) {
        for (const movie of movies) {
            if (movie.date && movie.director) {
                console.log(JSON.stringify(movie))
            }
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
