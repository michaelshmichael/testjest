const capitalize = (string) => {
    let firstChar = string.slice(0,1).toUpperCase();
    let restChars = string.slice(1);
    return firstChar.concat(restChars);
}

const reverseString = (string) => {
    let arrayFromString = string.split('');
    let reversedArray = [];
    for(let i = arrayFromString.length-1; i >=0; i--){
        let element = arrayFromString[i];
        reversedArray.push(element);
    }
    return reversedArray.join('');
}

const calculator = {
    add: (val1, val2) => {
        return val1+val2;
    },
    subtract: (val1, val2) => {
        return val1-val2;
    },
    multiply: (val1, val2) => {
        return val1*val2;
    },
    divide: (val1, val2) => {
        return val1 / val2;
    }
}

const caesar = (string, shift) => {
    const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w'
    ,'x','y','z'];
    const arrayedString = string.split('');
    let resultArray = [];
    arrayedString.forEach((e) => {
        const initialIndex = alphabet.indexOf(e);
        if(e === ' '){
            resultArray.push('')
        } else {
            const shiftedIndex = (initialIndex + shift) % 26;
            resultArray.push(alphabet[shiftedIndex]);
        }
    });
    return resultArray.join('');
};
  
const makeObject = (array) => {
    const length = array.length;
    const sortedArray = array.sort();
    const maxElement = sortedArray[length-1]
    const minElement = sortedArray[0]
    const total = array.reduce((a,b) => a+b, 0);
    
    const object = {
        length: length,
        max: maxElement,
        min: minElement,
        total: total
    }

    return object;
}
module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesar,
    makeObject
}