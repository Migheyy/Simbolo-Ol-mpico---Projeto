var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var larguraLinha = 2;

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = larguraLinha;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = larguraLinha;
ctx.arc(250,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = larguraLinha;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = larguraLinha;
ctx.arc(350,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = larguraLinha;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", desenharCirculo);

function desenharCirculo(e){
    color = document.getElementById("caixaTextoCor").value;
    larguraLinha = document.getElementById("caixaTextoLargura").value;
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    circuloCanvas(mouseX, mouseY);
}

function circuloCanvas() {
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = larguraLinha;
ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
ctx.stroke();
}

function limparcanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}