const manipulateTasksButtonItems = (event) => {
    if (event.target.matches('.tasks__item--edit')) {
        const theBody = document.querySelector('body');
        const theToPage = document.querySelector('.todo-page');

        const tasksItem = event.target.closest('.tasks__item');
        const tasksItemVectorsContainer = tasksItem.querySelector('.tasks__item--vectors-container');
    
        const itemSetImportant = tasksItem.querySelector('.vectors-container__item--set-important');
        const itemChangeTextSize = tasksItem.querySelector('.vectors-container__item--change-text-size');
        const itemDelete = tasksItem.querySelector('.vectors-container__item--delete');
    
        const itemSetImportantArticle = tasksItem.querySelector('.vectors-container__item--delete');
        const itemChangeTextSizeArticle = tasksItem.querySelector('.vectors-container__item--delete');
        const itemDeleteArticle = tasksItem.querySelector('.vectors-container__item--delete');
    
        const renderVectorContainerItems = (element, action, className) => {
            element.classList[action](className);
        };

        if (window.innerWidth <= 650) {
            if (tasksItemVectorsContainer.classList.contains('item--vectors-container-disappear')) {
                renderVectorContainerItems(tasksItemVectorsContainer, 'tasks__item--vectors-container-disappear');
            }
    
            renderVectorContainerItems(itemSetImportantArticle, 'remove', 'hidden');
            renderVectorContainerItems(itemChangeTextSizeArticle, 'remove', 'hidden');
            renderVectorContainerItems(itemDeleteArticle, 'remove', 'hidden');
    
            renderVectorContainerItems(tasksItemVectorsContainer, 'add', 'item--vectors-container-appear');
            renderVectorContainerItems(tasksItemVectorsContainer, 'add', 'tasks__item--vectors-container-appeared');

            theBody.insertBefore(tasksItemVectorsContainer, theToPage);
        } else if (window.innerWidth >= 650 && window.innerWidth <= 950) {


        } else if (window.innerWidth >= 1250) {
            if (tasksItemVectorsContainer.classList.contains('hidden')) {
                renderVectorContainerItems(tasksItemVectorsContainer, 'remove', 'hidden');
            }
            if (itemSetImportant.classList.contains('hidden') && itemChangeTextSize.classList.contains('hidden') && itemDelete.classList.contains('hidden')) {
                renderVectorContainerItems(itemChangeTextSize, 'remove', 'item--vectors-container-disappear');
                renderVectorContainerItems(itemDelete, 'remove', 'item--vectors-container-disappear');

                renderVectorContainerItems(itemSetImportant, 'remove', 'hidden');
                renderVectorContainerItems(itemDelete, 'remove', 'hidden');
                renderVectorContainerItems(itemChangeTextSize, 'remove', 'hidden');

                renderVectorContainerItems(itemSetImportant, 'add', 'item--vectors-container-appear');
                renderVectorContainerItems(itemChangeTextSize, 'add', 'item--vectors-container-appear');
                renderVectorContainerItems(itemDelete, 'add', 'item--vectors-container-appear');
            } else {
                renderVectorContainerItems(itemSetImportant, 'add', 'item--vectors-container-disappear');
                renderVectorContainerItems(itemChangeTextSize, 'add', 'item--vectors-container-disappear');
                renderVectorContainerItems(itemDelete, 'add', 'item--vectors-container-disappear');

                setTimeout(() => {
                    renderVectorContainerItems(itemSetImportant, 'add', 'hidden');
                    renderVectorContainerItems(itemDelete, 'add', 'hidden');
                    renderVectorContainerItems(itemChangeTextSize, 'add', 'hidden');
                }, 300);
            }
        }
    }
};

document.addEventListener('click', manipulateTasksButtonItems);