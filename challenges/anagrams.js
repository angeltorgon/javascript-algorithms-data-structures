// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const lengthsAreEqual = stringA.length === stringB.length
    if (lengthsAreEqual) {
        const letterMapA = createCharMap(stringA);
        const letterMapB = createCharMap(stringB);

        for (let value in letterMapA) {
            if (letterMapB[value] !== letterMapA[value]) {
                return false
            }
        }
        return true;
    }

    return false
}

function createCharMap(string) {
    const cleanString = string.replace(/[^\w]/g, "").toLowerCase();

    const stringMap = {};

    for (let char of cleanString) {
        if (stringMap.char) {
            stringMap.char++
        } else {
            stringMap[char] = 1
        }
    };

    return stringMap;
};

console.log(anagrams("mario kart", "kart mario")) // true
console.log(anagrams("mario kart", "karT/mario")) // true
console.log(anagrams("mario kartt", "kart mario")) // false
console.log(anagrams("mario kartt", "kars mario")) // false


// function anagrams(stringA, stringB) {
//     const isAnagrams = true;
//     const lengthsAreEqual = stringA.length === stringB.length

//     if (lengthsAreEqual){
//         const letterMapA = {};
//         const letterMapB = {};

//         const cleanStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//         const cleanStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

//         for ( let char of cleanStringA ) {
//             if(letterMapA.char){
//                 letterMapA.char++
//             } else {
//                 letterMapA[char] = 1
//             }
//         }

//         for ( let char of cleanStringB ) {
//             if(letterMapB.char){
//                 letterMapB.char++
//             } else {
//                 letterMapB[char] = 1
//             }
//         }

//         for (let value in letterMapA) {
//             if(letterMapB[value] !== letterMapA[value]) {
//                 return false
//             }
//         }
//         return true;
//     }

//     return false
// }