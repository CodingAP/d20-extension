let dragonURL = chrome.runtime.getURL('/res/dwagon.png');
let fireball = chrome.runtime.getURL('/res/fireball.png');

let dragonImg = new Image();
dragonImg.onload = () => {
    let x = canvas.width;
    setInterval(() => {
        x -= 5;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(dragonImg, canvas.width - dragonImg.width, 0);
        context.drawImage(fireballImg, x - 300, 100);
    }, 1000 / 60);
}
dragonImg.src = dragonURL;

let fireballImg = new Image();
fireballImg.onload = () => {
    let x = canvas.width;
    setInterval(() => {
        x--;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(dragonImg, canvas.width - dragonImg.width, 0);
        context.drawImage(fireballImg, x, 100);
    }, 1000 / 60);
}
fireball.src = fireball;

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

document.body.appendChild(canvas);

canvas.style = `
width: 100%;
height: 100%;
z-index: 1000;
position: absolute;
left: 0;
top: 0;
`;

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;