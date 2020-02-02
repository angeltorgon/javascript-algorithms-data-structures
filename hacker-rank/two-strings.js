/*
 *
 *  ------------------
 * |    TWO STRINGS   |
 *  ------------------
 *
 * 
 * Given two strings, determine if they share a common substring. 
 * A substring may be as small as one character.  For example, the 
 * words "a", "and", "art" share the common substring "a". 
 * The words "be" and "cat" do not share a substring.  Substring can 
 * be as small as 1 char.
 *
 * e.g.
 *
 * numArr = [1, 3, 4 ]
 *
 * template(numArr) // returns 1 + 3 + 4
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */



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


/*
 *
 * ***** TESTS
 *
 * */





console.log(twoStrings("km", "hello")); // NO
console.log(twoStrings("he", "hello")); // YES
console.log(twoStrings("how are you", "u")); // YES
console.log(twoStrings("atopr", "mylkj")); // NO
