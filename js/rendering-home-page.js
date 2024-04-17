const theToDoPage = document.querySelector('.todo-page');
const theToDoPageButton = document.querySelector('.todo-page__heading-button');
const theHomePage = document.querySelector('.home-page');

const removeToDoPage = () => {
    theToDoPage.classList.remove('todo-page__appear');
    theToDoPage.classList.add('todo-page__disappear');
    setTimeout(() => {
        theToDoPage.classList.add('hidden');
    }, 500)
}

const renderHomePage = () => {
    theHomePage.classList.remove('home-page__disappear');
    theHomePage.classList.remove('hidden');
    theHomePage.classList.add('home-page__appear');
}

const manipulatePages = () => {
    removeToDoPage();
    setTimeout(() => {
        renderHomePage();
    }, 500)

}

theToDoPageButton.addEventListener('click', manipulatePages)
