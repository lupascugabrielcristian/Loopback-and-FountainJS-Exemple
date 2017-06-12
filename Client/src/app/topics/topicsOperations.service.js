module.exports = topicsOperations;

function topicsOperations($http) {
  return {
    remove: removeTopic
  };

  function removeTopic(topic) {
    // remove links
    var serverUrl = 'http://0.0.0.0:3000/api/topics/{topicId}/links';
    serverUrl = serverUrl.replace('{topicId}', topic.id);
    $http.delete(serverUrl);

    // remove topic
    serverUrl = 'http://0.0.0.0:3000/api/topics/{topicId}';
    serverUrl = serverUrl.replace('{topicId}', topic.id);
    $http.delete(serverUrl);
  }
}
