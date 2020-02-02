/*
 *
 *  ------------------
 * | SIMPLE ARRAY SUM |
 *  ------------------
 *
 * Given an array of integers, find the sum of its elements.
 *
 * e.g.
 *
 * numArr = [1, 3, 4 ]
 *
 * simpleArraySum(numArr) // returns 1 + 3 + 4
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */


function simpleArraySum(ar) {
	//counter = 0;
	let counter = 0;

	//loop over arr:
	for(let num of ar){
		//	increase counter by arr[i]
		counter += num;
	};	
	//
	//return counter
	return counter;
};



/*
 * ***** TESTS
 *
 * */

const numsArr1 = [1, 2, 3];
console.log("## TEST 1 ----- > ", simpleArraySum(numsArr1)); // 6

const numsArr2 = [10, 20, 30, 40];
console.log("## TEST 2 ----- > ", simpleArraySum(numsArr2)); // 100

const numsArr3 = [3, 13, 45, 67];
console.log("## TEST 3 ----- > ", simpleArraySum(numsArr3)); // 128


