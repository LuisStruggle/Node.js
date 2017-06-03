var sixthA = require("./sixthA");
var assert = require('assert');


//测试用例，用nodeJs自带的assert断言切入

describe('Calculator', function () {
	describe('#add()', function () {

		it('should get 3 when 1 add 2', function () {
			assert.equal(3, sixthA.add(1, 2));
		});

		it('should get 3 when 1 add 2', function () {
			assert.equal(4, sixthA.add(1, 2));
		});
	});
});
