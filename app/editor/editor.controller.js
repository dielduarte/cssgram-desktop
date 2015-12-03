(function(){

	angular
		.module('editor')
		.controller('editorCtrl', editorCtrl);

		function editorCtrl($scope){
			vm = this;
			vm.filterSelected = '';
			vm.addFilter = addFilter;
			vm.upload = upload;

			function addFilter(filter){
				vm.filterSelected = filter;
			};

			function upload (file) {
				vm.currentFile = file[0].path;
			};

		};

})();