/*
 *
 *  -----------
 * | STAIRCASE |
 *  -----------
 *
 * Write a program that prints a staircase of size n
 * where n is the height and width of bass
 *
 * e.g.
 *
 * staircase(4) 
 *
 * prints this...
 *
 *    #
 *   ##
 *  ###
 * ####
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function staircase(n) {
    for(let i = 1; i <= n; i++){
        const output = "#".repeat(i);
        const spaces = " ".repeat(n - i);
        console.log(spaces + output);
    };
	return null;
};



/*
 * ***** TESTS
 *
 * */

console.log("## TEST 1 ----- > ", staircase(4)); 

/*
 * 
 *    #
 *   ##
 *  ###
 * ####
 *
 * */

// const numsArr2 = null;
// console.log("## TEST 2 ----- > ", staircase(numsArr2)); // 100

// const numsArr3 = null;
// console.log("## TEST 3 ----- > ", staircase(numsArr3)); // 128


