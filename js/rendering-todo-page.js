const theHomePageButton = document.querySelector('.home-page__heading-button');
const theHomePage = document.querySelector('.home-page');
const theMainNavigationButton = document.querySelector('.main-navigation__todo-page');
const theToDoPage = document.querySelector('.todo-page');
const theToDoPageTasksFieldContainer = document.querySelector('.tasks__field-container');

const removeHomePage = () => {
    theHomePage.classList.add('home-page__disappear');
    setTimeout(() => {
        theHomePage.classList.add('hidden');
    }, 500)
}

const renderToDoPage = () => {
    theToDoPage.classList.remove('hidden');
    theToDoPageTasksFieldContainer.classList.remove('tasks__field-container-appeaar')
    theToDoPage.classList.add('todo-page__appear');
    setTimeout(() => {
        theToDoPageTasksFieldContainer.classList.add('tasks__field-container--appear')
    }, 200)
}

const manipulatePages = () => {
    removeHomePage();
    setTimeout(() => {
        renderToDoPage();
    }, 500)
}

theHomePageButton.addEventListener('click', manipulatePages)
theMainNavigationButton.addEventListener('click', manipulatePages)
