define(['fizzbuzz'], function(fizzbuzz) {

	describe('number not dividable by 3, 5 or 15', function() {
		it('should return the number', function() {
			expect(fizzbuzz(1)).to.equal(1);
			expect(fizzbuzz(2)).to.equal(2);
			expect(fizzbuzz(7)).to.equal(7);
		});
	});
	
	describe('number dividable by 3', function() {
		it('should return Buzz', function() {
			expect(fizzbuzz(3)).to.equal("Fizz");
			expect(fizzbuzz(6)).to.equal("Fizz");
			expect(fizzbuzz(9)).to.equal("Fizz");
		});
	});
	
	describe('number dividable by 5', function() {
		it('should return Buzz', function() {
			expect(fizzbuzz(5)).to.equal("Buzz");
			expect(fizzbuzz(10)).to.equal("Buzz");
		});
	});
	
	describe('number dividable by 15', function() {
		it('should return FizzBuzz', function() {
			expect(fizzbuzz(15)).to.equal("FizzBuzz");
			expect(fizzbuzz(30)).to.equal("FizzBuzz");
		});
	});
	
});