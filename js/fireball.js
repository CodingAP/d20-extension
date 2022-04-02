dragonURL = chrome.runtime.getURL('/res/dwagon.png');
fireballURL = chrome.runtime.getURL('/res/fireball.png');

let dragonImg = new Image();
dragonImg.src = dragonURL;

let fireballImg = new Image();
fireballImg.onload = () => {
    let x = canvas.width;
    let x2 = 0;
    setInterval(() => {
        x -= 5;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(fireballImg, x, 200, 300, 100);
        context.drawImage(dragonImg, canvas.width - dragonImg.width, 0);

        x2 += 5;
        context.save();
        context.scale(-1, 1);
        context.drawImage(fireballImg, -x2, 500, 300, 100);
        context.drawImage(dragonImg, -dragonImg.width, 400);
        context.restore();
    }, 1000 / 60);
}
fireballImg.src = fireballURL;

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