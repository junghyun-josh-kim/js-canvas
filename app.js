const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
context.lineWidth = 2;

const colors = [
  '#ff3838',
  '#ffb8b8',
  '#c56cf0',
  '#ff91f1a',
  '#fff200',
  '#32ff7e',
  '#7efff5',
  '#18dcff',
  '#7d5fff',
];

function onClick(event) {
  context.beginPath();
  context.moveTo(400, 400);
  const color = colors[Math.floor(Math.random() * colors.length)];
  context.strokeStyle = color;
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
}
canvas.addEventListener('mousemove', onClick);
