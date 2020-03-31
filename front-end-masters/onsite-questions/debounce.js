// Implement debounce

function debounce(fn, time) {
    let timeoutId;
    
    return function() {
        if(timeoutId) {
            clearTimeout();
        }

        timeoutId = setTimeout(() => {
            fn.apply(this);
            timeoutId = null;
        }, time)

    }
};

