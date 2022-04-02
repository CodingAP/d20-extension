let url = chrome.runtime.getURL('/res/scream.mp3');
let imgUrl = chrome.runtime.getURL('/res/creepyblended.png');

window.addEventListener('mousedown', () => {
    setTimeout(() => {
        const divElement = document.createElement('div');

        divElement.style = `
width: 50%;
height: 80%;
background-repeat: no-repeat;
background-size: 100% 100%;
z-index: 1000;
position: absolute;
left: 400px;
top: 100px;
`;

        let scream = new Audio();
        scream.src = url;
        scream.play();

        divElement.style.backgroundImage = `url(${imgUrl})`;

        document.body.style.overflow = 'hidden';

        document.body.appendChild(divElement);
    }, 3000);
});