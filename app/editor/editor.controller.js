(function(){

	angular
		.module('editor')
		.controller('editorCtrl', editorCtrl);

		/*@ngInject*/
		function editorCtrl(currentImage, $state){
			vm = this;
			vm.filterSelected = '';
			vm.addFilter = addFilter;
			vm.upload = upload;
			vm.currentImage = currentImage.getImage();


			function addFilter(filter){
				vm.filterSelected = filter;
			};

			function upload(file) {
				currentImage.setImage(file[0].path);
				$state.go('editor-edit');
			};

		};

		editorCtrl.$inject = ['currentImage', '$state'];

})();