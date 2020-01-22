/* 

minimumBribes takes in an array of integers
each integer represents a person in a queu
the value of each integer is the starting position of each of the persons in line

each person in line can bribe the the person right infront of them to switch spots
a person can only bribe a maximum of 2 times

complete minimumBribes so that it returns the minimum number of bribes 
that is needed to reach the current order of q

if the q given cannot be made without violating the ruls log "Too chaotic!"

*/


function minimumBribes(q) {
	// generate a sorted array of the queu to compare with
	const sortedArr = [...q].sort();

	// loop through q and bribe our way until sorted array matches q
	for(let i = sortedArr.length - 1; i >= 0; i--) {
		console.log("sortedArr", sortedArr[i])	
		// increase counter everytime we want to bribe
	};
	// return counter
};

const currentQueu = [1, 4, 2, 3];


minimumBribes(currentQueu); // 2

