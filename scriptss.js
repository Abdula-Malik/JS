/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict'

let numberOfFilms;

while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ){
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false

};

for(let i = 0; i < 2; i++){
const a = prompt("Один из последних просмотренных фильмов?", " "),
      b = prompt("На сколько баллов вы его оцениет?");

if(a != null && b != null && a != "" && b != ""){

    personalMovieDB.movies[a] = b;
    console.log("код отработал без ошибок");
}else{
    console.log("error");
    i--;
}
      
    }
    
console.log(personalMovieDB);

if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 || personalMovieDB <= 30){
    console.log("Вы классический зритель")
}else{
    console.log("Вы киноман")
}

function showMyDB(privat){
    if (privat == false) {
        console.log(personalMovieDB);
        
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i < 4; i++) {
      let c =  prompt(`Ваш любимый жанр под номером ${i}`)
      personalMovieDB.generes[i - 1] = c
 }
}
writeYourGenres();