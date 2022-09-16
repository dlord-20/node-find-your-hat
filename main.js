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

//Get character and position in the field sent in and will return a string with either a new field or with the info stating that the game was over
const getCharAtPosition = (testField) => {
    let width = currentPosition[0];
    let height = currentPosition[1];

    
    const stringNum = (fieldSize[0] * height) + width + (height * 1);
    console.log('width: ' + width);
    console.log('height: ' + height);
    console.log('stringindex: ' + stringNum);
    //Height times width + width - 1
    const charAtPostion = testField[stringNum];
    if(charAtPostion === fieldCharacter) {
        return replaceCharacter(testField, stringNum, pathCharacter);
    } else if(charAtPostion === hole) {
        return 'You fell in a hole. You lose!';
    } else if(charAtPostion === hat) {
        return 'Victory!!!';
    } else if(charAtPostion === pathCharacter) {
        return 'Cannot return to old path, you lose!';
    } else {
        return 'Out of bounds, you lose!';
    }
}

const checkPosition = (testField) => {
    

}

const replaceCharacter = (string, index, replacement) => {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

let currentField = generateField(5,5);
// currentField = replaceCharacter(currentField, 12, pathCharacter);

console.log('og');
console.log(currentField);
console.log(fieldSize);
// changePosition('right');
console.log('currentPosition: ' + currentPosition);
console.log('1');
changePosition('down');
console.log('currentPosition: ' + currentPosition);
currentField = getCharAtPosition(currentField);
console.log(currentField);
console.log('2');
changePosition('down');
console.log('currentPosition: ' + currentPosition);
currentField = getCharAtPosition(currentField);
console.log(currentField);
console.log('3');
changePosition('right');
console.log('currentPosition: ' + currentPosition);
currentField = getCharAtPosition(currentField);
console.log(currentField);
console.log('4');
changePosition('right');
console.log('currentPosition: ' + currentPosition);
currentField = getCharAtPosition(currentField);
console.log(currentField);
// console.log('currentPosition: ' + currentPosition);
// changePosition('right');
// getCharAtPosition();
// console.log('currentPosition: ' + currentPosition);
// changePosition('right');
// getCharAtPosition();
// console.log('currentPosition: ' + currentPosition);