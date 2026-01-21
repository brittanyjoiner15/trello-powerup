// Trello Power-Up Connector
// This file defines the capabilities and behavior of your Power-Up

console.log('Power-Up connector.js is loading...');

// Initialize the Power-Up
window.TrelloPowerUp.initialize({
  // Card badges appear on the front of cards
  'card-badges': function(t, options) {
    console.log('card-badges capability called');
    // Return a simple badge without any async operations
    return [{
      text: '✓ Active',
      color: 'green'
    }];
  },

  // Card buttons appear in the card detail view
  'card-buttons': function(t, options) {
    console.log('card-buttons capability called');
    return [{
      text: 'Test Button',
      callback: function(t) {
        alert('Power-Up is working!');
      }
    }];
  }
});
