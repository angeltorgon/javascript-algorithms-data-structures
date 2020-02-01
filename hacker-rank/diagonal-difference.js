/*
 *
 * DIAGONAL DIFFERENCE
 *
 * 
 * Given a square matrix, calculate the absolute difference between 
 * the sums of its diagonals.
 *
 * e.g.
 *
 * Given matrix below.
 *
 * matrix = [
 * 				[1, 2, 3]
 * 				[4, 5, 6]
 * 				[9, 8, 9] 
 * 			]
 *
 * diagonalDifference(matrix) // returns 2 -- > |(1+5+9) - (3+5+9)|
 *                                                  14   -    17
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function diagonalDifference(matrix) {
	// initialize counter variable for left diagonal
	let leftDiagonalCounter = 0;
	// initialize counter variable for right diagonal
	let rightDiagonalCounter = 0;
	
	// loop over matrix
	for(let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
		// each time we add a number to each of the counters
		const leftValue = matrix[i][i];
		const rightValue = matrix[i][j];
		leftDiagonalCounter += leftValue;
		rightDiagonalCounter += rightValue;
	}
    	
	return Math.abs(leftDiagonalCounter - rightDiagonalCounter);
};



/*
 * ***** TESTS
 *
 * */

const matrix1 = [
	[1, 2, 3],
	[4, 5, 6],
	[9, 8, 9]
];
console.log("## TEST 1 ----- > ", diagonalDifference(matrix1)); // 2

const matrix2 = [
	[1, 2, 3, 4, 2],
	[4, 5, 6, 4, 5],
	[9, 8, 9, 2, 1],
	[3, 0, 1, 2, 1],
	[8, 4, 9, 2, 7]
];
console.log("## TEST 2 ----- > ", diagonalDifference(matrix2)); // 1

const matrix3 = [
	[1, 2, 3, 4, 2, 4],
	[4, 5, 6, 4, 5, 4],
	[9, 8, 9, 2, 1, 4],
	[3, 0, 1, 2, 1, 4],
	[1, 6, 9, 2, 1, 4],
	[8, 4, 9, 2, 7, 4]
];
console.log("## TEST 3 ----- > ", diagonalDifference(matrix3)); // 4

