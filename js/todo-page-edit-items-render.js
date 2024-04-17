const theButton = document.querySelector('.tasks__field-container');
const fieldContainerItems = document.querySelectorAll('.field-container__item');

const makeFieldContainerItemsVisible = () => {
    fieldContainerItems.forEach(item => {
        item.classList.toggle('hidden');
    });
}

theButton.addEventListener('click', makeFieldContainerItemsVisible)
