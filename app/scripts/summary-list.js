const observer = new MutationObserver(data => {

});


observer.observe(document.getElementById('foo'), {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
});