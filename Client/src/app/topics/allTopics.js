module.exports = {
  template: require('./allTopics.html'),
  controller: controller,
  controllerAs: 'vm'
};

function controller(topicsProvider, linksProvider, $scope, $log, selectedTopic) {
  var vm = this;
  vm.test = '';
  vm.topics = [];
  vm.selectTopic = selectTopic;
  vm.links = [];

  updateTopics();
  vm.count = vm.topics.length;
  startListening();

  function onGetSuccessful(topics) {
    vm.topics = topics;
  }

  function updateTopics() {
    topicsProvider.getTopics(onGetSuccessful);
  }

  function updateLinks(links) {
    vm.links = links;
  }

  function selectTopic(topic) {
    linksProvider.getLinks(topic, onLinksObtained, onFail);
    selectedTopic.set(topic);
  }

  function onLinksObtained(links) {
    vm.links = links;
  }

  function onFail() {
    vm.links = [];
  }

  function startListening() {
    vm.links = [];
    $scope.$on('updateTopics', updateTopics);
    $scope.$on('updateLinks', function (event, args) {
      updateLinks(args);
    });
  }
}
