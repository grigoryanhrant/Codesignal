const EMPTY_NUMBER = "";
const NOT_VALID_ZERO_1 = '00';
const NOT_VALID_ZERO_2 = '01';

const MIN_IPV4V_RANGE = 0;
const MAX_IPV4V_RANGE = 255;

const isValidIP4vRange = number => number >= MIN_IPV4V_RANGE && number <= MAX_IPV4V_RANGE;

const numberIsEmpty = number => number !== EMPTY_NUMBER

const notValidZerosCheck = number => number !== NOT_VALID_ZERO_1 && number !== NOT_VALID_ZERO_2

const solution = ipAddress => {
    let splittedString = ipAddress.split('.');

    if(splittedString.length !== 4) return false

    for(let number of splittedString) if(!numberIsEmpty(number) || typeof Number(number) !== 'number' || !isValidIP4vRange(number) || !notValidZerosCheck(number)) return false

    return true
}