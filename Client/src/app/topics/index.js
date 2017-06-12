var angular = require('angular');

var topicItem = require('./topicItem');
var topicsProvider = require('./topicsProvider');
var allTopics = require('./allTopics');
var addLink = require('./addLink');
var linksProvider = require('./linksProvider');
var selectedTopic = require('./selectedTopic');
var topic = require('./topic');
var topicsOperations = require('./topicsOperations.service');

var topicsModule = 'topicsModule';

module.exports = topicsModule;

angular
  .module(topicsModule, [])
  .component('topicItem', topicItem)
  .component('allTopics', allTopics)
  .directive('addLink', addLink)
  .directive('topic', topic)
  .factory('topicsProvider', topicsProvider)
  .factory('linksProvider', linksProvider)
  .factory('topicsOperations', topicsOperations)
  .factory('selectedTopic', selectedTopic);
