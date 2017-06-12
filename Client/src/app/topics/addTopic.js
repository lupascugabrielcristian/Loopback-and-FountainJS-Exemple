module.exports = {
  template: require('./addTopic.html'),
  controller: controller,
  controllerAs: 'vm'
};

function controller($log, $http, $rootScope, $state) {
  var vm = this;
  vm.topicDescription = null;
  vm.post = postTopic;

  function postTopic() {
    if (!vm.topicDescription) {
      return;
    }
    var postUrl = 'http://0.0.0.0:3000/api/topics';
    var request = {
      description: vm.topicDescription
    };
    $http.post(postUrl, request).then(function (result) {
      $log.log(result);
      $rootScope.$broadcast('updateTopics');
      $state.go('topics');
    });
  }
}
