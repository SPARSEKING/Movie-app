'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {

        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

const lastFilm1 = prompt ("Один из последних просмотренных фильмов?", ""),
      estimate1 = prompt ("На сколько оцените его?", ""),
      lastFilm2 = prompt ("Один из последних просмотренных фильмов?", ""),
      estimate2 = prompt ("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm1] = estimate1;
personalMovieDB.movies[lastFilm2] = estimate2;

document.write(personalMovieDB.movies);