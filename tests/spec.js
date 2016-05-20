describe('fizzBuzz', function() {

  beforeEach(function() {
    spyOn(console, 'log')
  })

  it('should exist', function() {
    expect(fizzBuzz).toEqual(jasmine.any(Function));
  })

  it('should call console.log the correct number of times', function() {
    fizzBuzz();
    expect(console.log.calls.count()).toEqual(100);
  })

  it('should work correctly', function() {
    fizzBuzz();
    expect(console.log.calls.all()[2].args[0].toLowerCase()).toEqual('fizz')
    expect(console.log.calls.all()[9].args[0].toLowerCase()).toEqual('buzz')
    expect(console.log.calls.all()[14].args[0].toLowerCase()).toEqual('fizzbuzz')
  })
})
