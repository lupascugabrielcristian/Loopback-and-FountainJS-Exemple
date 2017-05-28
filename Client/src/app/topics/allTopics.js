module.exports = {
  template: require('./allTopics.html'),
  controller: controller,
  controllerAs: 'vm'
};

function controller(topicsProvider) {
  var vm = this;
  vm.test = '';
  vm.topics = [];

  topicsProvider.getTopics(onGetSuccessful);
  vm.count = vm.topics.length;

  function onGetSuccessful(topics) {
    vm.topics = topics;
  }
}
