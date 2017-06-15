var angular = require('angular');

var topicsModule = require('./app/topics/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var mainTopics = require('./app/topics/main');
var addLink = require('./app/topics/addLink');
var addTopic = require('./app/topics/addTopic');
var removeLink = require('./app/topics/removeLink');

require('./index.css');
require('./topics.css');

angular
  .module('app', [topicsModule, 'ui.router'])
  .config(routesConfig)
  .component('topics', mainTopics)
  .component('addLink', addLink)
  .component('addTopic', addTopic)
  .component('removeLink', removeLink);
