const EMPTY_NUMBER = "";
const NOTVALID_ZERO_1 = '00';
const NOTVALID_ZERO_2 = '01';

const isIP4vRange = number => number >= 0 && number <= 255;

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

    for(let number of splittedString) if(!checkEmpty(number) || typeof Number(number) !== 'number' || !isIP4vRange(number) || !validIP4Exception(number)) return false

    return true
}