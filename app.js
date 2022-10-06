const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

context.moveTo(50, 50);
context.lineTo(150, 50);
context.lineTo(150, 150);
context.lineTo(50, 150);
context.lineTo(50, 50);
context.stroke();
