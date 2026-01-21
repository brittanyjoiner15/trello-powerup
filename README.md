# Trello Power-Up

A custom Trello Power-Up that displays card badges and custom actions.

## Features

- **Card Badges**: Displays member count and checklist completion percentage on card fronts
- **Card Buttons**: Adds custom action button in card detail view
- **Board Buttons**: Adds settings button in board header
- **Settings**: Store and retrieve Power-Up settings

## Project Structure

```
trello-powerup/
├── index.html          # Main landing page
├── connector.js        # Power-Up connector (the main file Trello loads)
├── popup.html          # Popup for card actions
├── settings.html       # Settings interface
├── netlify.toml        # Netlify configuration for proper headers
└── README.md           # This file
```

## Setup Instructions

### 1. Deploy to Netlify

#### Option A: Deploy via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
cd trello-powerup
netlify deploy --prod
```

#### Option B: Deploy via Netlify Web Interface
1. Push this code to a Git repository (GitHub, GitLab, etc.)
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect your Git repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or use `.`)
6. Click "Deploy site"

### 2. Register Your Power-Up with Trello

1. Go to [Trello Power-Ups Admin](https://trello.com/power-ups/admin)
2. Click "Create new Power-Up"
3. Fill in the required information:
   - **Name**: Your Power-Up Name
   - **Workspace**: Select a workspace
   - **Iframe connector URL**: `https://your-site.netlify.app/connector.js`
     (Replace `your-site.netlify.app` with your actual Netlify URL)
4. Under "Capabilities":
   - The Power-Up will automatically detect capabilities from your connector.js
5. Save your Power-Up

### 3. Enable on a Board

1. Open a Trello board
2. Click "Power-Ups" in the board menu
3. Find your Power-Up in the list
4. Click "Add" to enable it

### 4. Test Your Power-Up

After enabling:
- **Card Badges**: You should see badges on cards showing member count and checklist completion
- **Card Button**: Open a card and look for the "Custom Action" button
- **Board Button**: Look for the "Power-Up Settings" button in the board header

## Local Development

For local testing, you can use a simple HTTP server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000
```

Then use `http://localhost:8000/connector.js` as your Iframe connector URL in Trello.

**Note**: For local development, you'll need to use a tunnel service like [ngrok](https://ngrok.com/) to expose your localhost to the internet, since Trello needs to access your connector.js file:

```bash
ngrok http 8000
# Use the ngrok HTTPS URL in your Power-Up settings
```

## Customization

### Modify Card Badges

Edit the `card-badges` capability in `connector.js`:

```javascript
'card-badges': function(t, options) {
  return t.card('all').then(function(card) {
    // Add your custom badge logic here
    return [{
      text: 'Your Text',
      color: 'blue', // blue, green, yellow, red, purple, etc.
      icon: 'https://url-to-icon.png'
    }];
  });
}
```

### Add More Capabilities

Trello Power-Ups support many capabilities:
- `attachment-sections`
- `attachment-thumbnail`
- `authorization-status`
- `card-back-section`
- `card-detail-badges`
- `format-url`
- `list-actions`
- `list-sorters`
- `on-enable`
- `on-disable`
- `remove-data`

See [Trello Power-Up Documentation](https://developer.atlassian.com/cloud/trello/power-ups/) for details.

## Resources

- [Trello Power-Up Documentation](https://developer.atlassian.com/cloud/trello/power-ups/)
- [Power-Up Client Library Reference](https://developer.atlassian.com/cloud/trello/power-ups/client-library/)
- [Trello Power-Up Examples](https://github.com/trello/power-up-examples)

## Troubleshooting

### Power-Up not loading
- Check that your connector.js URL is correct and accessible
- Verify CORS/iframe headers are set correctly (handled by netlify.toml)
- Check browser console for errors

### Badges not showing
- Make sure cards have the data you're checking for (members, checklists, etc.)
- Check the browser console for JavaScript errors

### Changes not appearing
- Clear your browser cache
- Disable and re-enable the Power-Up on your board
- Redeploy to Netlify if you made changes

## License

MIT
