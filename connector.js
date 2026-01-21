// Trello Power-Up Connector - Ultra Simple Version
window.TrelloPowerUp.initialize({
  'card-badges': function(t, options) {
    return [{
      text: 'hi world'
    }];
  },

  'card-buttons': function(t, options) {
    return [{
      text: 'Open Trello Substack',
      callback: function(t) {
        window.open('https://trello.substack.com/', '_blank');
      }
    }];
  }
});
