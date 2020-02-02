/* 
 *
 *  ------------------
 * |  NEW YEAR CHAOS  | INCOMPLETE
 *  ------------------
 *
 * minimumBribes takes in an array of integers
 * each integer represents a person in a queu 
 * the value of each integer is the starting position 
 * of each of the persons in line each person in line can 
 * bribe the the person right infront of them to 
 * switch spots a person can only bribe a maximum 
 * of 2 times
 *
 * complete minimumBribes so that it returns the 
 * minimum number of bribes that is needed to reach 
 * the current order of q if the q given cannot be made 
 * without violating the ruls log "too chaotic!"
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */


function minimumBribes(q) {
	let bribes = 0;

	for(let i = q.length - 1; i >= 0; i--) {
		const difference =  q[i] - (i + 1);

		if(difference > 2) {
			console.log("too chaotic");
			return
		}

		// console.log(`q.slice(0, q[i] -- ${q.slice(0, q[i])}`))
		//console.log( `j -- ${ q.slice( 0, (q[i] - 1) )}` );

		for(let j = 1; j < i; j++) {
			// console.log("j", j);		
			// console.log("q[j]", q[j]);		
			// console.log("q[i]", q[i]);		
			if(q[j] > q[i]) {
				bribes ++;	
			};
		};
	};
	console.log("bribes", bribes);
}


/*
 *
 * ***** TESTS
 *
 * */



const queu1 = [1, 2, 5, 4, 3]; // 2

const queu2 = [5, 1, 2, 3, 7, 8, 6, 4]; // Too chaotic
const queu3 = [1, 2, 5, 3, 7, 8, 6, 4]; // 7

// minimumBribes(queu1); // 2
// minimumBribes(queu2); // Too chattic
minimumBribes(queu1); // 7


