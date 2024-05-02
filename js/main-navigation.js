const theButton = document.querySelector('.button-navigation');
const theMainNav = document.querySelector('.main-navigation');
const theHomePageButton = document.querySelector('.main-navigation__button--home-page__vector');
const theToDoPageButton = document.querySelector('.main-navigation__button--todo-page__vector');
const theStatisticsPageButton = document.querySelector('.main-navigation__button--statistics-page__vector');

const renderVectorContainerItems = (element, action, className) => {
    element.classList[action](className);
};

const manipulateMainNav = () => {
    theMainNav.classList.contains('hidden') ? renderMainNav() : removeMainNav();
};

const renderMainNav = () => {
    if (window.innerWidth <= 650) {
        theButton.style.bottom = '51%';
    }
    else if (window.innerWidth >= 650 && window.innerWidth <= 1250) {
        theButton.style.bottom = '33.7%';
    }
    else if (window.innerWidth >= 1250) {
        theButton.style.left = '26%';
    }

    renderVectorContainerItems(theMainNav, 'remove', 'hidden');
    renderVectorContainerItems(theMainNav, 'remove', 'main-navigation__disappear');
    renderVectorContainerItems(theMainNav, 'add', 'main-navigation__appear');
};

const removeMainNav = () => {
    if (window.innerWidth >= 1250) {
        theButton.style.left = '15px';
    } else {
        theButton.style.left = 'calc(50% - 90px)';
        theButton.style.bottom = '10px';
    }

    renderVectorContainerItems(theMainNav, 'remove', 'main-navigation__appear');
    renderVectorContainerItems(theMainNav, 'add', 'main-navigation__disappear');

    setTimeout(() => {
        renderVectorContainerItems(theMainNav, 'add', 'hidden');
    }, 300);
};

theButton.addEventListener('click', manipulateMainNav);
theHomePageButton.addEventListener('click', manipulateMainNav);
theToDoPageButton.addEventListener('click', manipulateMainNav);
theStatisticsPageButton.addEventListener('click', manipulateMainNav);