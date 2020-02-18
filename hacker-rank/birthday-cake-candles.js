/*
 *
 *  ------------------
 * |     CHALLENGE 1  |
 *  ------------------
 *
 *
 * Given an array of integers, find the sum of its elements.
 *
 * e.g.
 *
 * numArr = [1, 3, 4 ]
 *
 * template(numArr) // returns 1 + 3 + 4
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function template(args) {
	return null;
};



/*
 *
 * ***** TESTS
 *
 * */

const args1 = null;
console.log("## TEST 1 ----- > ", template(args1)); // 6

// const args2 = null;
// console.log("## TEST 2 ----- > ", template(args2)); // 100

// const args3 = null;
// console.log("## TEST 3 ----- > ", template(args3)); // 128

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

