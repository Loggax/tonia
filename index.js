// // let clas = document.querySelector('.tonia');
// // let button = document.querySelector('.q');
// let t = document.getElementsById('#q')

// t.addEventListener('click', (e) => {
//     console.log('it;s working')
// });

window.addEventListener('load', function() {
    // const button = document.querySelector('#myButton');
    //     button.addEventListener('click', () => {
    //     console.log('Button clicked');
    // });
    let img = document.querySelector('.img');
    let t = document.querySelector('.text');

    t.addEventListener('mouseover', (e) => {
        if(img.classList.contains('act')) {
            img.classList.remove('act');
        } else {
            img.classList.add('act');
        }
        // t.style.border = "5px dotted orange";
        console.log('it;s working')
    });
});
