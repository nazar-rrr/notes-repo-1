const theHomePageButton = document.querySelector('.home-page__heading-button');
const theHomePage = document.querySelector('.home-page');
const theMainNavigationButton = document.querySelector('.main-navigation__button--todo-page__vector');
const theToDoPage = document.querySelector('.todo-page');

const removeHomePage = () => {
    theHomePage.classList.remove('home-page__appear');
    theHomePage.classList.add('home-page__disappear');
    setTimeout(() => {
        theHomePage.classList.add('hidden');
    }, 500)
}

const renderToDoPage = () => {
    theToDoPage.classList.remove('hidden');
    theToDoPage.classList.remove('todo-page__disappear');
    theToDoPage.classList.add('todo-page__appear');
}

const manipulatePages = () => {
    removeHomePage();
    setTimeout(() => {
        renderToDoPage();
    }, 500)
}

theHomePageButton.addEventListener('click', manipulatePages)
theMainNavigationButton.addEventListener('click', manipulatePages)

