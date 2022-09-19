const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let currentPosition = [0, 0];
let fieldSize = [0, 0];

class Field {

  
}

//Generates randomly where the position the hat should be
const getRandomEndPosition = (num) => {
    const position = Math.floor(Math.random() * num);
    return position;
}

//Returns a random character (either hole or fieldcharacter)
const getRandomCharacter = () => {
    const randNum = Math.floor(Math.random()* 5);
    const options = [fieldCharacter, fieldCharacter, fieldCharacter, hole, hole];
    const character = options[randNum];
    return character;
}

//Creates a random field according to the sizes the user inputs
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

//Change the current position of the player -> Happens before we 
//check what happens when the player tries to move into the space
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
        default:
            break;
    }
}

//Get character and position in the field sent in and will return a string with 
// either a new field or with the info stating that the game was over
const checkPlayerMove = (testField) => {
    let width = currentPosition[0];
    let height = currentPosition[1];
    
    const stringNum = (fieldSize[0] * height) + width + (height * 1);
    // console.log('width: ' + width);
    // console.log('height: ' + height);
    // console.log('stringindex: ' + stringNum);
    //Height times width + width - 1
    const charAtPostion = testField[stringNum];
    if(charAtPostion === fieldCharacter) {
        // console.log(replaceCharacter(testField, stringNum, pathCharacter));
        return replaceCharacter(testField, stringNum, pathCharacter);
    } else if(charAtPostion === hole) {
        console.log('You fell in a hole. You lose!');
        return false;
    } else if(charAtPostion === hat) {
        console.log('Victory!!!');
        return false;
    } else if(charAtPostion === pathCharacter) {
        console.log('Cannot return to old path, you lose!');
        return false;
    } else {
        console.log('Out of bounds, you lose!');
        return false;
    }
}

// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

//Gets user input to play the game and will continue to run until they exit
const playGame = () => {
    let status = true;
    console.log('Let\'s play a fun game!');
    do {
        console.log('How wide do you want your playing field?')
        const width = prompt();
        console.log('How tall do you want you playing field?')
        const height = prompt();
        let field = generateField(width,height);
        do {
            console.log(field);
            console.log('Which direction do you wish to go? (\'up\', \'down\', \'left\', \'right\')');
            const direction = prompt();
            changePosition(direction);
            field = checkPlayerMove(field);
        } while(field !== false);
        console.log('Do you want to play again? (\'yes\', \'no\')');
        const keepPlaying = prompt();
        status =  keepPlaying === 'yes' ? true : false;
        currentPosition = [0, 0];
    } while(status !== false);


}

const replaceCharacter = (string, index, replacement) => {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

// let currentField = generateField(5,5);
// currentField = replaceCharacter(currentField, 12, pathCharacter);

// console.log('og');
// console.log(currentField);
// console.log(fieldSize);

playGame();



// changePosition('right');
// console.log('currentPosition: ' + currentPosition);
// console.log('1');
// changePosition('down');
// console.log('currentPosition: ' + currentPosition);
// currentField = checkPlayerMove(currentField);
// console.log(currentField);
// console.log('2');
// changePosition('down');
// console.log('currentPosition: ' + currentPosition);
// currentField = checkPlayerMove(currentField);
// console.log(currentField);
// console.log('3');
// changePosition('right');
// console.log('currentPosition: ' + currentPosition);
// currentField = checkPlayerMove(currentField);
// console.log(currentField);
// console.log('4');
// changePosition('right');
// console.log('currentPosition: ' + currentPosition);
// currentField = checkPlayerMove(currentField);
// console.log(currentField);
// console.log('currentPosition: ' + currentPosition);
// changePosition('right');
// checkPlayerMove();
// console.log('currentPosition: ' + currentPosition);
// changePosition('right');
// checkPlayerMove();
// console.log('currentPosition: ' + currentPosition);