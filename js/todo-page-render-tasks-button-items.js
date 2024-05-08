const manipulateTasksButtonItems = (event) => {
    if (event.target.matches('.tasks__item--edit')) {
        const theBody = document.querySelector('body');
        const theMainNav = document.querySelector('.main-navigation');
        const theButton = document.querySelector('.button-navigation');

        const tasksItem = event.target.closest('.tasks__item');
        const tasksItemVectorsContainer = tasksItem.querySelector('.tasks__item--vectors-container');

        const containerItemSetImportant = tasksItem.querySelector('.vectors-container__item--set-important');
        const containerItemChangeTextSize = tasksItem.querySelector('.vectors-container__item--change-text-size');
        const containerItemDelete = tasksItem.querySelector('.vectors-container__item--delete');

        const containerItemSetImportantArticle = tasksItem.querySelector('.item--delete__article');
        const containerItemChangeTextSizeArticle = tasksItem.querySelector('.item--delete__article');
        const containerItemDeleteArticle = tasksItem.querySelector('.item--delete__article');

        let theButtonBottom = theButton.style.bottom;

        const itemContainerExist = containerItemSetImportant.classList.contains('hidden') && containerItemChangeTextSize.classList.contains('hidden') && containerItemDelete.classList.contains('hidden') || tasksItemVectorsContainer.classList.contains('hidden');

        const itemContainerAnimationExist = containerItemSetImportant.classList.contains('vectors-container__item-appear') && containerItemChangeTextSize.classList.contains('vectors-container__item-appear') && containerItemDelete.classList.contains('vectors-container__item-appear');
        const itemContainerAnimationUnexist = containerItemSetImportant.classList.contains('vectors-container__item-disappear') && containerItemChangeTextSize.classList.contains('vectors-container__item-disappear') && containerItemDelete.classList.contains('vectors-container__item-disappear');

        const containerItemArticleUnexist = !containerItemSetImportant.classList.contains('hidden') && !containerItemChangeTextSizeArticle.classList.contains('hidden') && !containerItemDeleteArticle.classList.contains('hidden');

        const manipulateItemClasses = (element, action, className) => {
            element.classList[action](className);
        };

        const manipulateMainButton = () => {
            if (window.innerWidth <= 650) {
                theButtonBottom = '51%';
            } else {
                theButtonBottom = '33.7%';
            };
        }


        const renderTasksItemVectorsContainer = () => {
            if (tasksItemVectorsContainer.classList.contains('tasks__item--vectors-container-disappear')) {
                manipulateItemClasses(tasksItemVectorsContainer, 'remove', 'tasks__item--vectors-container-disappear');
            }

            manipulateItemClasses(tasksItemVectorsContainer, 'remove', 'hidden');
            manipulateItemClasses(tasksItemVectorsContainer, 'add', 'tasks__item--vectors-container-appear');
            if (window.innerWidth <= 1250) {
                manipulateItemClasses(tasksItemVectorsContainer, 'add', 'tasks__item--vectors-container-appeared');
            }
        };

        const removeTasksItemVectorsContainer = () => {
            if (tasksItemVectorsContainer.classList.contains('tasks__item--vectors-container-appear')) {
                manipulateItemClasses(tasksItemVectorsContainer, 'remove', 'tasks__item--vectors-container-appear');
            }

            manipulateItemClasses(tasksItemVectorsContainer, 'add', 'tasks__item--vectors-container-disappear');
            if (tasksItemVectorsContainer.classList.contains('tasks__item--vectors-container-appeared')) {
                setInterval(() => {
                    manipulateItemClasses(tasksItemVectorsContainer, 'remove', 'tasks__item--vectors-container-appeared');
                }, 300)
            }
            else {
                setInterval(() => {
                    manipulateItemClasses(tasksItemVectorsContainer, 'add', 'hidden');
                }, 300)
            }
        };

        const renderVectorContainerItems = () => {
            if (itemContainerAnimationUnexist) {
                manipulateItemClasses(containerItemSetImportant, 'remove', 'vectors-container__item-disappear');
                manipulateItemClasses(containerItemChangeTextSize, 'remove', 'vectors-container__item-disappear');
                manipulateItemClasses(containerItemDelete, 'remove', 'vectors-container__item-disappear');
            }

            manipulateItemClasses(containerItemSetImportant, 'remove', 'hidden');
            manipulateItemClasses(containerItemChangeTextSize, 'remove', 'hidden');
            manipulateItemClasses(containerItemDelete, 'remove', 'hidden');

            manipulateItemClasses(containerItemSetImportant, 'add', 'vectors-container__item-appear');
            manipulateItemClasses(containerItemChangeTextSize, 'add', 'vectors-container__item-appear');
            manipulateItemClasses(containerItemDelete, 'add', 'vectors-container__item-appear');
        };

        const removeVectorContainerItems = () => {
            if (itemContainerAnimationExist) {
                manipulateItemClasses(containerItemSetImportant, 'remove', 'vectors-container__item-appear');
                manipulateItemClasses(containerItemChangeTextSize, 'remove', 'vectors-container__item-appear');
                manipulateItemClasses(containerItemDelete, 'remove', 'vectors-container__item-appear');
            }

            manipulateItemClasses(containerItemSetImportant, 'add', 'vectors-container__item-disappear');
            manipulateItemClasses(containerItemChangeTextSize, 'add', 'vectors-container__item-disappear');
            manipulateItemClasses(containerItemDelete, 'add', 'vectors-container__item-disappear');

            setInterval(() => {
                manipulateItemClasses(containerItemSetImportant, 'add', 'hidden');
                manipulateItemClasses(containerItemChangeTextSize, 'add', 'hidden');
                manipulateItemClasses(containerItemDelete, 'add', 'hidden');
            }, 300)
        };

        const renderVectorContainerItemArticles = () => {
            manipulateItemClasses(containerItemSetImportantArticle, 'remove', 'hidden');
            manipulateItemClasses(containerItemChangeTextSizeArticle, 'remove', 'hidden');
            manipulateItemClasses(containerItemDeleteArticle, 'remove', 'hidden');
        };

        const removeVectorContainerItemArticles = () => {
            manipulateItemClasses(containerItemSetImportantArticle, 'add', 'hidden');
            manipulateItemClasses(containerItemChangeTextSizeArticle, 'add', 'hidden');
            manipulateItemClasses(containerItemDeleteArticle, 'add', 'hidden');
        };


        const manipulateVectorContainerFunctions = () => {
            manipulateMainButton();

            if (itemContainerExist) {
                renderTasksItemVectorsContainer();
                renderVectorContainerItems();
                if (window.innerWidth <= 1250) {
                    renderVectorContainerItemArticles();
                };
            } else {
                removeTasksItemVectorsContainer();
                removeVectorContainerItems();
                if (containerItemArticleUnexist) {
                    removeVectorContainerItemArticles();
                };
            };
        };

        const positioningVectorContainer = () => {
            if (window.innerWidth <= 1250) {
                theBody.insertBefore(tasksItemVectorsContainer, theMainNav)
            }
        }

        manipulateVectorContainerFunctions();
        positioningVectorContainer();
    };
};

document.addEventListener('click', manipulateTasksButtonItems);