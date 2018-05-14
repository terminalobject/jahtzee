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

Score.prototype.isSmallStraight = function () {
    return this.getRoll().sort().join(',') === [1, 2, 3, 4, 5].join(',');
};

Score.prototype.smallStraight = function () {
    return this.isSmallStraight() ? 15 : 0;
};

Score.prototype.isLargeStraight = function () {
    return this.getRoll().sort().join(',') === [2, 3, 4, 5, 6].join(',');
};

Score.prototype.largeStraight = function () {
    return this.isLargeStraight() ? 20 : 0;
};

Score.prototype.fullHouse = function () {
    for (let element in this.getRoll().sort()) {
        if ((this.countInArray(this.getRoll(), this.getRoll()[0]) === 3)
            && (this.countInArray(this.getRoll(), this.getRoll()[4]) === 2)) {
            return this.getRoll()[0] * 3 + this.getRoll()[4] * 2
        }
        else if ((this.countInArray(this.getRoll(), this.getRoll()[0]) === 2)
            && (this.countInArray(this.getRoll(), this.getRoll()[4]) === 3)) {
            return this.getRoll()[0] * 2 + this.getRoll()[4] * 3
        }
    }
    return 0;
};

module.exports = Score;
