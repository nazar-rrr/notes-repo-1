const theHomePageButton = document.querySelector('.home-page__heading-button');
const theHomePage = document.querySelector('.home-page');
const theMainNavigationButton = document.querySelector('.main-navigation__todo-page--vector');
const theToDoPage = document.querySelector('.todo-page');

const removeHomePage = () => {
    theHomePage.classList.add('home-page__disappear');
    setTimeout(() => {
        theHomePage.classList.add('hidden');
    }, 500)
}

const renderToDoPage = () => {
    theToDoPage.classList.remove('hidden');
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
