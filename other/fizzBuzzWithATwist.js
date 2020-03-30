// look at integers from 1-100
// if it's a multiple of 3 fizz
// if it's a multiple of 5 print buzz
// if it's a multiple of both print fizzbuzz
// if it's not a multiple of either print the number

function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 5 === 0 && i % 3 === 0){
            console.log("fizzbuzz")
        }
        else if(i % 3 === 0){
            console.log("fizz")
        }
        else if(i % 5 === 0){
            console.log("buzz")
        }
        else {
            console.log(i)
        }
    }
}

const fizzBuzzObject = {
    3:"fizz", 
    5:"buzz", 
    7:"bazz"
};

function fizzBuzzUsingDataStructure(dataStructure) {
    for(let i = 1; i <= 105; i++) {
        let output = ""

        for(let [key, value] of Object.entries(dataStructure)){
            if(i % key === 0){
                output = output + value
            } 
        }

        if(output.length === 0){
            output = i;
        }

        console.log(output)
    }

};

fizzBuzzUsingDataStructure(fizzBuzzObject);

// review + vs += (incrementor)