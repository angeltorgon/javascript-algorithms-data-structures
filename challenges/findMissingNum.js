//=============================== How do you find the missing number in a given integer array of 1 to 100?

array = [2, 3, 5, 7, 1, 9, 10, 6, 15]

function findMissingNum(array) {
    for (var i = 0; i < array.length; i++) {
        array.sort((a, b) => (a-b));
        if(array[i] != (i+1)){
            return i + 1;
        }
    }
}

console.log(findMissingNum(array))