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
//TRENDING MOVIES
//TRENDING ANIME

// MOVIE QUOTES