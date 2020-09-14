'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {

        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

for (let i = 1; i<2; i++){
    const lastFilm = prompt ("Один из последних просмотренных фильмов?", ""),
      estimate = prompt ("На сколько оцените его?", "");

      if (lastFilm !== '' && estimate !== '' && lastFilm !== false && estimate !== false || lastFilm.length <= 50 ){
        personalMovieDB.movies[lastFilm] = estimate;
        console.log ('Done');
      }else {
          i--;
          console.log('Error');
      }
}

if (personalMovieDB.count <= 10){
    console.log("Просмотрено очень мало фильмов");
}else if (personalMovieDB.count > 10 && personalMovieDB <= 30){
    console.log("Вы классический зритель");
}else {
    console.log("Вы ценитель!");
}

console.log(personalMovieDB);