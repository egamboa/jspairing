describe('Plans', function () {
  it('should have an empty list', function () {
    var plans = new Plans();
    expect(plans.list).toEqual([]);
  });
});