import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/jquery/dist/jquery.min.js";
// DATA 
import { createMovieDomNodes, createSwiper } from "./utilis.js";
import { rapidApiKey } from "./dataBase.js";
// JQUERY 
$(document).ready(function () {
	// RENDER POP ANIME
	function renderPopularAnime(animeData) {
		animeData.forEach(anime => {
			createMovieDomNodes(".anime-cont", anime.image, anime.title)
		});
	}
	function popularAnime() {
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
			const animeData = response.data
			renderPopularAnime(animeData)
		});
	}
	// popularAnime()

	// RENDER HORROR MOVIE CONT
	function renderHororMovies(horrorMovies) {
		horrorMovies.forEach(movie => createMovieDomNodes(".horror-movie-cont", movie.image, movie.title));
	}
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
			const data = response.list;
			console.log(data);
			renderHororMovies(data)
		});
	}

	// Fetch movies
	// horroMovies()


})
