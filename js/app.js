const rateButtons = document.querySelectorAll('.point')
const firstContainer = document.querySelector('[data-first-container]');
const secondContainer = document.querySelector('[data-second-container]');
const submitButton = document.querySelector('.submit');

let toggle = false;
let currentValue = 0;

submitButton.addEventListener('click', () => {
    firstContainer.classList.add('hide');
    secondContainer.classList.remove('hide');
    document.querySelector('.score').innerText = currentValue;
});

rateButtons.forEach(element => {
    element.addEventListener('click', (e) => {
        currentValue = 0;
        e.target.classList.toggle('point--click');
        toggle = !toggle;
        if(toggle) {
            currentValue = parseInt(e.target.innerText);
        }
        checkToggle();
    })
})

const checkToggle = () => {
    if(toggle) {
        rateButtons.forEach(element => {
            if(!element.classList.contains('point--click')){
                element.setAttribute('disabled', '');            
            }
        })
    } else {
        rateButtons.forEach(element => {
            element.removeAttribute('disabled');
        })
    }
}