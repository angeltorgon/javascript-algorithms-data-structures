/*
 *
 *  ------------------
 * |   MINI MAX SUM   |
 *  ------------------
 *
 *
 * Given an array of 5 integers. Print the maximum and minimum 
 * value that 4 of those integers can add up to.
 *
 * e.g.
 *
 * numArr = [1,3,5,7,9]
 *
 * miniMaxSum(numArr) // prints "14 10"
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function miniMaxSum(args) {
    // sort args
    args.sort();

    console.log("sorted args - ", args);
    // initialize max and min variables
    // add up first 4 nums and store the min min
    let min = args.slice(0,4).reduce((acc, curr) =>{
        return acc + curr 
    }, 0)
    
    // add up last 4 nums and store the min max
    let max = args.slice(1,5).reduce((acc, curr) =>{
        return acc + curr 
    }, 0)

    console.log(`${min} ${max}`);
	return null;
};



/*
 *
 * ***** TESTS
 *
 * */

const args1 = [3,1,5,7,9];
console.log("## TEST 1 ----- > ", miniMaxSum(args1)); // 6

// const args2 = null;
// console.log("## TEST 2 ----- > ", miniMaxSum(args2)); // 100

// const args3 = null;
// console.log("## TEST 3 ----- > ", miniMaxSum(args3)); // 128

