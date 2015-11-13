(function(){

	angular
		.module('editor')
		.controller('editorCtrl', editorCtrl);

		function editorCtrl(){
			vm = this;
			vm.filterSelected = '';
			vm.addFilter = addFilter;

			function addFilter(filter){
				vm.filterSelected = filter;
			};

		};

})();