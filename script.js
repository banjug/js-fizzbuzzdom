// script di prova in console log 

// for (let i = 0; i < 100; i++) {
//     if (i % 15 == 0) {
//         console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//         console.log("fizz");
//     } else if (i % 5 === 0) {
//         console.log("buzz");
//     } else {
//         console.log(i);
//     }
// };

// script con innerHTML

// seleziona il contenitore dove inserire i quadrati
const innContainer = document.querySelector('.inner-container');

for (let i=1; i <=100; i++) {
    // controlla se è multiplo di 15, aggiunge div con la classe e stringa fizzbuzz
    if (i % 3 == 0 && i % 5 == 0) {
        innContainer.innerHTML += `<div class="box fizzbuzz">fizzbuzz</div>`;
    }
    // controlla se è multiplo di 3, aggiunge div con la classe e stringa fizz
    else if (i % 3 === 0) {
        innContainer.innerHTML += `<div class="box fizz">fizz</div>`;
    } 
    // controlla se è multiplo di 5, aggiunge div con la classe e stringa buzz
    else if (i % 5 === 0) {
        innContainer.innerHTML += `<div class="box buzz">buzz</div>`;
    }
    // se non è multiplo di nessuno aggiunge div con la variabile all'interno
    else {
        innContainer.innerHTML += `<div class="box ">${i}</div>`;
    }
};

// script con append

// // seleziona il contenitore dove inserire i quadrati
// const innContainer = document.querySelector('.inner-container');

// for (let i=1; i <=100; i++) {
//     // inserisce un div e aggiunge classe .box
//     let square = document.createElement('div');
//     square.classList.add('box');
    
//     if (i % 3 == 0 && i % 5 == 0) {
//         // se multiplo di 15 aggiunge classe .fizzbuzz, inserisce stringa 'fizzbuzz' all'interno del div e aggiunge div all'interno del container 
//         square.classList.add('fizzbuzz');
//         square.append('fizzbuzz');
//         innContainer.append(square);
//     } else if (i % 3 == 0) {
//         // se multiplo di 3 aggiunge classe .fizz, inserisce stringa 'fizz' all'interno del div e aggiunge div all'interno del container 
//         square.classList.add('fizz');
//         square.append('fizz');
//         innContainer.append(square);
//     } else if (i % 5 == 0) {
//         // se multiplo di 5 aggiunge classe .buzz, inserisce stringa 'buzz' all'interno del div e aggiunge div all'interno del container 
//         square.classList.add('buzz');
//         square.append('buzz');
//         innContainer.append(square);
//     } else {
//         // se non è multiplo di nessuno inserire variabile i all'interno del div e inserisce div all'interno del container 
//         square.append(i);
//         innContainer.append(square);
//     }
// };