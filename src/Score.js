'use strict';

var Score = function (roll) {
    this.roll = roll;
};

Score.prototype.getRoll = function () {
    return this.roll;
};

Score.prototype.valueOccurrences = function(n) {
    return this.getRoll().includes(n) ? this.getRoll().filter((i) => i == n)
    .reduce((sum, i) => sum + i) : 0;
};

Score.prototype.countInArray = function(array, value) {
    return array.reduce((n, x) => n + (x === value), 0);
};

Score.prototype.pair = function() {
    for (let i = 6; i >= 1; i--) {
        if (this.countInArray(this.getRoll(), i) > 1) return i * 2;
    }
    return 0;
};

Score.prototype.isTwoPair = function() {
    let pairs = 0;
    for (let i = 6; i >= 1; i--) {
        if (this.countInArray(this.getRoll(), i) > 1) pairs += 1;
    }
    return pairs > 1;
};

Score.prototype.twoPair = function() {
    let total = 0;
    for (let i = 6; i >= 1; i--) {
        if (this.countInArray(this.getRoll(), i) > 1) total += i * 2;
    }
    return this.isTwoPair() ? total : 0;
};

Score.prototype.threeOfAKind = function () {
    for (let i = 6; i >= 1; i--) {
        if (this.countInArray(this.getRoll(), i) > 2) return  i * 3;
    }
    return 0;
};

Score.prototype.fourOfAKind = function () {
    for (let i = 6; i >= 1; i--) {
        if (this.countInArray(this.getRoll(), i) > 3) return  i * 4;
    }
    return 0;
};

module.exports = Score;
