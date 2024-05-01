const theHomePageButton = document.querySelector('.home-page__heading-button');
const theHomePage = document.querySelector('.home-page');
const theMainNavigationButton = document.querySelector('.main-navigation__button--todo-page__vector');
const theToDoPage = document.querySelector('.todo-page');

const renderVectorContainerItems = (element, action, className) => {
    element.classList[action](className);
};

const removeHomePage = () => {
    renderVectorContainerItems(theHomePage, 'remove', 'home-page__appear');
    renderVectorContainerItems(theHomePage, 'add', 'home-page__disappear');
    setTimeout(() => {
        renderVectorContainerItems(theHomePage, 'add', 'hidden');
    }, 500);
};

const renderToDoPage = () => {
    renderVectorContainerItems(theToDoPage, 'remove', 'hidden');
    renderVectorContainerItems(theToDoPage, 'remove', 'todo-page__disappear');
    renderVectorContainerItems(theToDoPage, 'add', 'todo-page__appear');
};

const manipulatePages = () => {
    removeHomePage();
    setTimeout(() => {
        renderToDoPage();
    }, 500);
};

theHomePageButton.addEventListener('click', manipulatePages);
theMainNavigationButton.addEventListener('click', manipulatePages);

