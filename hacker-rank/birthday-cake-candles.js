/*
 *
 *  -----------------------
 * | BIRTHDAY CAKE CANDLES |
 *  -----------------------
 *
 *
 * Given an integer for the number of birthdsy candles and 
 * an array of the heights of each of those candles. Return
 * how many candles will be blown if only the tallest candles
 * are blown.
 *
 * e.g.
 *
 * candleHeights = [1, 3, 4, 4 ]
 *
 * birthdayCakeCandles(numArr) // returns 2 (two candles of height 4)
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function birthdayCakeCandles(arr) {
    // initialize counter
    let counter = 0;
    // initialize maxValue
    let maxValue = 0;

    // loop over array
    for(let num of arr) {
        // f arr[i] === maxValue
        if(num === maxValue){
            // counter = 1
            counter ++;
        // else if arr[i] > maxValue
        } else if (num > maxValue){
            // maxValue = arr[1]
            maxValue = num;
            // counter = 1
            counter = 1;
        }
    }

    console.log("counter - ", counter);
	return counter;
};



/*
 *
 * ***** TESTS
 *
 * */

const args1 = [3,2,1,3];
console.log("## TEST 1 ----- > ", birthdayCakeCandles(args1)); // 6

const args2 = [3,2,1,3,3, 4, 5];
console.log("## TEST 2 ----- > ", birthdayCakeCandles(args2)); // 6

// const args3 = null;
// console.log("## TEST 3 ----- > ", birthdayCakeCandles(args3)); // 128

