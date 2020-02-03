/*
 *
 *  ----------------------
 * | MAX OF ARRAY QUERIES |
 *  ----------------------
 *
 *
 * Given an array of integers, find the sum of its elements.
 *
 * e.g.
 *
 * numArr = [1, 3, 4 ]
 *
 * maxArrayQueries(numArr) // returns 1 + 3 + 4
 *
 *
 * */

/*
 *
 * ***** SOLUTION
 *
 * */

function maxArrayQueries(n, queries) {
    console.log("n - ", n);
    console.log("queries - ", queries);
};



/*
 *
 * ***** TESTS
 *
 * */

const n1 = 10;
const queries1 = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1]
];
console.log("## TEST 1 ----- > ", maxArrayQueries(n1, queries1)); // 10

// const magazine2 = ["hello", "are", "you", "there", "friend"];
// const note2 = ["friend", "hello", "are", "you", "there"];
// console.log("## TEST 1 ----- > ", maxArrayQueries(magazine2, note2)); // true

// const magazine3 = ["hello", "are", "you", "there", "friend"];
// const note3 = ["hello", "friend", "hello", "are", "you", "there"];
// console.log("## TEST 1 ----- > ", maxArrayQueries(magazine3, note3)); // false


