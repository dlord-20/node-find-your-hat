const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {

  
}

const getRandomEndPosition = (num) => {
    const position = Math.floor(Math.random() * num);
    return position;
}


const getRandomCharacter = () => {
    const randNum = Math.floor(Math.random()* 5);
    const options = ['░', '░', '░', 'O', 'O'];
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
                newRow.push('*');
            } else if(i === endRowPosition && j === endColPosition ) {
                newRow.push('^');
            } else {
                newRow.push(getRandomCharacter());
            }
        }
        fieldArray.push(newRow);
    }

    return fieldArray;
}

console.log(generateField(5,5));