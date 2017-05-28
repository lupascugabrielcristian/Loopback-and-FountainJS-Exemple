module.exports = {
  template: require('./topicItem.html'),
  controller: controller,
  controllerAs: 'vm',
  bindings: {
    topic: '<'
  }
};

function controller($scope) {
  var vm = this;
  vm.topic = $scope.tech;
}
