const theButton = document.querySelector('.main-navigation__button')
const theHomePageButton = document.querySelector('.main-navigation__home-page--vector')
const theToDoPageButton = document.querySelector('.main-navigation__todo-page--vector')
const theStatisticsPageButton = document.querySelector('.main-navigation__statistics-page--vector')
const theMainNav = document.querySelector('.main-navigation')
const theMainNavContainer = document.querySelector('.main-navigation__container')

const manipulateMainNav = () => {
    if (theMainNav.classList.contains('hidden')) {
        if (window.innerWidth <= 650) {
            theButton.style.bottom = '51%';
        }
        else if (window.innerWidth >= 650 && window.innerWidth <= 1250) {
            theButton.style.bottom = '33.7%';
        }
        else if (window.innerWidth >= 1250) {
            theButton.style.left = '26%';
        }

        theMainNav.classList.remove('hidden');
        theMainNavContainer.classList.remove('main-navigation__container--disappear')
        theMainNavContainer.classList.add('main-navigation__container--appear')
    }

    else {
        theMainNavContainer.classList.remove('main-navigation__container--appear')
        theMainNavContainer.classList.add('main-navigation__container--disappear')
        setTimeout(() => {
            theMainNav.classList.add('hidden');
        }, 300)

        if (window.innerWidth >= 1250) {
            theButton.style.left = '15px';
        }
        else {
            theButton.style.left = 'calc(50% - 90px)';
            theButton.style.bottom = '10px';
        }
    }
}

theButton.addEventListener('click', manipulateMainNav);
theHomePageButton.addEventListener('click', manipulateMainNav);
theToDoPageButton.addEventListener('click', manipulateMainNav);
theStatisticsPageButton.addEventListener('click', manipulateMainNav);
