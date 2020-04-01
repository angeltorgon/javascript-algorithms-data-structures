// Create a sleep function that takes one parameter (time) and
// will wait "time" ms

/*
    async function run() {
        await sleep(500);
        console.log('hello');
        await sleep(500);
        console.log('world');
    }
*/

function sleep(time) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()       
        }, time)
    })
};

async function useSleep() {
    await sleep(500);
    console.log('hello');
    await sleep(500);
    console.log('world');
}

useSleep();
