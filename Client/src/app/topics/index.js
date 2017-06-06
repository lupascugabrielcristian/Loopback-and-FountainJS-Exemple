var angular = require('angular');

var topicItem = require('./topicItem');
var topicsProvider = require('./topicsProvider');
var allTopics = require('./allTopics');
var postTopic = require('./postTopic');
var addLink = require('./addLink');
var linksProvider = require('./linksProvider');
var selectedTopic = require('./selectedTopic');
var topic = require('./topic');

var topicsModule = 'topicsModule';

module.exports = topicsModule;

angular
  .module(topicsModule, [])
  .component('topicItem', topicItem)
  .component('allTopics', allTopics)
  .component('postTopic', postTopic)
  .directive('addLink', addLink)
  .directive('topic', topic)
  .factory('topicsProvider', topicsProvider)
  .factory('linksProvider', linksProvider)
  .factory('selectedTopic', selectedTopic);
