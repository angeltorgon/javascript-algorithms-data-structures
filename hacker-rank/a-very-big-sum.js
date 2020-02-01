/*
 *
 * A VERY BIG SUM
 *
 *
 *
 *
 *
 *
 * Calculate and print the sum of all the numbers in the array
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

function aVeryBigSum(numsArr) {
	let counter = 0;

	for(let num of numsArr) {
		counter += num;		
	};
	
	console.log("sum ---> ", counter);
	return counter;
};



/*
 * ***** TESTS
 *
 * */

const numsArr1 = [100001, 1000003, 4004990];
console.log("## TEST 1 ----- > ", aVeryBigSum(numsArr1)); // 6

//const numsArr2 = null;
//console.log("## TEST 2 ----- > ", aVeryBigSum(numsArr2)); // 100

//const numsArr3 = null;
//console.log("## TEST 3 ----- > ", aVeryBigSum(numsArr3)); // 128


