var angular = require('angular');

var techsModule = require('./app/techs/index');
var topicsModule = require('./app/topics/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/header');
var title = require('./app/title');
var footer = require('./app/footer');
var mainTopics = require('./app/topics/main');

require('./index.css');

angular
  .module('app', [techsModule, topicsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .component('topics', mainTopics);
