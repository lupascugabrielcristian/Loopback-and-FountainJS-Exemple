module.exports = {
  template: require('./allTopics.html'),
  controller: controller,
  controllerAs: 'vm'
};

function controller(topicsProvider) {
  var vm = this;
  vm.test = '';
  vm.topics = [];

  vm.topics = topicsProvider.getTopics(10);
  vm.count = vm.topics.length;
}
