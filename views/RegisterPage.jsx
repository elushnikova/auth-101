const React = require('react');
const Layout = require('./Layout');

function RegisterPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <section>
        <h2>Регистрация</h2>
        {/* TODO */}
      </section>
    </Layout>
  );
}

module.exports = RegisterPage;
