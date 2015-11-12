(function(){
  'use strict';
// customers.routes.js
angular
    .module('app')
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates(), '/hello');
}

function getStates() {
    return [      
        {
            state: 'app',
            config: {
                template: 'wellcome cssgram for desktop',
                url: '/app',
                abstract: true
            }
        },
        {
            state: 'app-hello',
            config: {
                template: 'wellcome cssgram for desktop',
                url: '/hello'
            }
        }
    ];
}

})();