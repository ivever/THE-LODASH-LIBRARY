const _ = {
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      }
      if (start > end) {
        let temp = end;
        end = start;
        start = temp;
      }
      let isInRange = (start <= number && number < end);
      return isInRange;
    },
    words(string) {
      let words = string.split(' ');
      return words;
    },
    pad(string, length) {
      if (length <= string.length) {
        return string;
      }
      let startPaddingLength = Math.floor((length - string.length)/2);
      let endPaddingLength = length - string.length - startPaddingLength;
      let paddedString = ' '.repeat(startPaddingLength) + ' '.repeat(endPaddingLength);
      return paddedString;
    },
    has(obj, key) {
      const hasValue = obj[key];
      if (hasValue !== undefined) {
        return true;
      } else {
        return false;
      }
    },
    invert(obj) {
      let invertedObject = {};
      for (let key in obj) {
        const originalValue = obj[key];
          invertedObject = {originalValue : key};
      }
      return invertedObject;
    },
    findKey(obj, predicate) {
      for (let key in obj) {
        let value = obj[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        };
      };
      undefined
      return undefined;
    },
    drop(array, n) {
      if (n === undefined) {
        n = 1;
      } 
      let droppedArray = array.slice(n, array.length);
      return droppedArray;
    },
    dropWhile(array, predicate) {
      const cb = (element, index) => {
        return !predicate(element, index, array);
      };
   
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
     },
     chunk(array, size) {
       if (size === undefined) {
         size = 1;
       }
       const arrayChunks = [];
       for (let i = 0; i < array.length; i += size){
         let arrayChunk = array.slice(i, i+size);
         arrayChunks.push(arrayChunk);
       }
       return arrayChunks;
     }
  };
  
  
  
  
  // Do not write or modify code below this line.