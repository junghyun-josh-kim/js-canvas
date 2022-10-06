const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

context.fillRect(200, 200, 50, 200);
context.fillRect(400, 200, 50, 200);
context.lineWidth = 2;
context.fillRect(300, 300, 50, 100);
context.fillRect(200, 200, 200, 20);

context.moveTo(200, 200);
context.lineTo(325, 100);
context.lineTo(450, 200);
context.fill();
