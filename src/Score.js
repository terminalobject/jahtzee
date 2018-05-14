'use strict';

var Score = function (roll) {
    this.roll = roll;
};

Score.prototype.sortedRoll = function () {
    return this.roll;
};

Score.prototype.valueOccurrences = function(n) {
    return this.sortedRoll().includes(n) ? this.sortedRoll().filter((i) => i == n)
    .reduce((sum, i) => sum + i) : 0;
};

Score.prototype.countInArray = function(array, value) {
    return array.reduce((n, x) => n + (x === value), 0);
};

Score.prototype.pair = function() {
    for (let i = 6; i >= 1; i--) {
        if (this.countInArray(this.sortedRoll(), i) > 1) return i * 2;
    }
    return 0;
};

Score.prototype.isTwoPair = function() {
    let pairs = 0;
    for (let i = 6; i >= 1; i--) {
        if (this.countInArray(this.sortedRoll(), i) > 1) pairs += 1;
    }
    return pairs > 1;
};

Score.prototype.twoPair = function() {
    let total = 0;
    for (let i = 6; i >= 1; i--) {
        if (this.countInArray(this.sortedRoll(), i) > 1) total += i * 2;
    }
    return this.isTwoPair() ? total : 0;
};

Score.prototype.threeOfAKind = function () {
    for (let i = 6; i >= 1; i--) {
        if (this.countInArray(this.sortedRoll(), i) > 2) return  i * 3;
    }
    return 0;
};

Score.prototype.fourOfAKind = function () {
    for (let i = 6; i >= 1; i--) {
        if (this.countInArray(this.sortedRoll(), i) > 3) return  i * 4;
    }
    return 0;
};

Score.prototype.isSmallStraight = function () {
    return this.sortedRoll().sort().join(',') === [1, 2, 3, 4, 5].join(',');
};

Score.prototype.smallStraight = function () {
    return this.isSmallStraight() ? 15 : 0;
};

Score.prototype.isLargeStraight = function () {
    return this.sortedRoll().sort().join(',') === [2, 3, 4, 5, 6].join(',');
};

Score.prototype.largeStraight = function () {
    return this.isLargeStraight() ? 20 : 0;
};

Score.prototype.fullHouse = function () {
    let sortedRoll = this.sortedRoll().sort();
    if ((this.countInArray(sortedRoll, sortedRoll[0]) === 3)
        && (this.countInArray(sortedRoll, sortedRoll[4]) === 2)) {
        return sortedRoll[0] * 3 + sortedRoll[4] * 2
    }
    else if ((this.countInArray(sortedRoll, sortedRoll[0]) === 2)
        && (this.countInArray(sortedRoll, sortedRoll[4]) === 3)) {
        return sortedRoll[0] * 2 + sortedRoll[4] * 3
    }
    return 0;
};

module.exports = Score;
