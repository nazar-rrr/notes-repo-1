document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('partialsLoaded', () => {
        import('./rendering-home-page.js');
        import('./rendering-todo-page.js');
        import('./todo-page.js');
    })
})