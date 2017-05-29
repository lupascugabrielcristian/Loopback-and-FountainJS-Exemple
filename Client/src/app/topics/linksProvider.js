module.exports = linksProvider;

function linksProvider($log, $http) {
  return {
    getLinks: getLinks
  };

  function getLinks(forTopic, onSucess, onFail) {
    var serverUrl = 'http://127.0.0.1:3000/api/links/{topicId}';
    serverUrl = serverUrl.replace('{topicId}', forTopic.id);
    $http.get(serverUrl).then(function (result) {
      onSucess(result.data);
    }, function () {
      $log.log('Failed to geet links');
      onFail();
    });
  }
}
