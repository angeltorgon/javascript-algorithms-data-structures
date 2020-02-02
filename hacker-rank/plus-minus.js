/*
 *  ------------
 * | PLUS MINUS |
 *  ------------
 *
 * Given an array of integers, calculate the fractions of its 
 * elements that are positive, negative, and are zeros. 
 * Print the decimal value of each fraction on a new line.
 *
 * e.g.
 *
 * numArr = [1, 1, 0, -1, -1];
 *
 * plusMinus(numArr) 
 *
 * console logs the lines below
 * 0.400000
 * 0.400000
 * 0.200000
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function plusMinus(numsArr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    for(let num of numsArr) {
        if(num > 0){
            positives += 1;
        };
        if(num < 0){
            negatives += 1;
        };
        if(num === 0){
            zeros += 1;
        };
    };
    console.log((Math.abs(positives)/numsArr.length).toFixed(6));
    console.log((Math.abs(negatives)/numsArr.length).toFixed(6));
    console.log((Math.abs(zeros)/numsArr.length).toFixed(6));
	return null;
};



/*
 * ***** TESTS
 *
 * */

const numsArr1 = [1, 1, 0, -1, -1];
console.log("## TEST 1 ----- > ", plusMinus(numsArr1)); // 6

// const numsArr2 = null;
// console.log("## TEST 2 ----- > ", plusMinus(numsArr2)); // 100

// const numsArr3 = null;
// console.log("## TEST 3 ----- > ", plusMinus(numsArr3)); // 128


