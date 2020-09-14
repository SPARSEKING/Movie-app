'use strict';

let numberOfFilms;

function start (){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {

        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

for (let i = 0; i<2; i++){
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

showMyDB();
writeYouGenres();

console.log(personalMovieDB);



function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

function writeYouGenres (){
    for (let i = 1; i<=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} `);
    }
}
