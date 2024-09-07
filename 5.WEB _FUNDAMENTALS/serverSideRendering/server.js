const express = require('express');
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const App = require('./src/App').default;

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like CSS, images)
app.use(express.static('public'));

app.get('*', (req, res) => {
  // Render the React app to a string
  const appString = ReactDOMServer.renderToString(<App />);

  // Inject the rendered app into an HTML template
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React SSR</title>
    </head>
    <body>
      <div id="root">${appString}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
