'use strict';


//используется унарный плюс
// console.log(4 + +'9');

// let incr = 10,
//     decr = 10;

// // ++incr; // это инкримент, увеличение на 1
// // --decr;

// //если плюсы или минусы до переменной, это префиксная, если после, то постфиксная
// // постфиксная после вывода увеличивает значение(или уменьшает), а префиксная до вывода  
// console.log(++incr);
// console.log(decr--);

// //получить остаток от деления через %
// console.log(5%3);

// // // = одиночная - присваивание, двойное == - сравнение, === - строгое сравнение(со сравнением типов)

// console.log(2+2*2 !== '6');

// // //логические операторы и(&&) или(||) && работает только когда оба выражения верны

// const isChecked = false,
// 	  isClose = false;

// console.log(isChecked || !isClose);

const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

const personalMovieDatabase = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
	  b = prompt('На сколько оцените его?', ''),
	  c = prompt('Один из последних просмотренных фильмов?', ''),
	  d = prompt('На сколько оцените его?', '');

	  personalMovieDatabase.movies[a] = b;
	  personalMovieDatabase.movies[c] = d;

	  console.log(personalMovieDatabase);
	  