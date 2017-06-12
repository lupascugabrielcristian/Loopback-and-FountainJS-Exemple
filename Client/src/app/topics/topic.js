module.exports = addLink;

function addLink() {
  return {
    templateUrl: './app/topics/topic.html',
    restrict: 'E',
    link: link,
    scope: {
      topic: '='
    },
    controller: ['$scope', '$rootScope', '$log', 'linksProvider', 'selectedTopic', 'topicsOperations', '$timeout', controller],
    controllerAs: 'vm'
  };

  function link() {

  }

  function controller($scope, $rootScope, $log, linksProvider, selectedTopic, topicsOperations, $timeout) {
    var vm = this;
    vm.topic = $scope.topic;
    vm.selectTopic = selectTopic;
    vm.removeTopic = removeTopic;
    vm.hoverIn = hoverIn;
    vm.hoverOut = hoverOut;
    vm.displayButtons = false;

    function hoverIn() {
      vm.displayButtons = true;
    }

    function hoverOut() {
      vm.displayButtons = false;
    }

    function selectTopic() {
      linksProvider.getLinks(vm.topic, onLinksObtained, onFail);
      selectedTopic.set(vm.topic);
    }

    function removeTopic(topic) {
      topicsOperations.remove(topic);
      $timeout(function () {
        $rootScope.$broadcast('updateTopics');
        $rootScope.$broadcast('updateLinks', []);
      }, 10);
    }

    function onLinksObtained(links) {
      $rootScope.$broadcast('updateLinks', links);
    }

    function onFail() {

    }
  }
}
