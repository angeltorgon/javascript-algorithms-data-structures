// https://simpleprogrammer.com/programming-interview-questions/

//=============================== How do you find the missing number in a given integer array of 1 to 100?
arr = [2, 3, 5, 7, 1, 9, 10, 6]

function findMissingNum(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr.sort((a, b) => (a-b));
        if(arr[i] != (i+1)){
            return i + 1;
        }
    }
}

console.log(findMissingNum(arr))

//=============================== How do you find all missing numbers in a given integer array of 1 to 100?
function findMissingNums(arr) {
    missingNums = []; // this array will save all of the missing numbers 

    for (var inputIndex = 0, targetValue = arr[0]; targetValue <= arr[arr.length - 1]; targetValue++) {
        // in this for loop we have two inputs that will be changing with each iteration: inputIndex, targetValue
        // 

        console.log(`inputIndex: ${inputIndex} targetValue: ${targetValue}`);
        console.log(targetValue);

        if( arr[inputIndex] != targetValue) {
            // here we are comparing the
            missingNums.push(targetValue);
        } else {
            inputIndex++;
        }
    };

    return missingNums;
}

console.log(findMissingNums(arr));

// function findMissing(input) {

//     var result = []; // this is gonna store all of the missing numbers
  
//     for (var inputIndex = 0, targetValue = input[0]; targetValue <= input[input.length - 1]; targetValue++) {
//         // this for loop 

//       if (input[inputIndex] != targetValue) {
//         result.push(targetValue);
//       }
//       else {
//         inputIndex++;
//       }
//     }
  
//     return result;
//   }



// How do you find the duplicate number on a given integer array?
// How do you find the largest and smallest number in an unsorted integer array?
// How do you find all pairs of an integer array whose sum is equal to a given number?
// How do you find duplicate numbers in an array if it contains multiple duplicates?
// How are duplicates removed from a given array in Java?
// How is an integer array sorted in place using the quicksort algorithm?
// How do you remove duplicates from an array in place?
// How do you reverse an array in place in Java?
// How are duplicates removed from an array without using any library? How do you find the middle element of a singly linked list in one pass?
// How do you check if a given linked list contains a cycle? How do you find the starting node of the cycle?
// How do you reverse a linked list?
// How do you reverse a singly linked list without recursion?
// How are duplicate nodes removed in an unsorted linked list?
// How do you find the length of a singly linked list?
// How do you find the third node from the end in a singly linked list?
// How do you find the sum of two linked lists using Stack?
// How do you print duplicate characters from a string?
// How do you check if two strings are anagrams of each other?
// How do you print the first non-repeated character from a string?
// How can a given string be reversed using recursion?
// How do you check if a string contains only digits?
// How are duplicate characters found in a string?
// How do you count a number of vowels and consonants in a given string?
// How do you count the occurrence of a given character in a string?
// How do you find all permutations of a string?
// How do you reverse words in a given sentence without using any library method?
// How do you check if two strings are a rotation of each other?
// How do you check if a given string is a palindrome?
// How do you print duplicate characters from a string?
// How do you check if two strings are anagrams of each other?
// How do you print the first non-repeated character from a string?
// How can a given string be reversed using recursion?
// How do you check if a string contains only digits?
// How are duplicate characters found in a string?
// How do you count a number of vowels and consonants in a given string?
// How do you count the occurrence of a given character in a string?
// How do you find all permutations of a string?
// How do you reverse words in a given sentence without using any library method?
// How do you check if two strings are a rotation of each other?
// How do you check if a given string is a palindrome?
// How is a bubble sort algorithm implemented?
// How is an iterative quicksort algorithm implemented?
// How do you implement an insertion sort algorithm?
// How is a merge sort algorithm implemented?
// How do you implement a bucket sort algorithm?
// How do you implement a counting sort algorithm?
// How is a radix sort algorithm implemented?
// How do you swap two numbers without using the third variable?
// How do you check if two rectangles overlap with each other?
// How do you design a vending machine?