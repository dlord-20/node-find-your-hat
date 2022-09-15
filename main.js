// const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let currentPosition = [0, 0];
let fieldSize = [0, 0];

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
    fieldSize = [width, height];
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

const changePosition = (direction) => {
    let width = currentPosition[0];
    let height = currentPosition[1];
    switch(direction) {
        case 'up': 
            currentPosition = [width, height - 1];
            break;
        case 'down':
            currentPosition = [width, height + 1];
            break;
        case 'left':
            currentPosition = [width - 1, height];
            break;
        case 'right':
            currentPosition = [width + 1, height];
            break;
    }
}

const getCharAtPosition = (testField) => {
    let width = currentPosition[0];
    let height = currentPosition[1];
    if(width === 0 && height === 0) {
        
    } else if(width === 0) {
        width = 1;
    } else if(height === 0) {
        height = 1;
    }
    const stringNum = (width * height) - 1;
    console.log('width: ' + width);
    console.log('height: ' + height);
    console.log('stringindex: ' + stringNum);
}

const checkPosition = (testField) => {
    

}

const replaceCharacter = (string, index, replacement) => {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

let currentField = generateField(5,5);
currentField = replaceCharacter(currentField, 12, pathCharacter);

console.log(currentField);
console.log(fieldSize);
// changePosition('right');
console.log('currentPosition: ' + currentPosition);
changePosition('down');
getCharAtPosition();
console.log('currentPosition: ' + currentPosition);
changePosition('right');
getCharAtPosition();
console.log('currentPosition: ' + currentPosition);
changePosition('right');
getCharAtPosition();
console.log('currentPosition: ' + currentPosition);