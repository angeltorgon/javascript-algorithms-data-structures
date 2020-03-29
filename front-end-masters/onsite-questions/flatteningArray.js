// Without using .flat(), create a function to flatten an array

// const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]

function flattenArray(array) {
    const flatArray = [];
    for(let item of array) {
        if(typeof item === "number") {
            flatArray.push(item);
        } else {
            console.log("we found an array!");
            flatArray.push(...flattenArray(item));
        }
    } 

    return flatArray
}

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
console.log(flattenArray(exampleArray));
