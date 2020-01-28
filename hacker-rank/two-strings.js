/*
Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring "a". The words "be" and "cat" do not share a substring.

Substring can be as small as 1 char


function twoStrings(s1,s2) { // s1 and s2 are strings
	// should console.log "YES" if they share substring
	// should console.log "NO" if they don't share substring
}

const string1 = "hello";
const string2 = "he";

twoStrings(string1, string2); // "Yes"


// %-+-> %-+-> %-+-> %-+-> %-+-> %-+-> TESTS

twoStrings("helo", "hello");

*/

// %-+-> %-+-> %-+-> %-+-> %-+-> %-+-> SOLUTION 1

function twoStrings(s1,s2) {
	// initialize a map to store values of s1
	const stringMap = {};

	// loop over s1 to populate map
	for(let character of s1){
		stringMap[character] = stringMap[character] + 1 || 1;
	};
	
	// loop over s2 to check if any value is in map
	for(let character of s2) {
		if(stringMap[character]) {
			return "YES";
		}
	};
	
	return "NO";
}


// %-+-> %-+-> %-+-> %-+-> %-+-> %-+-> TESTS


console.log(twoStrings("km", "hello")); // NO
console.log(twoStrings("he", "hello")); // YES
console.log(twoStrings("how are you", "u")); // YES
console.log(twoStrings("atopr", "mylkj")); // NO
