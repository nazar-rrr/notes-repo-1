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
        };

        const manipulateTabletContainer = () => {
            if (theTasksNavUnexist) {
                renderTabletContainer();
                renderMainButton();
            } else {
                removeTabletContainer();
                removeMainButton();
            }
        };

        const renderTabletContainer = () => {
            manipulateVariableClasses(theTasksNav, 'remove', 'hidden');
            theTasksNav.classList.contains('tasks__item--vectors-container-disappear') ? manipulateVariableClasses(theTasksNav, 'remove', 'tasks__item--vectors-container-disappear') : null;
            manipulateVariableClasses(theTasksNav, 'add', 'tasks__item--vectors-container-appear');
            manipulateVariableClasses(localDelete, 'add', 'item--tablet-delete__button')
            localDelete.setAttribute('id', `${editId}`);
        };
        
        const removeTabletContainer = () => {
            manipulateVariableClasses(theTasksNav, 'remove', 'tasks__item--vectors-container-appear');
            manipulateVariableClasses(theTasksNav, 'add', 'tasks__item--vectors-container-disappear');
            setTimeout(() => manipulateVariableClasses(theTasksNav, 'add', 'hidden'), 300);
        };
        
        const renderMainButton = () => {
            phoneWidth ? theNavButton.style.bottom = '51%' : theNavButton.style.bottom = '33.7%';
        };
        
        const removeMainButton = () => {
            theNavButton.style.bottom = '20px';
        };
        
        const theButton = document.querySelector('.button-navigation')
        const tasksItem = event.target.closest('.tasks__item');
        
        const iconSetImportant = tasksItem.querySelector('.vectors-container__item--set-important');
        const iconChangeTextSize = tasksItem.querySelector('.vectors-container__item--change-text-size');
        const iconDelete = tasksItem.querySelector('.vectors-container__item--delete');
        
        const phoneWidth = window.innerWidth <= 650;
        const desktopDevice = window.innerWidth >= 1250;
        
        const theTasksNav = document.querySelector('.tasks__item--vectors-container-appeared');
        const theNavButton = document.querySelector('.button-navigation');
        const localDelete = document.querySelector('.item--tablet-delete__button');
        const editId = event.target.id;
        const tasksIconContainer = tasksItem.querySelector('.tasks__item--vectors-container');
        const tasksIconContainerUnexist = tasksIconContainer && tasksIconContainer.classList.contains('hidden');
        const theTasksNavUnexist = theTasksNav.classList.contains('hidden');

        const manipulateVariableClasses = (element, action, className) => {
            element.classList[action](className);
        };

        theButton.addEventListener('click', () => {
            removeTabletContainer();
            if (!desktopDevice) {
                manipulateVariableClasses(event.target, 'remove', 'tasks__item--edit-appear');
                manipulateVariableClasses(event.target, 'add', 'tasks__item--edit-disappear');
                setTimeout(() => manipulateVariableClasses(event.target, 'add', 'hidden'), 300);
            };
        });

        manipulateContainerItems();
    };
};

document.addEventListener('click', manipulateTasksButtonItems);
