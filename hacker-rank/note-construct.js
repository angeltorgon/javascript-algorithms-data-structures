/*
 *
 *  -------------------
 * | NOTE CONSTRUCTION |
 *  -------------------
 *
 *
 * Given an array of integers, find the sum of its elements.
 *
 * e.g.
 *
 * numArr = [1, 3, 4 ]
 *
 * constructNote(numArr) // returns 1 + 3 + 4
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function constructNote(magazine, note) {
    // init magazineMap
    const magazineMap = {};

    // populate magazineMap using for loop
    for(let word of magazine) {
        magazineMap[word] = magazineMap[word] + 1 || 1;
    };

    // loop over note
    for(let word of note) {
        
        if(!magazineMap[word]) {
           return false; 
        };
        !magazineMap[word] --;
    };
    

    // if a word is not found in magazineMap
    // return false
        
    return true;
};



/*
 *
 * ***** TESTS
 *
 * */

const magazine1 = ["hello", "are", "you", "there"];
const note1 = ["friend", "hello", "are", "you", "there"];
console.log("## TEST 1 ----- > ", constructNote(magazine1, note1)); // false

const magazine2 = ["hello", "are", "you", "there", "friend"];
const note2 = ["friend", "hello", "are", "you", "there"];
console.log("## TEST 1 ----- > ", constructNote(magazine2, note2)); // true

const magazine3 = ["hello", "are", "you", "there", "friend"];
const note3 = ["hello", "friend", "hello", "are", "you", "there"];
console.log("## TEST 1 ----- > ", constructNote(magazine3, note3)); // false


