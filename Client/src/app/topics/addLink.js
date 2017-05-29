module.exports = {
  template: require('./addLink.html'),
  controller: controller,
  controllerAs: 'vm'
};

function controller($log, $http, $rootScope) {
  var vm = this;
  vm.url = null;
  vm.addLink = addLink;

  function addLink(topic, link) {
    if (!vm.url) {
      return;
    }
    var postUrl = 'http://127.0.0.1:3000/api/topics/{topicId}/links';
    postUrl = postUrl.replace('{topicId}', topic.id);
    var request = {
      url: link,
      tags: []
    };
    $http.post(postUrl, request).then(function (result) {
      $log.log(result);
      $rootScope.$broadcast('updateTopics');
    });
  }
}
