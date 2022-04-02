const rollDiceButton = document.querySelector('#roll-dice');
const randomNumber = document.querySelector('#random-number')

rollDiceButton.addEventListener('click', () => {
    let number = Math.floor(Math.random() * 20 + 1);

    console.log(number);
    randomNumber.innerHTML = number;
});