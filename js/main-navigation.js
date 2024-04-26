const theButton = document.querySelector('.button-navigation')
const theHomePageButton = document.querySelector('.main-navigation__button--home-page__vector')
const theToDoPageButton = document.querySelector('.main-navigation__button--todo-page__vector')
const theStatisticsPageButton = document.querySelector('.main-navigation__button--statistics-page__vector')
const theMainNav = document.querySelector('.main-navigation')

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
        theMainNav.classList.remove('main-navigation__disappear')
        theMainNav.classList.add('main-navigation__appear')
    }

    else {
        theMainNav.classList.remove('main-navigation__appear')
        theMainNav.classList.add('main-navigation__disappear')
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
