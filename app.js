const lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
context.lineWidth = lineWidth.value;

let isPainting = false;
function onMouseMove(event) {
  if (isPainting) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    return;
  }
  context.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}
function onLineWidthChange(event) {
  context.beginPath();
  context.lineWidth = event.target.value;
}

canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
lineWidth.addEventListener('change', onLineWidthChange);
