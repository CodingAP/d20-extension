window.addEventListener('keydown', event => {
    chrome.runtime.sendMessage({
        from: event.key,
        subject: 'getKeyStroke',
    });
});
window.addEventListener('mousedown', event => {
    chrome.runtime.sendMessage({
        from: event.button,
        subject: 'getMousePress',
    });
});