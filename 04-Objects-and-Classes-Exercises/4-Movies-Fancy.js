function solve(input) {
    let movies = [];

    const executeCommand = {
        addMovie,
        directedBy: addDirector,
        onDate: addDate,
    };

    input.forEach(row => {
        const command = getCommand(row);

        executeCommand[command](row);
    });

    printMovies(movies);

    function getCommand(input = '') {
        const commands = ['addMovie', 'directedBy', 'onDate'];

        const command = commands.find(command => input.includes(command));

        return command;
    }

    function addMovie(input) {
        const movie = {
            name: input.replace('addMovie ', ''),
        };

        movies.push(movie);
    }

    function addDirector(input) {
        const [movieName, directorName] = input.split(' directedBy ');

        const movie = movies.find(movie => movie.name === movieName)

        if (!movie) {
            return;
        }

        movie.director = directorName;
    }

    function addDate(input) {
        const [movieName, date] = input.split(' onDate ');

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
