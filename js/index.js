document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('partialsLoaded', () => {
        import('./home-page.js');
        import('./todo-page.js');
    })
})