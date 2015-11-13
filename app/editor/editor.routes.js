(function(){
  'use strict';
// customers.routes.js
angular
    .module('editor')
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates(), '/hello');
}

function getStates() {
    return [      
        {
            state: 'editor',
            config: {
                template: '',
                url: '/editor',
                abstract: true
            }
        },
        {
            state: 'editor-edit',
            config: {
                templateUrl: 'layout/editor/index.html',
                url: '/editor',
                controller: 'editorCtrl as vm'
            }
        }
    ];
}

})();