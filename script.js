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


const innContainer = document.querySelector('.inner-container');

for (let i=1; i <=100; i++) {
    if (i % 15 == 0) {
        innContainer.innerHTML += `<div class="box fizzbuzz">fizzbuzz</div>`;
    } else if (i % 3 === 0) {
        innContainer.innerHTML += `<div class="box fizz">fizz</div>`;
    } else if (i % 5 === 0) {
        innContainer.innerHTML += `<div class="box buzz">buzz</div>`;
    } else {
        innContainer.innerHTML += `<div class="box ">${i}</div>`;
    }

}