d20url = chrome.runtime.getURL('/res/d20.gif');

let div20 = document.createElement('div');
div20.style = `
width: 300px;
height: 300px;
background-image: url(${d20url});
background-size: 100% 100%;
position: absolute;
z-index: 1000;
left: ${Math.floor(Math.random() * (window.innerWidth - 300))}px;
top: ${Math.floor(Math.random() * (window.innerHeight - 300))}px;
color: black;
font-size: 30px;
font-family: Arial;
text-align: center;
line-height: 300px;
vertical-align: middle;
`;

let divRollForInitiative = document.createElement('div');
divRollForInitiative.style = `
color: white;
width: 100%;
height: 100px;
line-spacing: 100px;
font-size: 100px;
font-family: Arial;
position: absolute;
z-index: 1000;
top: 0;
left: 0;
`;

divRollForInitiative.innerHTML = 'ROLL FOR INITIATIVE';

document.body.appendChild(div20);
document.body.appendChild(divRollForInitiative);

setTimeout(() => {
    div20.innerHTML = Math.floor(Math.random() * 20) + 1
}, 2000);

console.log(divRollForInitiative);