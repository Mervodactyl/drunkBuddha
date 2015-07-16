describe("BuddhaList", function() {
  var buddhaList;

  describe("Sole purpose is to", function() {
    it("select a Random Element from a Given list", function() {
      var list = new BuddhaList();
      spyOn(Math, "random").and.returnValue(0.1);
      expect(list.random("noun")).toEqual("water");
    });

  });

});
