const theButton = document.querySelector('.field-container__item--edit');
const fieldContainerItems = document.querySelector('.field-container__items');

const theHomePageButton = document.querySelector('.main-navigation__home-page');
const theToDoPageButton = document.querySelector('.main-navigation__todo-page');
const theStatisticsPageButton = document.querySelector('.main-navigation__statistics-page');

const theMainNavContainer = document.querySelector('.main-navigation__container');
const theMainNav = document.querySelector('.main-navigation');


const manipulateFieldContainerItems = () => {
    if (window.innerWidth <= 950) {
        theMainNav.classList.remove('hidden');

        
        theHomePageButton.classList.add('hidden');
        theToDoPageButton.classList.add('hidden');
        theStatisticsPageButton.classList.add('hidden');
    }
    else {
        if (fieldContainerItems.classList.contains('hidden')) {
            if (fieldContainerItems.classList.contains('field-container__items-disappear')) {
                fieldContainerItems.classList.remove('field-container__items-disappear');
            }
            fieldContainerItems.classList.remove('hidden');
            fieldContainerItems.classList.add('field-container__items-appear');
        }

        else {
            if (fieldContainerItems.classList.contains('field-container__items-appear')) {
                fieldContainerItems.classList.remove('field-container__items-appear');
            }
            fieldContainerItems.classList.add('field-container__items-disappear');
            setTimeout(() => {
                fieldContainerItems.classList.add('hidden');
            }, 300)
        }
    }
}

theButton.addEventListener('click', manipulateFieldContainerItems)