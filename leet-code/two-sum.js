/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * 
 */

// *-+*- *-+*- *-+*- *-+*- *-+*-  SOLUTION 1

// var twoSum = function(nums, target) {
// 	// console.log("nums", nums);
// 	console.log("target", target);
// 
// 	// initialize indexes arr
// 	const indexes = [];
// 	// loop over nums
// 	console.log(`idx | val`);
// 	for(let i = 0; i < nums.length; i++) {
// 		console.log(`${i} --- ${nums[i]}`);
// 		// check if nums[i] is less than target
// 			// check differece between target and num[i] exists as value in nums
// 			const secondIndex = nums.indexOf(target - nums[i]);
// 			console.log("secondIndex", secondIndex);
// 
// 			// if num is found return arr of indexes
// 			if(secondIndex > -1 && secondIndex !== i) {
// 				const indexArr = [i, secondIndex];
// 				return indexArr
// 			};
// 			console.log("second index -- " , secondIndex);
// 	};
// };


// *-+*- *-+*- *-+*- *-+*- *-+*-  SOLUTION 2

var twoSum = function(nums, target) {
	// create obj to store all values of nums
	const numsMap = {};
	// loop over nums to fill up map
	for(let i = 0; i < nums.length; i++) {
		const key = nums[i];
		const value = i;
		if(numsMap[key]) {
			numsMap[key].push(value);	
		} else {
			numsMap[`${key}`] = [value];
		}
	};

	// return the indexes of the matching value
	for(let num in numsMap) {
		const index1 = parseInt(num);
		const difference = target - index1;
		if(numsMap[`${difference}`]) {
				const indexes =  [numsMap[`${index1}`][0], numsMap[`${difference}`][numsMap[`${difference}`].length - 1]]
				return indexes;
		}
	};
};

// -+^+-  -+^+-  -+^+-  -+^+-  -+^+-  TESTS

const inputs1 = {nums: [1, 3, 4, 2], target:3};
const inputs2 = {nums: [1, 2, 3, 4], target:4};
const inputs3 = {nums: [1, 2, 3, 4], target:6};
const inputs4 = {nums: [-1,-2,-3,-4,-5], target:-8};
const inputs5 = {nums:[3,2,4], target:6}; // [1,2]

//console.log(twoSum(inputs1.nums, inputs1.target)); // [0,3]
//console.log(twoSum(inputs2.nums, inputs2.target)); // [0,2]
//console.log(twoSum(inputs3.nums, inputs3.target)); // [1,3]
console.log(twoSum(inputs5.nums, inputs5.target)); // [2,5]
