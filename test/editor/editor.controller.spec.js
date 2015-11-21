describe('Editor: editorCtrl tests', function(){
  var ctrl;

  beforeEach(module('app'));

  beforeEach(module('editor'));

  beforeEach(inject(function($controller){
    ctrl = $controller('editorCtrl');
  }));

  it('should verify init variables', function() {
    expect(ctrl.filterSelected).toBeDefined();
    expect(ctrl.addFilter).toBeDefined();
  });

  describe('Editor: addFilter function tests', function() {
    it('should check out filterSelected equals filter passed to the function', function () {
      var filter = 'myfilter';

      ctrl.addFilter(filter);
      expect(ctrl.filterSelected).toEqual(filter);

    });
  });
});