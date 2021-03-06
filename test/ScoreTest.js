'use strict';
const expect = require('chai').expect;
const Score = require('../src/Score.js');
describe('Score', function() {
   let score = new Score([1,2,3,4,5]);

   it('should create an instance of Score', function () {
       expect(score).to.be.instanceOf(Score);
       }
   );

   describe('valueOccurrences', function() {
       it('should count and sum a single occurrence of a value', function () {
           let score = new Score([1, 2, 3, 3, 3]);
           expect(score.valueOccurrences(1)).to.equal(1);
       });
       it('should count and sum multiple occurrences of a value', function () {
           let score = new Score([1, 2, 2, 2, 3]);
           expect(score.valueOccurrences(2)).to.equal(6);
       });
       it('should not count values that don\'t occur', function () {
           let score = new Score([1, 2, 2, 2, 3]);
           expect(score.valueOccurrences(4)).to.equal(0);
       })
    });

   describe('pair', function () {
       it('should score a roll with respect to the pair category', function () {
           let score = new Score([1, 2, 3, 3, 6]);
           expect(score.pair()).to.equal(6);
       });
       it('should score 0 if there is no pair', function () {
           let score = new Score([1, 2, 3, 5, 6]);
           expect(score.pair()).to.equal(0);
       });
       it('should score only the highest pair', function () {
           let score = new Score([1, 2, 2, 4, 4]);
           expect(score.pair()).to.equal(8);
       })
   });
   describe('twoPair', function () {
       it('should score two pairs in a roll', function () {
           let score = new Score([3, 3, 2, 5, 5]);
           expect(score.twoPair()).to.equal(16);
       });
       it('should score two pairs even if it\'s a full house' , function () {
           let score = new Score([3, 3, 3, 5, 5]);
           expect(score.twoPair()).to.equal(16);
       });
       it('should score 0 when there is just one pair' , function () {
           let score = new Score([3, 1, 4, 5, 5]);
           expect(score.twoPair()).to.equal(0);
       })
   });
   describe('threeOfAKind', function () {
       it('should score a three of a kind in a roll', function () {
           let score = new Score([1, 1, 1, 2, 3]);
           expect(score.threeOfAKind()).to.equal(3);
       });
       it('should score a three of a kind even if it\'s a poker', function () {
           let score = new Score([1, 1, 1, 1, 3]);
           expect(score.threeOfAKind()).to.equal(3);
       });
       it('should score 0 if there is no three of a kind', function () {
           let score = new Score([1, 1, 4, 2, 3]);
           expect(score.threeOfAKind()).to.equal(0);
       });
   });
   describe('fourOfAKind', function () {
       it('should score a four of a kind in a roll', function () {
           let score = new Score([2, 2, 2, 2, 3]);
           expect(score.fourOfAKind()).to.equal(8);
       });
       it('should score 0 if there is no four of a kind', function () {
           let score = new Score([1, 1, 1, 2, 3]);
           expect(score.fourOfAKind()).to.equal(0);
       });
   });
   describe('smallStraight', function () {
       it('should score a straight from 1 to 5', function () {
           let score = new Score([1, 2, 3, 4, 5]);
           expect(score.smallStraight()).to.equal(15)
       });
       it('should score 0 otherwise', function () {
           let score = new Score([1, 2, 3, 4, 6]);
           expect(score.smallStraight()).to.equal(0)
       });
   });
   describe('largeStraight', function () {
        it('should score a straight from 2 to 6', function () {
            let score = new Score([2, 3, 4, 5, 6]);
            expect(score.largeStraight()).to.equal(20)
        });
        it('should score 0 otherwise', function () {
            let score = new Score([1, 2, 3, 5, 6]);
            expect(score.largeStraight()).to.equal(0)
        });
   });
   describe('fullHouse', function () {
       it('should score a full house', function () {
           let score = new Score([2, 2, 2, 3, 3]);
           expect(score.fullHouse()).to.equal(12);
       });
       it('should score a 0 otherwise', function () {
           let score = new Score([2, 2, 2, 3, 4]);
           expect(score.fullHouse()).to.equal(0);
       });
   });
   describe('yahtzee', function () {
       it('should score a yahtzee', function () {
           let score = new Score([5, 5, 5, 5, 5]);
           expect(score.yahtzee()).to.equal(50);
       });
       it('should score 0 otherwise', function () {
           let score = new Score([1, 5, 5, 5, 5]);
           expect(score.yahtzee()).to.equal(0);
       });
   });
   describe('chance', function () {
       it('should sum the face value of all dice, no matter what', function () {
           let score = new Score([2, 2, 2, 2, 2]);
           expect(score.chance()).to.equal(10);
       });
   })
});

