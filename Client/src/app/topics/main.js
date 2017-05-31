module.exports = {
  template: require('./main.html'),
  controller: controller,
  controllerAs: 'vm'
};

function controller(selectedTopic, $http, $rootScope) {
  var vm = this;
  vm.addTopicVisibility = false;
  vm.addLinkVisibility = false;
  vm.onAddTopic = onAddTopic;
  vm.onAddLink = onAddLink;
  vm.removeTopic = removeTopic;

  function onAddTopic() {
    vm.addTopicVisibility = !vm.addTopicVisibility;
  }

  function onAddLink() {
    vm.addLinkVisibility = !vm.addLinkVisibility;
  }

  function removeTopic() {
    var topic = selectedTopic.get();
    if (!topic) {
      return;
    }

    var serverUrl = 'http://0.0.0.0:3000/api/topics/{topicId}';
    serverUrl = serverUrl.replace('{topicId}', topic.id);
    $http.delete(serverUrl).then(function (result) {
      if (result) {
        $rootScope.$broadcast('updateTopics');
      }
    });
  }
}
