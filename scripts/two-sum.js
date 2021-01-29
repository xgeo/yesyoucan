/**
 * Two Sum
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

var assert = require('assert');
describe('[Question] - Script two-sum', function() {

    it('#CASE01: Quando o array A tiver os valores [66, 666, 999] e o array B tiver os valores [222, 22, 2] iremos somar a posição 0 do array A com a posição 1 do array B e o resultado será 66+22=88', function() {
        const arrayA = [
            66,
            666,
            999
        ];
        
        const arrayB = [
            222,
            22,
            2
        ];

        /** Resultado - Realizar cálculo */
        const result = arrayA[0] + arrayB[1];

        assert.strictEqual(result, 88);
    });

});

 
