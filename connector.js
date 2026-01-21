// Trello Power-Up Connector
// This file defines the capabilities and behavior of your Power-Up

// Initialize the Power-Up
window.TrelloPowerUp.initialize({
  // Card badges appear on the front of cards
  'card-badges': function(t, options) {
    // Return an array of badge objects
    return t.card('all')
      .then(function(card) {
        const badges = [];

        // Always show a test badge to verify Power-Up is working
        badges.push({
          text: '✓ Power-Up Active',
          color: 'green'
        });

        // Badge 1: Card member count
        if (card.members && card.members.length > 0) {
          badges.push({
            text: card.members.length + ' member(s)',
            color: 'blue'
          });
        }

        // Badge 2: Checklist completion
        if (card.badges && card.badges.checkItems > 0) {
          const completionPercent = Math.round((card.badges.checkItemsChecked / card.badges.checkItems) * 100);
          badges.push({
            text: completionPercent + '% complete',
            color: completionPercent === 100 ? 'green' : (completionPercent >= 50 ? 'yellow' : 'red')
          });
        }

        return badges;
      });
  },

  // Card buttons appear in the card detail view
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Fwhite-icon.svg?1495654215473',
      text: 'Custom Action',
      callback: function(t) {
        return t.popup({
          title: 'Custom Action',
          url: './popup.html',
          height: 184
        });
      }
    }];
  },

  // Board buttons appear in the board header
  'board-buttons': function(t, options) {
    return [{
      icon: {
        dark: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Ficon-white.svg?1495654215473',
        light: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Ficon-black.svg?1495654215473'
      },
      text: 'Power-Up Settings',
      callback: function(t) {
        return t.popup({
          title: 'Settings',
          url: './settings.html',
          height: 184
        });
      }
    }];
  },

  // Show settings for the Power-Up
  'show-settings': function(t, options) {
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  }
});
