describe('pingpong',function() {
  it("should replace a multiple of three with ping", function(){
    expect(pingpong(3)).to.eql([1, 2, "ping"]);
  })

  it("should replace a multiple of five with pong", function(){
    expect(pingpong(5)).to.eql([1, 2, "ping", 4, "pong"]);
  })
  it("should replace a multiple of 15 (3 and 5) with ping pong", function(){
    expect(pingpong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping pong"]);
  })
  it("should return any number that isn't a multimple of 3, 5, or 15", function(){
    expect(pingpong(2)).to.eql([1, 2]);
  })
})
