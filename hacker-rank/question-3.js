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
    let maxValue = 0;
    const numberMap = {};
    // run queries
    for(let query of queries){
        for(let i = query[0]; i <= query[1]; i++) {
            numberMap[i] = numberMap[i] + query[2] || query[2];
            if(numberMap[i] > maxValue){
                maxValue = numberMap[i];
            };
        };
    };

    return maxValue;
};

// function maxArrayQueries(n, queries) {
//     // create array of zeros
//     let initialArr = [];
//     for(let i = 0; i < n; i++){
//         initialArr.push(0);
//     };
//     // console.log("initialArr", initialArr);
//     let lowest = 0;
//     let highest = 0;

//     // run queries
//     for(let query of queries){
//         if(query[0] < lowest){
//             lowest = query[0];
//         };
//         if(query[0] > highest){
//             highest = query[0];
//         };
//         // console.log("query --- ", query); 
//         for(let j = query[0]; j <= query[1]; j ++){
//             initialArr[j - 1] += query[2];
//         };
        
//         // console.log("finishedArr -- ", initialArr);
//     };

//     // find largest value and return it
//     // initialize maxValue
//     let maxValue = 0;
//     for(let i = lowest - 1; i < highest; i++){
//         if(initialArr[i] > maxValue){
//             maxValue = initialArr[i];
//         };
//     };

//     return maxValue;
// };

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


