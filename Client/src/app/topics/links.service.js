module.exports = linksService;

function linksService($http) {
  return {
    postLinkForTopic: postLinkForTopic
  };

  function postLinkForTopic(topicId, url) {
    var postUrl = 'http://0.0.0.0:3000/api/topics/{topicId}/links';
    postUrl = postUrl.replace('{topicId}', topicId);
    var request = {
      url: url,
      tags: []
    };
    return $http.post(postUrl, request);
  }
}
