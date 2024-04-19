const theButton = document.querySelector('.main-navigation__button')
const theMainNav = document.querySelector('.main-navigation')
const theMainNavContainer = document.querySelector('.main-navigation__container')

const manipulateMainNav = () => {
    if (theMainNav.classList.contains('hidden')) {
        theButton.style.bottom = '190px';
        theMainNav.classList.remove('hidden');
        theMainNavContainer.classList.remove('main-navigation__container--disappear')
        theMainNavContainer.classList.add('main-navigation__container--appear')
    }
    else {
        theMainNavContainer.classList.remove('main-navigation__container--appear')
        theMainNavContainer.classList.add('main-navigation__container--disappear')
        setTimeout(() => {
            theMainNav.classList.add('hidden');
        }, 200)
        theButton.style.bottom = '10px';
    }
}

theButton.addEventListener('click', manipulateMainNav);
