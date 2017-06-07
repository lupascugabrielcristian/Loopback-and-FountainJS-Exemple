module.exports = {
  template: require('./addLink.html'),
  controller: controller,
  controllerAs: 'vm'
};

function controller($log, $stateParams, $http, $state, $scope) {
  var vm = this;
  vm.topic = $stateParams.topic;
  vm.postLink = postLink;

  function postLink() {
    if (!vm.url) {
      return;
    }
    var postUrl = 'http://0.0.0.0:3000/api/topics/{topicId}/links';
    postUrl = postUrl.replace('{topicId}', vm.topic.id);
    var request = {
      url: vm.url,
      tags: []
    };
    $http.post(postUrl, request).then(function (result) {
      $log.log(result);
      $scope.$broadcast('updateTopics');
      $state.go('topics');
    });
  }
}
