module.exports = {
  template: require('./removeLink.html'),
  controller: controller,
  controllerAs: 'vm'
};

function controller($stateParams, $http, $state, linksProvider) {
  var vm = this;
  vm.topic = $stateParams.topic;
  vm.links = [];
  vm.removeLink = removeLink;

  if (!vm.topic) {
    $state.go('topics');
    return;
  }
  linksProvider.getLinks(vm.topic, onLinksObtained);

  function onLinksObtained(links) {
    vm.links = links;
  }

  function removeLink(link) {
    var serverUrl = 'http://0.0.0.0:3000/api/links/{linkId}';
    serverUrl = serverUrl.replace('{linkId}', link.id);
    $http.delete(serverUrl).then(function () {
      $state.go('topics');
    });
  }
}
