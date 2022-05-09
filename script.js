
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || personalMovieDB.count == isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    }    
    },
    rememberMyFilms:function() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;  
        }     
    }    
    },
    detectLevelOfFilms: function() {
        if (personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }    
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }    
    },
    writeYourGeners: function() {
        
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase(); 

            if (genre == '' || genre == null) {
            console.log("Данные введены не верно или не введены вообще");
            i--;//возврвт назад и вопрос задается снова
                
            } else {
            personalMovieDB.genres[i - 1] = genre;
            }// i-1 т.к в массив мы должны записать с 0 индекса, а user вводит с 1
        }   
    
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });  
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {

        } else {
            personalMovieDB.privat = true;
        }
    }
};

