const theButtons = document.querySelectorAll('.tasks__field-container');

theButtons.forEach(button => {
    const fieldContainerItems = button.querySelector('.field-container__items');
    const fieldContainerItemEdit = button.querySelector('.field-container__item--edit');

    const renderFieldContainerItemEdit = () => {
        fieldContainerItemEdit.classList.remove('hidden');
        fieldContainerItemEdit.classList.remove('field-container__item--edit-disappear');
        fieldContainerItemEdit.classList.add('field-container__item--edit-appear');
    };

    const removeFieldContainerItemEdit = () => {
        fieldContainerItemEdit.classList.remove('field-container__item--edit-appear');
        fieldContainerItemEdit.classList.add('field-container__item--edit-disappear');
        setTimeout(() => {
            fieldContainerItemEdit.classList.add('hidden');
        }, 300);

        if (fieldContainerItems.classList.contains('field-container__items-appear')) {
            fieldContainerItems.classList.remove('field-container__items-appear');
        }
        fieldContainerItems.classList.add('field-container__items-disappear');
        setTimeout(() => {
            fieldContainerItems.classList.add('hidden');
        }, 300);
    };

    button.addEventListener('mouseover', renderFieldContainerItemEdit);
    button.addEventListener('mouseleave', removeFieldContainerItemEdit);
});