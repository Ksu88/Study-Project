let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let oneOfLastFilms = prompt('Один из последних просмотренных фильмов?', '');
let whichRatin = prompt('На сколько оцените его?', '');
let oneOfLastFilmsTwo = prompt('Один из последних просмотренных фильмов?', '');
let whichRatinTwo = prompt('На сколько оцените его?', '');
personalMovieDB.movies[oneOfLastFilms] = whichRatin;
personalMovieDB.movies[oneOfLastFilmsTwo] = whichRatinTwo;
console.log(personalMovieDB);//coment
