"use strict";


// CODE 1

// const carres = document.querySelectorAll('.carre');

// console.log(carres);


// carres.forEach(carre => 
//     carre.addEventListener('click', () =>{
//             carre.classList.add('envers')
//         })
//     )

// CODE 2

window.onclick = function(e) {

    if (e.target.classList.contains("carre")){

        e.target.classList.toggle("envers");

    }
}



// event.target.classlist.add("envers");

// // var carres = event.target.className;
// var carres = document.querySelectorAll('.carre');
// console.log(carres);
// // carres.classList.add('envers')

// carres.forEach(carre => {
//     carre.classList.add('envers')
// });

// // carres.forEach(carre => carre.classList.add('envers'))

// event.target.classList.add('envers');
// console.log(event.target.id + " "  + event.target.className);
    
    // var carre = event.target.className;