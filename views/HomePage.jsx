const React = require('react');
const Layout = require('./Layout');

function HomePage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <section>
        <h2>Главная</h2>
      </section>
    </Layout>
  );
}

module.exports = HomePage;
