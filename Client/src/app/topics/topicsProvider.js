module.exports = topicsProvider;

function topicsProvider($log) {
  return {
    getTopics: getTopics
  };

  function getTopics(n) {
    if (!n) {
      $log.error('Invalid input. Fac n 1');
      n = 1;
    }
    var topics = [];
    for (var i = 0; i < n; i++) {
      topics.push(new Topic());
    }
    return topics;
  }

  function Topic() {
    this.description = 'des';
    this.links = ['link', 'link'];
  }
}

