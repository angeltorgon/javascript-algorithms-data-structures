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

function birthdayCakeCandles(args) {
	return null;
};



/*
 *
 * ***** TESTS
 *
 * */

const args1 = null;
console.log("## TEST 1 ----- > ", birthdayCakeCandles(args1)); // 6

// const args2 = null;
// console.log("## TEST 2 ----- > ", birthdayCakeCandles(args2)); // 100

// const args3 = null;
// console.log("## TEST 3 ----- > ", birthdayCakeCandles(args3)); // 128

function frequencyQueries(queries) {
    // Write your code here
    const map = {};
    const frequencies = {};
    const allQueryOutputs = [];

    for(let query of queries){
        if(query[0] === 1) {
            map[query[1]] = map[query[1]] + 1 || 1;
            frequencies[map[query[1]]] = frequencies[map[query[1]]] + 1 || 1;
        } 

        if (query[0] === 2) {
            if(map[query[1]]) map[query[1]] - 1;
        }

        if (query[0] === 3) {
            if(frequencies[query[1]] > 0) {
                allQueryOutputs.push(1)
            }
            else allQueryOutputs.push(0)

            // present ? allQueryOutputs.push(1) : allQueryOutputs.push(0);
        }
    };
    return allQueryOutputs;
}

