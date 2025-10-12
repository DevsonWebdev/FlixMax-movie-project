import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/jquery/dist/jquery.min.js";

$(document).ready(function () {
    function test() {
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
    test()
})
