module.exports = selectedTopic;

function selectedTopic() {
  var topic = null;

  return {
    getSelectedTopicId: getId,
    get: get,
    set: set
  };

  function get() {
    return topic;
  }

  function set(t) {
    topic = angular.copy(t);
  }

  function getId() {
    if (!topic) {
      return null;
    }

    return topic.id;
  }
}
