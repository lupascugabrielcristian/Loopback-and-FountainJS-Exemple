var angular = require('angular');

var topicItem = require('./topicItem');
var topicsProvider = require('./topicsProvider');
var allTopics = require('./allTopics');
var postTopic = require('./postTopic');

var topicsModule = 'topicsModule';

module.exports = topicsModule;

angular
  .module(topicsModule, [])
  .component('topicItem', topicItem)
  .component('allTopics', allTopics)
  .component('postTopic', postTopic)
  .factory('topicsProvider', topicsProvider);
