const React = require('react');
const Layout = require('./Layout');

function LoginPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <section>
        <h2>Войти</h2>

        <form method="POST" action="/auth/login" className="js-login form">
          <div className="form-control">
            <label htmlFor="userNameInput">Логин</label>
            <input name="userName" id="userNameInput" type="text" />
          </div>

          <div className="form-control">
            <label htmlFor="passwordInput">Пароль</label>
            <input name="password" id="passwordInput" type="password" />
          </div>

          <button type="submit">Войти</button>
        </form>
      </section>
    </Layout>
  );
}

module.exports = LoginPage;
