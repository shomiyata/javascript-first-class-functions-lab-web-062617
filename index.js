function countdown(callback) {
    setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue, num) {
    return (num) => { return multiplierValue * num }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(x, y) {
    return x * y
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)