const React = require('react');

function Navigation({ user }) {
  return (
    <>
      <nav className="js-navigation nav">
        <a href="/" className="nav-link">
          Главная
        </a>
        <span className="js-user">
          {!user ? (
            <>
              <a href="/auth/login" className="nav-link">
                Войти
              </a>
              <a href="/auth/register" className="nav-link">
                Регистрация
              </a>
            </>
          ) : (
            <>
              <a href="/my/profile" className="nav-link">
                Профиль
              </a>
              <a href="/auth" className="js-logout nav-link">
                Выйти
              </a>
            </>
          )}
        </span>
      </nav>
      <script src="/auth.js" />
    </>
  );
}

module.exports = Navigation;
