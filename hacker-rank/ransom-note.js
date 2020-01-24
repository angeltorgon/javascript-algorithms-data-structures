/*
Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is .

function chechMagazine(m,n) { // m[] -> magazine, n[] -> note
	// prints yes of all words in note are in m to print full message
}

e.g.

magazine = [ive, got, a, lovely, bunch, of, coconuts]
note = [ive, got, some, coconuts]

checkMagazine(magazine, note); // prints `No`

*/

// 8-_== 8-_== 8-_== 8-_== 8-_== SOLUTION

function checkMagazine(magazine, note) {
	// initialize magMap
	const magMap = {};

	// use for loop to populate magMap
	for(let i = 0; i < magazine.length; i++) {
		magMap[magazine[i]] = magMap[magazine[i]] + 1 || 1;
	}

	// loop through to note and check with map to see if all the words are there
	for(let word of note){
		if(!magMap[word]){
			console.log("No");
			return
		};
		magMap[word] --
	};

	console.log("Yes");

};

// *^_@# *^_@# *^_@# *^_@# *^_@#  TESTS

const mag1 = ["give", "me", "one", "grand", "today", "night"];
const note1 = ["give", "one", "grand", "today", "today"];


const mag2 = ["two", "times", "three", "is", "not", "four"]
const note2 = ["two", "times", "two", "is", "four"]


console.log(checkMagazine(mag1, note1));

