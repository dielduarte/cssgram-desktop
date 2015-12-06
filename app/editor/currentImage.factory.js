(function(){
	'use strict';

	angular
		.module('editor')
		.factory('currentImage', currentImage);

		function currentImage(){
			return {
				setImage: setImage,
				getImage: getImage
			}

			function setImage(path){
				localStorage.setItem('pathImage', path);
			};

			function getImage() {
				return localStorage.getItem('pathImage') || '';
			};
		};
})();