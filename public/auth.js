const navigation = document.querySelector('.js-navigation');

const logout = async () => {
  /* eslint-disable no-console */
  let response;
  try {
    response = await fetch('/auth', { method: 'DELETE' });
  } catch (error) {
    console.error('Ошибка при отправке запроса');
    console.error(error.message);
  }

  if (!response.ok) {
    console.error(response.statusText);
  }

  let data;
  try {
    data = await response.json();
  } catch (error) {
    console.error('Ошибка при чтении ответа');
    console.error(error.message);
  }

  if (!data || !data.content) return;
  const user = navigation.querySelector('.js-user');
  user.innerHTML = data.content;
  /* eslint-enable no-console */
};

const handleClick = (event) => {
  const isLogout = event.target.classList.contains('js-logout');

  if (isLogout) {
    event.preventDefault();
    logout();
  }
};

navigation.addEventListener('click', handleClick);
