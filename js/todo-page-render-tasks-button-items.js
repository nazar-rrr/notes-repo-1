const manipulateTasksButtonItems = (event) => {
    if (event.target.matches('.tasks__item--edit')) {
        const manipulateContainerItems = () => {
            desktopDevice ? manipulateDesktopContainer() : manipulateTabletContainer();
        }

        const manipulateDesktopContainer = () => {
            tasksIconContainerUnexist ? renderContainerItems() : removeContainerItems();
        };

        const renderContainerItems = () => {
            renderDesktopContainer();
            renderTasksIcons();
        };

        const removeContainerItems = () => {
            removeDesktopContainer();
            removeTasksIcons();
        };

        const renderDesktopContainer = () => {
            manipulateVariableClasses(tasksIconContainer, 'remove', 'hidden');
        };

        const removeDesktopContainer = () => {
            setTimeout(() => manipulateVariableClasses(tasksIconContainer, 'add', 'hidden'), 300);
        };

        const renderTasksIcons = () => {
            manipulateVariableClasses(iconSetImportant, 'remove', 'hidden');
            manipulateVariableClasses(iconChangeTextSize, 'remove', 'hidden');
            manipulateVariableClasses(iconDelete, 'remove', 'hidden');

            manipulateVariableClasses(iconSetImportant, 'remove', 'vectors-container__item-disappear');
            manipulateVariableClasses(iconChangeTextSize, 'remove', 'vectors-container__item-disappear');
            manipulateVariableClasses(iconDelete, 'remove', 'vectors-container__item-disappear');

            manipulateVariableClasses(iconSetImportant, 'add', 'vectors-container__item-appear');
            manipulateVariableClasses(iconChangeTextSize, 'add', 'vectors-container__item-appear');
            manipulateVariableClasses(iconDelete, 'add', 'vectors-container__item-appear');
        };

        const removeTasksIcons = () => {
            manipulateVariableClasses(iconSetImportant, 'add', 'vectors-container__item-disappear');
            manipulateVariableClasses(iconChangeTextSize, 'add', 'vectors-container__item-disappear');
            manipulateVariableClasses(iconDelete, 'add', 'vectors-container__item-disappear');

            manipulateVariableClasses(iconSetImportant, 'remove', 'vectors-container__item-appear');
            manipulateVariableClasses(iconChangeTextSize, 'remove', 'vectors-container__item-appear');
            manipulateVariableClasses(iconDelete, 'remove', 'vectors-container__item-appear');

            setTimeout(() => {
                manipulateVariableClasses(iconSetImportant, 'add', 'hidden');
                manipulateVariableClasses(iconChangeTextSize, 'add', 'hidden');
                manipulateVariableClasses(iconDelete, 'add', 'hidden');
            }, 300);
        }

        const manipulateTabletContainer = () => {
            if (theMainNavUnexist) {
                renderTabletContainer();
                renderMainButton();
            } else {
                removeTabletContainer();
                removeMainButton();
            }
        };
    };

    const removeTabletArticles = () => {
        manipulateVariableClasses(theHomePageButton, 'remove', 'vectors-container__item--set-important');
        manipulateVariableClasses(theToDoPageButton, 'remove', 'vectors-container__item--change-text-size');
        manipulateVariableClasses(theStatisticsPageButton, 'remove', 'vectors-container__item--delete');

        manipulateVariableClasses(theHomePageButton, 'add', 'vectors-container__item--set-important');
        manipulateVariableClasses(theToDoPageButton, 'add', 'vectors-container__item--change-text-size');
        manipulateVariableClasses(theStatisticsPageButton, 'add', 'vectors-container__item--delete');

        theHomePageButtonArticle.value = 'Home';
        theToDoPageButtonArticle.value = 'Your To Do';
        theStatisticsPageButtonArticle.value = 'Your Statistics';
    };

    const renderMainButton = () => {
        phoneWidth ? theNavButton.style.bottom = '51%' : theNavButton.style.bottom = '33.7%';
    };

    const removeMainButton = () => {
        theNavButton.style.bottom = '20px'
    };

    const tasksItem = event.target.closest('.tasks__item');

    const iconSetImportant = tasksItem.querySelector('.vectors-container__item--set-important');
    const iconChangeTextSize = tasksItem.querySelector('.vectors-container__item--change-text-size');
    const iconDelete = tasksItem.querySelector('.vectors-container__item--delete');

    const phoneWidth = window.innerWidth <= 650;
    const desktopDevice = window.innerWidth >= 1250;

    const theMainNav = document.querySelector('.main-navigation');
    const theNavButton = document.querySelector('.button-navigation');


    const tasksIconContainer = tasksItem.querySelector('.tasks__item--vectors-container');
    const tasksIconContainerUnexist = tasksIconContainer && tasksIconContainer.classList.contains('hidden');
    const theMainNavUnexist = theMainNav.classList.contains('hidden');

    const manipulateVariableClasses = (element, action, className) => {
        element.classList[action](className);
    };

    manipulateContainerItems();
};

document.addEventListener('click', manipulateTasksButtonItems);
