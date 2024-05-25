const manipulateTasksButtonItems = (event) => {
    if (event.target.matches('.tasks__item--edit')) {
        const manipulateVariableClasses = (element, action, className) => {
            element.classList[action](className);
        };

        const manipulateContainerItems = () => {
            tasksIconContainerUnexist ? renderContainerItems() : removeContainerItems();
        };

        const renderContainerItems = () => {
            desktopDevice ? renderDesktopContainer() : renderTabletContainer();
            desktopDevice ? renderTasksIcons() : manipulateMainButton();
        };

        const removeContainerItems = () => {
            desktopDevice ? removeDesktopContainer() : removeTabletContainer();
            desktopDevice ? removeTasksIcons() : null;
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

        const renderTabletContainer = () => {
            manipulateVariableClasses(theMainNav, 'remove', 'hidden');
            manipulateVariableClasses(theMainNav, 'remove', 'main-navigation__disappear');
            manipulateVariableClasses(theMainNav, 'add', 'main-navigation__appear');   
        };

        const removeTabletContainer = () => {
            manipulateVariableClasses(theMainNav, 'remove', 'main-navigation__appear');   
            manipulateVariableClasses(theMainNav, 'add', 'main-navigation__disappear');
            setTimeout(() => manipulateVariableClasses(theMainNav, 'add', 'hidden'), 300);
        };
        
      const manipulateMainButton = () => {
            if (tasksIconContainer.classList.contains('hidden')) {
                if (phoneWidth) {
                    theNavButton.style.bottom = '51%';
                } else if (tabletWidth) {
                    theNavButton.style.bottom = '33.7%';
                } 
            } else {
                theNavButton.style.bottom = '20px'
            };
        };

        const theMainNav = document.querySelector('.main-navigation')
        const tasksItem = event.target.closest('.tasks__item');
        
        const iconSetImportant = tasksItem.querySelector('.vectors-container__item--set-important');
        const iconChangeTextSize = tasksItem.querySelector('.vectors-container__item--change-text-size');
        const iconDelete = tasksItem.querySelector('.vectors-container__item--delete');
        
        const phoneWidth = window.innerWidth <= 650;
        const tabletWidth = window.innerWidth >= 650 && window.innerWidth >= 1250;
        const desktopDevice = window.innerWidth >= 1250;
        
        const tasksIconContainer = tasksItem.querySelector('.tasks__item--vectors-container');
        const tasksIconContainerUnexist = tasksIconContainer && tasksIconContainer.classList.contains('hidden');
   
        manipulateContainerItems();
    };
};

document.addEventListener('click', manipulateTasksButtonItems);
