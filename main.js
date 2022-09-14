const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {

  
}

const getRandomCharacter = () => {
    const randNum = Math.floor(Math.random()* 2);
    console.log(randNum);
    const options = ['░', 'O'];
    const character = options.randNum;
    return character;
}

const generateField = (width, height) => {
    const fieldArray = [];
    for(let i = 0; i < height; i++) {
        const newRow = [];
        for(let j = 0; j < width; j++) {
            newRow.push(getRandomCharacter());
        }
        fieldArray.push(newRow);
    }

    return fieldArray;
}