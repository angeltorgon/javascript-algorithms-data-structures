/*

two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. given a string, find the number of pairs of substrings of the string that are anagrams of each other.

It must return an integer that represents the number of anagrammatic pairs of substrings 

e.g.

function sherlockAndAnagrams(s) { // s = "abba"
	// should return 4 --> ["a","a"], ["b","b"], ["ab", "ba"], ["abb", "bba"]
}

*/

// $_=>> $_=>> $_=>> $_=>> $_=>> SOLUTION

function sherlockAndAnagrams(s) {
    // initialize anagramMap
    // initialize range
    // initialize anagramCounter
    const anagramMap = {};
    let range = 1;
    let anagramCounter = 0;

    // while loop until range is === s.length
    while(range < s.length){
        // populate map using for loop
        for(let i = 0; i < s.length; i++){
            if(s[(i + range) - 1]){
                const key = s.slice(i, i + range).split("").sort().join("");
                    //console.log("range", `${i} - ${i + range} : ${key}`);
                anagramMap[key] = anagramMap[key] + 1 || 1;
            };
        };
        range ++;
    };
    // loop over anagram and find all keys that have values of greater than 1
    // increase counter if they are
    for(let key in anagramMap) {
        const value = anagramMap[key];
        if(value === 2) {
            anagramCounter++;
        }
        if(value > 2) {
            for(let i = 0; i < value; i++) {
                for(let j = i + 1; j < value; j++) {
                    anagramCounter ++;
                }
            };
        }
    };
    return anagramCounter;
}



// $_=>> $_=>> $_=>> $_=>> $_=>> TESTS

const s1 = "kkkk"; // 10 
const s2 = "abba"; // 4
const s3 = "yuyuyyu";
const s4 = "osjfdlkksjf";

console.log("s1 --- ", sherlockAndAnagrams(s1));
console.log("s2 --- ", sherlockAndAnagrams(s2));
//console.log("s3 --- ", sherlockAndAnagrams(s3));
//console.log("s4 --- ", sherlockAndAnagrams(s4));

