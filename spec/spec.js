describe('pingpong',function() {
  it("should replace a multiple of three with ping", function(){
    expect(pingpong(3)).to.eql([1, 2, "ping"]);
  })

  it("should replace a multiple of 5 with pong", function(){
    expect(pingpong(5)).to.eql([1, 2, "ping", 4, "pong"]);
  })
})