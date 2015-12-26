describe('currentImage Factory Tests', function(){
	var currentImage;

	beforeEach(module('app'));

	beforeEach(inject(function(_currentImage_){
    currentImage = _currentImage_;
  }));

  it('should manage (set, get) pathImage key in localStorage', function(){
  	var path = 'current path';

  	currentImage.setImage(path);

  	expect(currentImage.getImage()).toEqual(path);
  });
});