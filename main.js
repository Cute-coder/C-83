var lastPositionofX,lastPositionofY;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
widthofline=1;

var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart" ,my_touchstart);
function my_touchstart(e){
console.log("my_touchstart");
lastPositionofX=e.touches[0].clientX-canvas.offsetLeft;
lastPositionofY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){


console.log("my_touchmove");
    currentpositionoftouchX=e.touches[0].clientX-canvas.offsetLeft;
    currentpositionoftouchY=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        console.log("last position of X and Y coordinates= ");
        console.log("x= "+lastPositionofX+"y= "+lastPositionofY);
        ctx.moveTo(lastPositionofX,lastPositionofY);
        console.log("current position of X and Y coordinates= ");
        console.log("x= "+currentpositionoftouchX+"y= "+currentpositionoftouchY);
        ctx.lineTo(currentpositionoftouchX,currentpositionoftouchY);
        ctx.stroke();
    
    lastPositionofX=currentpositionoftouchX; 
    lastPositionofY=currentpositionoftouchY;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}
