const theToDoPage = document.querySelector('.todo-page');
const theToDoPageButton = document.querySelector('.main-navigation__button--home-page__vector');
const theHomePage = document.querySelector('.home-page');

const renderVectorContainerItems = (element, action, className) => {
    element.classList[action](className);
};

const removeToDoPage = () => {
    renderVectorContainerItems(theToDoPage, 'remove', 'todo-page__appear');
    renderVectorContainerItems(theToDoPage, 'add', 'todo-page__disappear');
    setTimeout(() => {
        renderVectorContainerItems(theToDoPage, 'add', 'hidden');
    }, 500);
};

const renderHomePage = () => {
    renderVectorContainerItems(theHomePage, 'remove', 'home-page__disappear');
    renderVectorContainerItems(theHomePage, 'remove', 'hidden');
    renderVectorContainerItems(theHomePage, 'add', 'home-page__appear');
};

const manipulatePages = () => {
    removeToDoPage();
    setTimeout(() => {
        renderHomePage();
    }, 500);
};

theToDoPageButton.addEventListener('click', manipulatePages);
