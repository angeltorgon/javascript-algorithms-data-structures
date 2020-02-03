/*
 *
 *  --------------------
 * | ARRAY PARTITIONING |
 *  --------------------
 *
 *
 * Given k and an array of numbers. Return
 * "Yes" if it is possible to partition the 
 * array into subpartitions that are of size = k.
 * Each partition must contain only distict numbers.
 *
 * e.g.
 *
 * numArr = [1, 3, 4 ]
 *
 * partitionArray(numArr) // returns 1 + 3 + 4
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function partitionArray(k, numsArr) {
    // init numsMap
    const numsMap = {};

    // populate numsMap wirh for loop
    for(let num of numsArr) {
        numsMap[num] = numsMap[num] + 1 || 1
    };

    if( (numsArr.length % k) !== 0){
        return "No";
    };

    console.log("numsMap -- ", numsMap);
    // loop over numsMap 
    for(let num in numsMap) {
        // if a value > k 
        if(numsMap[num] > k) {
            // return "No"
            return "No";
        };
    };

    // return "Yes"
	return "Yes";
};



/*
 *
 * ***** TESTS
 *
 * */

const k = 2;
const numsArr1 = [4,4,3,4];
console.log("## TEST 1 ----- > ", partitionArray(k, numsArr1)); // "Yes"

// const k, numsArr2 = null;
// console.log("## TEST 2 ----- > ", partitionArray(k, numsArr2)); // 100

// const k, numsArr3 = null;
// console.log("## TEST 3 ----- > ", partitionArray(k, numsArr3)); // 128

