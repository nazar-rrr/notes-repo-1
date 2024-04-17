document.addEventListener('DOMContentLoaded', () => {
    const theButton = document.querySelector('.tasks__field-container')
    const makeFieldContainerItemsVisible = () => {
        const fieldContainerItemEdit = document.querySelector('.field-container__item--edit');
        const fieldContainerItemChangeTextSize = document.querySelector('.field-container__item--change-text-size,');
        const fieldContainerItemChangeTextColor = document.querySelector('.field-container__item--change-text-color');
        const fieldContainerItemSetImportant = document.querySelector('.field-container__item--set-important');

        if (fieldContainerItemEdit.classList.contains('hidden') && fieldContainerItemChangeTextSize.classList.contains('hidden') && ieldContainerItemChangeTextSize.classList.contains('hidden') && fieldContainerItemChangeTextColor.classList.contains('hidden') && fieldContainerItemSetImportant.classList.contains('hidden')) {
            fieldContainerItemEdit.classList.remove('hidden');
            fieldContainerItemChangeTextSize.classList.remove('hidden');
            fieldContainerItemChangeTextColor.classList.remove('hidden');
            fieldContainerItemSetImportant.classList.remove('hidden');
        }

        else {
            fieldContainerItemEdit.classList.add('hidden');
            fieldContainerItemChangeTextSize.classList.add('hidden');
            fieldContainerItemChangeTextColor.classList.add('hidden');
            fieldContainerItemSetImportant.classList.add('hidden');
        }
    }

    theButton.addEventListener('click', makeFieldContainerItemsVisible)
})