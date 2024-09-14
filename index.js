function diceGame(){
    const numOfDice = document.getElementById(`numOfdice`).value;
    const diceResult = document.getElementById(`DiceResult`);
    const diceImages = document.getElementById(`DiceImages`);
    const values = [];
    const images = [];
    for( let i = 0; i < numOfDice ; i++){
        const value = Math.floor( Math.random() * 6) + 1 ;
        values.push(value);
        images.push(`<img src="diceimg/${value}.jpg"  alt="Dice ${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(``);
    

 }