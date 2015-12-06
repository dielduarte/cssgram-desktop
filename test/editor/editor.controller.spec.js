describe('Editor: editorCtrl tests', function(){
  var ctrl, currentImage, $state;

  beforeEach(module('app'));

  beforeEach(module('editor'));

  beforeEach(inject(function($controller, _currentImage_, _$state_){
    ctrl = $controller('editorCtrl');
    currentImage = _currentImage_;
    $state = _$state_;
  }));

  it('should verify init variables', function() {
    expect(ctrl.filterSelected).toBeDefined();
    expect(ctrl.addFilter).toBeDefined();
    expect(ctrl.upload).toBeDefined();
    expect(ctrl.currentImage).toBeDefined();
  });

  describe('Editor: addFilter function tests', function() {
    it('should check out filterSelected equals filter passed to the function', function () {
      var filter = 'myfilter';

      ctrl.addFilter(filter);
      expect(ctrl.filterSelected).toEqual(filter);

    });
  });
});