let counter = (function() {
    let privateCounter = 0;

    function changeBy (val) {
        privateCounter += val;
    }

    function multiplyBy (val) {
        privateCounter *= val;
    }
    
    function divideBy (val) {
        privateCounter /= val;
    }

    function addBy (val) {
        privateCounter += val;
    }

    function subtractBy (val) {
        privateCounter -= val;
    }

    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        multiplication: function (val) {
            
            multiplyBy(val); 
        },
        division: function (val) {
            divideBy(val);
        },
        addition: function (val) {

            addBy(val);
        },
        subtraction: function (val) {
            subtractBy(val);
        },
        value: function () {
            return privateCounter;
        }
    };
})();

// IIFE (Imediately Invoked Function Expression)

console.log(counter.increment())
console.log(counter.multiplication(2))
console.log(counter.value())
