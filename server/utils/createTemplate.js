const createTemplate = (html, initialState) =>
  `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv=X-UA-Compatible content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Scalable React Boilerplate</title>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Raleway:400,300,700|Lato:400,300,700' rel='stylesheet' type='text/css'>
    </head>
  <body>
    <!-- The app will bootstrap into this div -->
    <div id="app">${html}</div>
    <script type="text/javascript" src="/vendor.26f395b8adac3b23a24c.js"></script>
    <script type="text/javascript" src="/main.deb9d58e7f79a293f5d5.js"></script>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
    </script>
  </body>
  </html>
  `;


export default createTemplate;
