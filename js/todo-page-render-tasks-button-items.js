const manipulateTasksButtonItems = (event) => {
    if (event.target.matches('.tasks__item--edit')) {  
        const manipulateVariableClasses = (element, action, className) => {
            element.classList[action](className);
        };
        
        const manipulateContainerItems = () => {
            manipulateMainButton();
            tasksIconContainerExist ? renderContainerItems() : removeContainerItems();
        };
        
        const renderContainerItems = () => {
            renderTasksIconContainer();
            renderTasksIcons();
            !desktopDevice ? renderIconArticles() : null;
        };
        
        const removeContainerItems = () => {
            removeTasksIconContainer();
            removeTasksIcons();
            !desktopDevice ? removeIconArticles() : null;
        };
        
        const renderTasksIconContainer = () => {
            manipulateVariableClasses(tasksIconContainer, 'remove', 'hidden');
            if (!desktopDevice) {
                manipulateVariableClasses(tasksIconContainer, 'remove', 'tasks__item--vectors-container-disappear');
                manipulateVariableClasses(tasksIconContainer, 'add', 'tasks__item--vectors-container-appear');
                manipulateVariableClasses(tasksIconContainer, 'add', 'tasks__item--vectors-container-appeared');
            }
        };
        
        const removeTasksIconContainer = () => {
            if (!desktopDevice) {
                manipulateVariableClasses(tasksIconContainer, 'add', 'tasks__item--vectors-container-disappear');
                setTimeout(() => {
                    manipulateVariableClasses(tasksIconContainer, 'remove', 'tasks__item--vectors-container-appear');
                    manipulateVariableClasses(tasksIconContainer, 'remove', 'tasks__item--vectors-container-appeared');
                    manipulateVariableClasses(tasksIconContainer, 'add', 'hidden')
                }, 300);    
            } else if(desktopDevice) {
                setTimeout(() => manipulateVariableClasses(tasksIconContainer, 'add', 'hidden'), 300);
            };
        };
        
        const renderTasksIcons = () => {
            manipulateVariableClasses(iconSetImportant, 'remove', 'hidden');
            manipulateVariableClasses(iconChangeTextSize, 'remove', 'hidden');
            manipulateVariableClasses(iconDelete, 'remove', 'hidden');
            
            if (desktopDevice) {
                manipulateVariableClasses(iconSetImportant, 'remove', 'vectors-container__item-disappear');
                manipulateVariableClasses(iconChangeTextSize, 'remove', 'vectors-container__item-disappear');
                manipulateVariableClasses(iconDelete, 'remove', 'vectors-container__item-disappear');
                
                manipulateVariableClasses(iconSetImportant, 'add', 'vectors-container__item-appear');
                manipulateVariableClasses(iconChangeTextSize, 'add', 'vectors-container__item-appear');
                manipulateVariableClasses(iconDelete, 'add', 'vectors-container__item-appear');
            };
        };
        
        const removeTasksIcons = () => {
            if (desktopDevice) {
                manipulateVariableClasses(iconSetImportant, 'add', 'vectors-container__item-disappear');
                manipulateVariableClasses(iconChangeTextSize, 'add', 'vectors-container__item-disappear');
                manipulateVariableClasses(iconDelete, 'add', 'vectors-container__item-disappear');
                
                manipulateVariableClasses(iconSetImportant, 'remove', 'vectors-container__item-appear');
                manipulateVariableClasses(iconChangeTextSize, 'remove', 'vectors-container__item-appear');
                manipulateVariableClasses(iconDelete, 'remove', 'vectors-container__item-appear');
            }
            setTimeout(() => {
                manipulateVariableClasses(iconSetImportant, 'add', 'hidden');
                manipulateVariableClasses(iconChangeTextSize, 'add', 'hidden');
                manipulateVariableClasses(iconDelete, 'add', 'hidden');
            }, 300);
        };
        
        const renderIconArticles = () => {
            manipulateVariableClasses(iconSetImportantArticle, 'remove', 'hidden');
            manipulateVariableClasses(iconChangeTextSizeArticle, 'remove', 'hidden');
            manipulateVariableClasses(iconDeleteArticle, 'remove', 'hidden');
        };
        
        const removeIconArticles = () => {
            manipulateVariableClasses(iconSetImportantArticle, 'add', 'hidden');
            manipulateVariableClasses(iconChangeTextSizeArticle, 'add', 'hidden');
            manipulateVariableClasses(iconDeleteArticle, 'add', 'hidden');
        };
        
        const positioningContainerItems = () => {
            if (!desktopDevice) {
                theBody.insertBefore(tasksIconContainer, theMainNav);
            }
        };
        
        const manipulateMainButton = () => {
            if (phoneWidth) {
                theNavButton.style.bottom = '51%';
            } else if (tabletWidth) {
                theNavButton.style.bottom = '33.7%';
            } else if (desktopDevice) {
                theNavButton.style.left = '26%';
            }
        };
        
        const theBody = document.querySelector('body');
        const theMainNav = document.querySelector('.main-navigation');
        const theNavButton = document.querySelector('.button-navigation');
        
        const tasksItem = event.target.closest('.tasks__item');

        const iconSetImportant = tasksItem.querySelector('.vectors-container__item--set-important');
        const iconChangeTextSize = tasksItem.querySelector('.vectors-container__item--change-text-size');
        const iconDelete = tasksItem.querySelector('.vectors-container__item--delete');
        
        const iconSetImportantArticle = tasksItem.querySelector('.item--set-important__article');
        const iconChangeTextSizeArticle = tasksItem.querySelector('.item--change-text-size__article');
        const iconDeleteArticle = tasksItem.querySelector('.item--delete__article');
          
        const phoneWidth = window.innerWidth <= 650;
        const tabletWidth = window.innerWidth >= 650 && window.innerWidth >= 1250;
        const desktopDevice = window.innerWidth >= 1250;
        
        const tasksIconContainer = desktopDevice ? tasksItem.querySelector('.tasks__item--vectors-container') : document.querySelectorAll('.tasks__item--vectors-container');
        const tasksIconContainerExist = tasksIconContainer && tasksIconContainer.classList.contains('hidden');

        manipulateContainerItems();
        positioningContainerItems();
    }
};

document.addEventListener('click', manipulateTasksButtonItems);
