/*
 *
 * BUBBLE SORT
 *
 *
 *
 *
 * Create a function that implements bubble sort. 
 * It is given an array and it must return 3 things. 
 * The number of swaps it took to sort the array, the first 
 * element of the sorted array, and the last
 * element of the sorted array. 
 * Array is sorted in 0 swaps.
 * First Element: 1
 * Last Element: 3
 *
 *
 * e.g.
 *
 *
 * const numArr = [2,1,3,4];
 * 
 * function countSwaps(a) {
 * 	
 * 	console.log(`Array is sorted in ${} swaps`);
 * 	console.log(`First Element: ${}`);
 * 	console.log(`Last Element: ${}`);
 * 
 * }
 *
 *
 *
 *
*/

/*
 *
 * ***** SOLUTION
 *
 * */

function countSwaps(a) {
	// initialize swap counter
	let swapCounter = 0;
	let swapFlag = true;

	// create a while loop that runs until arrays are equal
	while(swapFlag) {
		// inside while do a for loop that loops over a
		let hasSwaped = false;
		for(let i = 0; i < a.length; i++){
			// inside the for loop check if the number is great than the next

			// if it is then swap 
			if(a[i] > a[i+1]){
			// increase swap counter
				let value = a[i];
				a[i] = a[i+1];
				a[i+1] = value;
				swapCounter ++;
				hasSwaped = true;
			} 
		};

		if(!hasSwaped){
			swapFlag = false;	
		}

	}
	console.log(`Array is sorted in ${swapCounter} swaps`);
	console.log(`First Element: ${a[0]}`);
	console.log(`Last Element: ${a[a.length -1]}`);
}

/*
 *
 * ***** TESTS
 *
 * */

const numsArr1 = [1,3,2]; // 1
const numsArr2 = [1,4,2,3]; // 2
const numsArr3 = [4,3,2,1]; // 6

console.log(countSwaps(numsArr3));
