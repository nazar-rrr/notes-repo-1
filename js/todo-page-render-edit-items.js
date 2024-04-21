const theButtons = document.querySelectorAll('.tasks__field-container--item-edit');
const fieldContainerItems = document.querySelector('.tasks__field-container--items');

const theMainNavContainer = document.querySelector('.main-navigation__container');
const theMainNav = document.querySelector('.main-navigation');

const theHomePage = document.querySelector('.main-navigation__home-page');
const theToDoPage = document.querySelector('.main-navigation__todo-page');
const theStatisticsPage = document.querySelector('.main-navigation__statistics-page');
const changeTextSize = document.querySelector('.main-navigation__change-text-size');
const changeTextColor = document.querySelector('.main-navigation__change-text-color');
const setImportant = document.querySelector('.main-navigation__set-important');

const manipulateFieldContainerItems = () => {
    const isMobile = window.innerWidth <= 950;

    if (isMobile) {
        const isMainNavHidden = theMainNav.classList.contains('hidden');
        
        if (isMainNavHidden) {
            hideMainNav();
        } else {
            showMainNav();
        }
    } else {
        const isFieldContainerHidden = fieldContainerItems.classList.contains('hidden');

        if (isFieldContainerHidden) {
            showFieldContainer();
        } else {
            hideFieldContainer();
        }
    }
};

const hideMainNav = () => {
    theHomePage.classList.add('hidden');
    theToDoPage.classList.add('hidden');
    theStatisticsPage.classList.add('hidden');
    theMainNavContainer.classList.remove('main-navigation__container--disappear');
    theMainNav.classList.remove('hidden');
    theMainNavContainer.classList.add('main-navigation__container--appear');
    changeTextSize.classList.remove('hidden');
    changeTextColor.classList.remove('hidden');
    setImportant.classList.remove('hidden');
};

const showMainNav = () => {
    changeTextSize.classList.add('hidden');
    changeTextColor.classList.add('hidden');
    setImportant.classList.add('hidden');
    theMainNavContainer.classList.remove('main-navigation__container--appear');
    theMainNavContainer.classList.add('main-navigation__container--disappear');
    setTimeout(() => {
        theMainNav.classList.add('hidden');
    }, 300);
    theHomePage.classList.remove('hidden');
    theToDoPage.classList.remove('hidden');
    theStatisticsPage.classList.remove('hidden');
};

const showFieldContainer = () => {
    if (fieldContainerItems.classList.contains('tasks__field-container--items-disappear')) {
        fieldContainerItems.classList.remove('tasks__field-container--items-disappear');
    }
    fieldContainerItems.classList.remove('hidden');
    fieldContainerItems.classList.add('tasks__field-container--items-appear');
};

const hideFieldContainer = () => {
    if (fieldContainerItems.classList.contains('tasks__field-container--items-appear')) {
        fieldContainerItems.classList.remove('tasks__field-container--items-appear');
    }
    fieldContainerItems.classList.add('tasks__field-container--items-disappear');
    setTimeout(() => {
        fieldContainerItems.classList.add('hidden');
    }, 300);
};

theButtons.forEach(button => {
    button.addEventListener('click', manipulateFieldContainerItems);
});