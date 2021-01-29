/**
 * Two Sum
 *
 * Sum two values - index 0 and index 1
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

 
