document.addEventListener('click', (event) => {
    if (event.target.matches('.home-page__heading-button')) {
        try {
            const theBody = document.querySelector('body');
            const theHomePage = document.querySelector('.home-page');

            const removeHomePage = () => {
                theHomePage.remove();
            }

            const renderToDoPage = () => {
                const theToDoPage = document.createElement('section');
                theToDoPage.setAttribute('class', 'todo-page');

                theToDoPage.innerHTML = `
                    <div class="todo-page__heading-button">
                        <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 17L27 2.27757L27 31.7224L0 17Z" fill="white" />
                        </svg>
                    </div>
                    <div class="todo-page__container">
                        <div class="todo-page__tasks">
                            <div class="todo-page__tasks-heading">
                                <p class="todo-page__tasks-heading--article">To Do</p>
                            </div>
                            <div class="tasks__field-container">
                            <div class="field-container__item--edit hidden">Edit</div>
                                <textarea class="field-container__item"></textarea>
                                <div class="field-container__item--change-text-size hidden">
                                    <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white" />
                                    </svg>
                                </div>
                                <div class="field-container__item--change-text-color hidden">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="white" />
                                    </svg>
                                </div>
                                <div class="field-container__item--set-important hidden">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>`;

                theBody.appendChild(theToDoPage);
            }

            const launchListeners = () => {
                theHomePage.classList.add('home-page__disappear');
                setTimeout(function () {
                    removeHomePage();
                    renderToDoPage();
                }, 300)
            }
            launchListeners();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
});

