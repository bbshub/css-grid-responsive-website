(function () {
    const menuBtn = document.querySelector('button[aria-expanded]');

    menuButtonClickHandler = (e) => {
        const btnAriaExpandedValue = e.target.getAttribute('aria-expanded') === 'true';
        e.target.setAttribute('aria-expanded', !btnAriaExpandedValue);
    };
    
    menuBtn.addEventListener('click', menuButtonClickHandler);
})();

