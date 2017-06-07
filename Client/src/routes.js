module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('topics', {
      url: '/',
      component: 'topics'
    })
    .state('app', {
      url: '/app',
      component: 'app'
    })
    .state('addLink', {
      url: '/allLink',
      component: 'addLink',
      params: {topic: null}
    });
}
