/* declaration of variables */
let numberContainer = document.querySelector('.card__container1__number');
let showNumber = document.querySelector('#selected__number');
let submitBtn = document.querySelector('.card__container1__submit');
let cardContainer1 = document.querySelector('.card__container1');
let cardContainer2 = document.querySelector('.card__container2');

numberContainer.addEventListener('click', event=>{
    let numberSelected = event.target.innerText;
    showNumber.innerHTML = numberSelected; 

    if (numberSelected > 0 && numberSelected < 6){
        submitBtn.addEventListener('click', ()=>{
            cardContainer1.style.display = 'none';
            cardContainer2.style.display = 'flex';
        })
    }
});

