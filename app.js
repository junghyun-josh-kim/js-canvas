const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

context.fillRect(210 - 40, 200 - 20, 15, 100);
context.fillRect(350 - 40, 200 - 20, 15, 100);
context.fillRect(260 - 40, 200 - 20, 60, 200);
context.arc(250, 100, 50, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.fillStyle = 'white';
context.arc(260 + 10, 80, 8, 1 * Math.PI, 2 * Math.PI);
context.arc(220 + 10, 80, 8, 1 * Math.PI, 2 * Math.PI);
context.fill();
