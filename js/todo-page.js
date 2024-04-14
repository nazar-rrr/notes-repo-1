const theBody = document.querySelector('body');
const theHomePage = document.querySelector('.home-page');
const moveToTheHomePage = document.querySelector('.todo-page__heading--button');

const removeHomePage = () => {
  theHomePage.remove();
}

const renderHomePage = () => {
  const createElements = (elementType, className) => {
    const element = document.createElement(elementType);
    element.setAttribute('class', className);
    return element;
  }

  const theHomePage = createElements('section', 'home-page');
  const homePageHeading = createElements('div', 'home-page__heading');
  const homeHeadingArticle = createElements('p', 'home-page__heading-button--article');
  const homePageButtonContainer = createElements('div', 'home-page__button');
  const homePageButton = createElements('div', 'home-page__button-button--item');
  const homeButtonArticle = createElements('p', 'home-page__heading--article');

  homeHeadingArticle.innerHTML = `
    HI👋
  `;

  homeButtonArticle.innerHTML = `
    Start
  `;
  homePageButton.innerHTML = `
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 11L0.750001 21.3923L0.750002 0.607695L18 11Z" fill="white"/>
    </svg>
   `;

  homePageHeading.appendChild(homeHeadingArticle);

  homePageButtonContainer.appendChild(homePageButton);
  homePageButtonContainer.appendChild(homeButtonArticle);

  theHomePage.appendChild(homePageHeading);
  theHomePage.appendChild(homePageButtonContainer);

  theBody.appendChild(theHomePage);
}

const launchListeners = () => {
  removeToDoPage();
  renderHomePage()
}

moveToTheHomePage.addEventListener('click', launchListeners);
