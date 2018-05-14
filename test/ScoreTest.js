'use strict';
var expect = require('chai').expect;
var Score = require('../src/Score.js');
describe('Score', function() {
   var score = new Score([1,2,3,4,5]);

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
   })
});

