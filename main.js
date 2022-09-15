// const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const currentPosition = [0, 0];

class Field {

  
}

const getRandomEndPosition = (num) => {
    const position = Math.floor(Math.random() * num);
    return position;
}


const getRandomCharacter = () => {
    const randNum = Math.floor(Math.random()* 5);
    const options = [fieldCharacter, fieldCharacter, fieldCharacter, hole, hole];
    const character = options[randNum];
    return character;
}

const generateField = (width, height) => {
    const fieldArray = [];
    const endColPosition = getRandomEndPosition(width);
    const endRowPosition = getRandomEndPosition(height);
    for(let i = 0; i < height; i++) {
        const newRow = [];
        for(let j = 0; j < width; j++) {
            if(i === 0 && j === 0) {
                newRow.push(pathCharacter);
            } else if(i === endRowPosition && j === endColPosition ) {
                newRow.push(hat);
            } else {
                newRow.push(getRandomCharacter());
            }
        }
        const row = newRow.join('');
        fieldArray.push(row);
    }

    return fieldArray.join('\n');
}

const replaceCharacter = (string, index, replacement) => {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

let currentField = generateField(5,5);
currentField = replaceCharacter(currentField, 1, pathCharacter);

console.log(currentField);