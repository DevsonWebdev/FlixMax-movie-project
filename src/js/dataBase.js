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
const rapidApiKey = e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020;
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
// GET NEWS
function getNews() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://imdb232.p.rapidapi.com/api/news/get-by-category?limit=25&category=CELEBRITY',
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'imdb232.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    })
}
function movieNews() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://moviesverse1.p.rapidapi.com/movie-news',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
//TRENDING MOVIES
function mostTrendingMvies() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://moviesverse1.p.rapidapi.com/new-horror',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
function horroMovies() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://moviesverse1.p.rapidapi.com/new-horror',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
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
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
//TRENDING ANIME
function popularAnime() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://anime-data-scraper-api.p.rapidapi.com/v1/anime/popular',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'anime-data-scraper-api.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
function topAnimeMovies() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://anime-data-scraper-api.p.rapidapi.com/v1/anime/top/movie',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'anime-data-scraper-api.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}
function topRankAnime() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://anime-data-scraper-api.p.rapidapi.com/v1/anime/top/rank',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'anime-data-scraper-api.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
function topTvAnime() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://anime-data-scraper-api.p.rapidapi.com/v1/anime/top/tv',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'anime-data-scraper-api.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    })
}
function topAnimeShows() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://moviesverse1.p.rapidapi.com/top-anime-shows',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    })
}
// AI IMAGE GENERATOR
function AiImageGenerator() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/fluximagegenerate/generateimage.php',
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'ai-text-to-image-generator-flux-free-api.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: { "prompt": "Hulk", "style_id": 4, "size": "1-1" }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
// TRENDING TRAILERS
function getTrendingTrailers() {
    const settings = {
        async: true,
        crossDomain: true,
        url: "https://api.kinocheck.com/trailers/trending",
        method: 'GET'
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    })
}
// LATEST TRAILERS
function getLatestTrailers() {
    const settings = {
        async: true,
        crossDomain: true,
        url: "https://api.kinocheck.com/trailers/latest",
        method: 'GET'
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    })
}
// MOVIE QUOTES
// 100
function get100Quotes() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'movie-and-tv-shows-quotes.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

function randomQuotes() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/random/quote',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9bd911239msh07e14fa4c67bbf5p132d38jsn345fdb1b0020',
            'x-rapidapi-host': 'movie-and-tv-shows-quotes.p.rapidapi.com'
        }
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}