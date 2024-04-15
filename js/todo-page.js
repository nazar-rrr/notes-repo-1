document.addEventListener('click', function(event) {
  if (event.target.matches('.todo-page__heading-button')) {
      const theBody = document.querySelector('body');
      const theToDoPage = document.querySelector('.todo-page');

      const removeToDoPage = () => {
          theToDoPage.remove();
      }

      const renderHomePage = () => {
          const theHomePage = document.createElement('section');
          theHomePage.setAttribute('class', 'home-page')

          theHomePage.innerHTML = `
              <section class="home-page">
                  <div class="home-page__heading">
                      <p class="home-page__heading--article">Hi👋</p>
                  </div>
                  <div class="home-page__heading-button">
                      <p class="home-page__heading-button--article">Start</p>
                      <svg class="home-page__heading-button--item" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 11L0.750001 21.3923L0.750002 0.607695L18 11Z" fill="white"/>
                      </svg>
                  </div>
              </section>`;

          theBody.appendChild(theHomePage);
      }

      const launchListeners = () => {
          theToDoPage.classList.add('todo-page__disappear');
          setTimeout(function() {
              removeToDoPage();
              renderHomePage();
          }, 300)
      }

      launchListeners();
  }
});