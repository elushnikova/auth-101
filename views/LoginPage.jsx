const React = require('react');
const Layout = require('./Layout');

function LoginPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <section>
        <h2>Войти</h2>
      </section>
    </Layout>
  );
}

module.exports = LoginPage;
