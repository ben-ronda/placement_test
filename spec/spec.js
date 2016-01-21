describe('pingpong',function() {
  it("should return ping if the any number leading up to the user input is divisble by 3", function(){
    expect(pingpong(15)).to.equal(true);
  })
})