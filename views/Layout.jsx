const React = require('react');
const Navigation = require('./Navigation');

function Layout({ title, user, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header className="page-title">
          <h1>{title}</h1>
          <Navigation user={user} />
        </header>

        <main className="page">{children}</main>
      </body>
    </html>
  );
}

module.exports = Layout;
