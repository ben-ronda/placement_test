describe('pingpong',function() {
  it("should replace a multiple of three with ping", function(){
    expect(pingpong(3)).to.eql([1, 2, "ping"]);
  })
})