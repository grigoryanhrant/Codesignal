const EMPTY_NUMBER = "";
const NOTVALID_ZERO_1 = '00';
const NOTVALID_ZERO_2 = '01';

const minIP4vRange = 0;
const maxIP4vRange = 255;

const isValidIP4vRange = number => number >= minIP4vRange && number <= maxIP4vRange;

const checkEmpty = number => {
    if(number === EMPTY_NUMBER) return false

    return true
}

const validIP4Exception = number => {
    if(number === NOTVALID_ZERO_1 || number === NOTVALID_ZERO_2) return false
    return true
}

const solution = string => {
    let splittedString = string.split('.');

    if(splittedString.length !== 4) return false

    for(let number of splittedString) if(!checkEmpty(number) || typeof Number(number) !== 'number' || !isValidIP4vRange(number) || !validIP4Exception(number)) return false

    return true
}