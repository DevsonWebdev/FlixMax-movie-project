// SEARCH MOVIES
function searchMovie(movieName) {
    const searchSettings = {
        async: true,
        crossDomain: true,
        url: `https://imdb.iamidiotareyoutoo.com/search?q=${movieName}`,
        method: 'GET'
    };

    $.ajax(searchSettings).done(function (response) {
        console.log(response);
    });
}
// RAPID API KEY
export const rapidApiKey = "e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020";
// IMDB POPULAR TV SHOWS
function tvShows() {
    const tvShowSettings = {
        async: true,
        crossDomain: true,
        url: 'https://imdb236.p.rapidapi.com/api/imdb/most-popular-tv',
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
    };

    $.ajax(tvShowSettings).done(function (response) {
        console.log(response);
    });
}
//TRENDING MOVIES
function horroMovies() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://moviesverse1.p.rapidapi.com/new-horror',
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    })
}
function movieGenre() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://moviesverse1.p.rapidapi.com/movies-by-genre?genre=action',
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
//TRENDING ANIME
export function popularAnime() {
    let data;
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://anime-data-scraper-api.p.rapidapi.com/v1/anime/popular',
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'anime-data-scraper-api.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        localStorage.setItem("popularAnime", JSON.stringify(response));
        data = response
    });
    return data
}
export function topAnimeMovies() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://anime-data-scraper-api.p.rapidapi.com/v1/anime/top/movie',
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'anime-data-scraper-api.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}
export function topRankAnime() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://anime-data-scraper-api.p.rapidapi.com/v1/anime/top/rank',
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'anime-data-scraper-api.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
// MOVIE QUOTES
// RANDOM MOVIE QUOTE

function randomQuotes() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/random/quote',
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'movie-and-tv-shows-quotes.p.rapidapi.com'
        }
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}