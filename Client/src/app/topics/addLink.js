module.exports = addLink;

function addLink() {
  return {
    templateUrl: './app/topics/addLink.html',
    restrict: 'E',
    link: link,
    scope: {

    },
    controller: ['$log', '$http', '$scope', 'selectedTopic', controller],
    controllerAs: 'vm'
  };

  function link() {

  }

  function controller($log, $http, $scope, selectedTopic) {
    var vm = this;
    vm.url = null;
    vm.addLink = addLink;
    vm.topic = selectedTopic.get();
    vm.onUrlChanged = onUrlChanged;

    function addLink() {
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
        vm.topic = null;
      });
    }

    function onUrlChanged() {
      vm.topic = selectedTopic.get();
    }
  }
}
