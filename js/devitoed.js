let devitos = [
    chrome.runtime.getURL('/res/devito1.png'),
    chrome.runtime.getURL('/res/devito2.png'),
    chrome.runtime.getURL('/res/devito3.png'),
    chrome.runtime.getURL('/res/devito4.png'),
    chrome.runtime.getURL('/res/devito5.png'),
    chrome.runtime.getURL('/res/devito6.png'),
    chrome.runtime.getURL('/res/devito7.png')
];

for (let i = 0; i < devitos.length; i++) {
    let image = new Image();
    image.src = devitos[i];

    devitos[i] = image;
}

const sleep = (ms) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
};

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

canvas.style = `
width: 100%;
height: 100%;
z-index: 1000;
position: absolute;
left: 0;
top: 0;
`;

document.body.appendChild(canvas);

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

setTimeout(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    let devitoCount = 0;
    let devitoInterval = setInterval(() => {
        let randomDevito = Math.floor(Math.random() * 7);
        context.drawImage(devitos[randomDevito], Math.random() * canvas.width * 1.5 - (canvas.width / 2), Math.random() * canvas.height * 1.5 - (canvas.height / 2));
        devitoCount++;

        if (devitoCount == 100) clearInterval(devitoInterval);
    }, 250);
}, 200);

document.body.style.overflow = 'hidden';
window.addEventListener('scroll', event => {
    event.preventDefault();
})