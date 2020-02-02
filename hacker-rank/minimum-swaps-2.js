/*
 *
 *  ------------------
 * |   MINIMUM SWAP   |
 *  ------------------
 *
 * You are given an unordered array consisting 
 * of consecutive integers without any duplicates. 
 * You are allowed to swap any two elements. You 
 * need to find the minimum number of swaps required 
 * to sort the array in ascending order. 
 *
 * e.g
 * 
 * arr = [7,1,3,2,4,5,6]
 * 
 * i   arr                         swap (indices)
 * 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
 * 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
 * 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
 * 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
 * 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
 * 5   [1, 2, 3, 4, 5, 6, 7]
 * 
 * returns 5
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function minimumSwaps(arr) {
	// initialize swaps counter
	let swapCounter = 0;
	// loop over arr
	for(let i = 0; i < arr.length; i++) {
		// if arr[i] !== i + 1
		if(arr[i] !== i + 1){
			// find index of correct value
			const correctIndex = arr.indexOf(i + 1)
			// swatp current index with index of correct value
			const currValue = arr[i];
			arr[i] = arr[correctIndex];
			arr[correctIndex] = currValue;
			// increase swaps counter
			swapCounter ++;
		}
	}
	// return swaps counter
	return swapCounter;
}

/*
 *
 * ***** TESTS
 *
 * */

const arr1 = [1, 3, 2]; // 1
const arr2 = [1, 4, 2, 3]; // 2
const arr3 = [4, 1, 2, 3]; // 3
const arr4 = [2, 3, 4, 1, 5] // 3
const arr5 = [ 4, 3, 1, 2 ] // 3
const arr6 = [7, 1, 3, 2, 4, 5, 6] // 5

//minimumSwaps(arr1);
//minimumSwaps(arr2);
console.log(minimumSwaps(arr6));

