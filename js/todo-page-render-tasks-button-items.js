const manipulateTasksButtonItems = (event) => {
    if (event.target.matches('.tasks__item--edit')) {
        const theBody = document.querySelector('body');
        const theMainNav = document.querySelector('.main-navigation');

        const tasksItem = event.target.closest('.tasks__item');
        const tasksItemVectorsContainer = tasksItem.querySelector('.tasks__item--vectors-container');

        const itemSetImportant = tasksItem.querySelector('.vectors-container__item--set-important');
        const itemChangeTextSize = tasksItem.querySelector('.vectors-container__item--change-text-size');
        const itemDelete = tasksItem.querySelector('.vectors-container__item--delete');

        const itemSetImportantArticle = tasksItem.querySelector('.item--delete__article');
        const itemChangeTextSizeArticle = tasksItem.querySelector('.item--delete__article');
        const itemDeleteArticle = tasksItem.querySelector('.item--delete__article');

        const renderVectorContainerItems = (element, action, className) => {
            element.classList[action](className);
        };

        if (window.innerWidth <= 650) {
            if (tasksItemVectorsContainer.classList.contains('tasks__item--vectors-container-diappear')) {
                renderVectorContainerItems(tasksItemVectorsContainer, 'remove', 'tasks__vectors-container__item-disappear');
            }

            renderVectorContainerItems(itemSetImportant, 'remove', 'hidden');
            renderVectorContainerItems(itemDelete, 'remove', 'hidden');
            renderVectorContainerItems(itemChangeTextSize, 'remove', 'hidden');
            renderVectorContainerItems(itemSetImportantArticle, 'remove', 'hidden');
            renderVectorContainerItems(itemChangeTextSizeArticle, 'remove', 'hidden');
            renderVectorContainerItems(itemDeleteArticle, 'remove', 'hidden');

            renderVectorContainerItems(tasksItemVectorsContainer, 'remove', 'hidden');

            renderVectorContainerItems(tasksItemVectorsContainer, 'add', 'tasks__item--vectors-container-appear');
            renderVectorContainerItems(tasksItemVectorsContainer, 'add', 'tasks__vectors-container__item-appeared');

            theBody.insertBefore(tasksItemVectorsContainer, theMainNav);
        } else if (window.innerWidth >= 650 && window.innerWidth <= 950) {


        } else if (window.innerWidth >= 1250) {
            if (tasksItemVectorsContainer.classList.contains('hidden')) {
                renderVectorContainerItems(tasksItemVectorsContainer, 'remove', 'hidden');
            }

            if (itemSetImportant.classList.contains('hidden') && itemChangeTextSize.classList.contains('hidden') && itemDelete.classList.contains('hidden')) {
                if (itemSetImportant.classList.contains('vectors-container__item-disappear') && itemChangeTextSize.classList.contains('vectors-container__item-disappear') && itemDelete.classList.contains('vectors-container__item-disappear')) {
                    renderVectorContainerItems(itemSetImportant, 'remove', 'vectors-container__item-disappear');
                    renderVectorContainerItems(itemChangeTextSize, 'remove', 'vectors-container__item-disappear');
                    renderVectorContainerItems(itemDelete, 'remove', 'vectors-container__item-disappear');
                }
                else {
                    renderVectorContainerItems(itemSetImportant, 'remove', 'hidden');
                    renderVectorContainerItems(itemDelete, 'remove', 'hidden');
                    renderVectorContainerItems(itemChangeTextSize, 'remove', 'hidden');

                    renderVectorContainerItems(itemSetImportant, 'add', 'vectors-container__item-appear');
                    renderVectorContainerItems(itemChangeTextSize, 'add', 'vectors-container__item-appear');
                    renderVectorContainerItems(itemDelete, 'add', 'vectors-container__item-appear');
                }
            } else {
                if (itemSetImportant.classList.contains('vectors-container__item-appear') && itemChangeTextSize.classList.contains('vectors-container__item-appear') && itemDelete.classList.contains('vectors-container__item-appear')) {
                    renderVectorContainerItems(itemSetImportant, 'remove', 'vectors-container__item-appear');
                    renderVectorContainerItems(itemChangeTextSize, 'remove', 'vectors-container__item-appear');
                    renderVectorContainerItems(itemDelete, 'remove', 'vectors-container__item-appear');
                }
                else {
                    renderVectorContainerItems(itemSetImportant, 'add', 'vectors-container__item-disappear');
                    renderVectorContainerItems(itemChangeTextSize, 'add', 'vectors-container__item-disappear');
                    renderVectorContainerItems(itemDelete, 'add', 'vectors-container__item-disappear');

                    setTimeout(() => {
                        renderVectorContainerItems(itemSetImportant, 'add', 'hidden');
                        renderVectorContainerItems(itemDelete, 'add', 'hidden');
                        renderVectorContainerItems(itemChangeTextSize, 'add', 'hidden');
                    }, 300);
                }
            }
        }
    }
};

document.addEventListener('click', manipulateTasksButtonItems);