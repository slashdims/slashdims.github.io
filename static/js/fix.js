// let firstSlick = document.querySelector('#slick-slide20'),
// secondSlick = document.querySelector('#slick-slide21'),
// threeSlick = document.querySelector('#slick-slide22'),
// list = document.querySelectorAll('.nav-list-services__link');

// let check = () => {
//     if(firstSlick.classList.contains('slick-active')) {

//         list[0].classList.add('hidd');
//         list[1].classList.remove('hidd');
//         list[2].classList.remove('hidd');
//     }
//     if(secondSlick.classList.contains('slick-active')) {
    
//         list[1].classList.add('hidd');
//         list[2].classList.remove('hidd');
//         list[0].classList.remove('hidd');
//     }
//     if(threeSlick.classList.contains('slick-active')) {
    
//         list[2].classList.add('hidd');
//         list[1].classList.remove('hidd');
//         list[0].classList.remove('hidd');
//     }
// }


// setInterval(check , 1000)





// let linkNav = document.querySelectorAll('[href^="#"]'),
//     speed = 1;
    
//     for (let i = 0; i < linkNav.length; i++) {
//         linkNav[i].addEventListener('click', function(e) {
//             e.preventDefault();
            
//             let down = window.pageYOffset,
//                 id = this.href.replace(/[^#]*(.*)/, '$1'),
//                 indent = document.querySelector(id).getBoundingClientRect().top,
//                 start = null;
            
//             let step = (time) => {
//                 if (start === null){
//                     start = time;
//                 }

//                 let progress = time - start,
//                     r = (indent < 0 ? Math.max(down - progress/speed, down + indent) : Math.min(down + progress/speed, down + indent)) ;
//                 window.scrollTo(0,r);
//                 if (r != down + indent) {
//                     requestAnimationFrame(step);
//                 } else {
//                     location.hash = id;
//                 }
//             };
//             requestAnimationFrame(step);
//         }, false);

//     }


 
//     let add = document.querySelector('#addId');
  

//     window.addEventListener('resize', () => { 
//         if (window.innerWidth < 614) { 
   
//             add.id = 'form-section'
//         } else { 
//             add.id = 'addId'
//         } 
//         }); 
//         if (window.innerWidth < 614) { 
//             add.id = 'form-section'
//         } else { 
//             add.id = 'addId'
//         } 
        
//         console.log(add)