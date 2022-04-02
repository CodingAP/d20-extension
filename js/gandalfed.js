const divElement = document.createElement('div');

divElement.style = `
width: 100%;
height: 100%;
background-image: url('https://media3.giphy.com/media/TcdpZwYDPlWXC/giphy.gif');
z-index: 1000;
position: absolute;
left: 0;
top: 0;
`;

document.body.style.overflow = 'hidden';

document.body.appendChild(divElement);

console.log(divElement);