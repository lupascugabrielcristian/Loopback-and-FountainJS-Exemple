module.exports = topicsProvider;

function topicsProvider($log, $http) {
  return {
    getTopics: getTopics
  };

  function getTopics(onSucess) {
    return getFromServer(onSucess);
  }

  function getFromServer(onSucessFc) {
    var serverUrl = 'http://0.0.0.0:3000/api/topics';
    $http.get(serverUrl).then(function (result) {
      onSucessFc(result.data);
    });
  }
}

