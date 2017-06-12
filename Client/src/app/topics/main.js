module.exports = {
  template: require('./main.html'),
  controller: controller,
  controllerAs: 'vm'
};

function controller() {
  var vm = this;
  vm.addTopicVisibility = false;
  vm.addLinkVisibility = false;
  vm.onAddTopic = onAddTopic;
  vm.onAddLink = onAddLink;

  function onAddTopic() {
    vm.addTopicVisibility = !vm.addTopicVisibility;
  }

  function onAddLink() {
    vm.addLinkVisibility = !vm.addLinkVisibility;
  }
}
