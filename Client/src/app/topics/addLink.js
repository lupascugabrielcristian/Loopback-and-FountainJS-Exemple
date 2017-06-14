module.exports = {
  template: require('./addLink.html'),
  controller: controller,
  controllerAs: 'vm'
};

function controller($log, $stateParams, $http, $state, $scope) {
  var vm = this;
  vm.topic = $stateParams.topic;
  vm.postLink = postLink;
  vm.tags = null;

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
      var linkId = result.data.id;
      addTags(linkId);
    });
  }

  function addTags(linkId) {
    if (!vm.tags || vm.tags.length === 0) {
      return;
    }

    var tags = vm.tags.split(' ');
    var addTagsUrl = 'http://0.0.0.0:3000/api/links/{linkId}';
    addTagsUrl = addTagsUrl.replace('{linkId}', linkId);

    var requestBody = {
      tags: tags
    };
    $http.patch(addTagsUrl, requestBody).then(function (result) {
      $log.log('add tags result: ');
      $log.log(result);
      $state.go('topics');
      $scope.$broadcast('updateTopics');
    });
  }
}
