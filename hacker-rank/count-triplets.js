/*
 *
 *  ----------------
 * | COUNT TRIPLETS |
 *  ----------------
 *
 *
 * You are given an array of integers and `r`. Where `r`
 * is a ratio. The `r` of 1 and 4 is 4, the `r` of 2 and 4 is 2, etc.
 *
 * You need to find three different indexes (i,j,k) where the values
 * at those indexes all have `r` ratio and they are i<j<k.
 *
 * Find all the triplet indexes that meet these criteria.
 *
 * EDGE CASES
 *  - duplicate values?
 *      - count a triplet for each repeated value
 *  - negatives?
 *
 * e.g.
 *
 * numArr = [1, 3, 9, 9, 27, 81]
 * r = 3
 *
 * countTriplets.js(numArr, r) // returns 6
 *
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function countTriplets(numsArr, r) {
	return numsArr;
};



/*
 * ***** TESTS
 *
 * */

const numsArr1 = [1, 3, 9, 9, 27, 81]
const r1 = 3
console.log("## TEST 1 ----- > ", countTriplets(numsArr1, r1)); // 6

// const numsArr2 = null;
// console.log("## TEST 2 ----- > ", countTriplets(numsArr2)); // 100

// const numsArr3 = null;
// console.log("## TEST 3 ----- > ", countTriplets.js(numsArr3)); // 128


