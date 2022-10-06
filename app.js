const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

context.rect(50, 50, 100, 100);
context.fillStyle = 'red';
context.stroke();
