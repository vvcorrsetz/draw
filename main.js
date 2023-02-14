var canva= document.getElementById("cc")
var draw= canva.getContext("2d")
var mwo= "empty"
var lstx,lsty
var cwolor = "black"
var width = 6
canva.addEventListener("mousedown",cwlick)
function cwlick(e) {
mwo="mousedown"
console.log(mwo)
cwolor=document.getElementById("colorr").value
}
canva.addEventListener("mouseleave",stwop)
function stwop(e){
mwo="mouseleave"
console.log(mwo)
}
canva.addEventListener("mouseup",wup)
function wup(e){
mwo="mouseup"
console.log(mwo)
}
canva.addEventListener("mousemove",mwove)
function mwove(e){
cxt=e.clientX-canva.offsetLeft
cyt=e.clientY-canva.offsetTop
if (mwo=="mousedown") {
draw.beginPath()
draw.strokeStyle=cwolor
draw.lineWidth=width
draw.moveTo(lstx,lsty)
draw.lineTo(cxt,cyt)
draw.stroke()
}
lstx=cxt
lsty=cyt
}

canva.addEventListener("touchstart",stawrt)
function stawrt(e) {
cwolor=document.getElementById("colorr").value
mwo="touchstart"
console.log(mwo)
lstx=e.touches[0].clientX-canva.offsetLeft
lsty=e.touches[0].clientY-canva.offsetTop
}

canva.addEventListener("touchmove",tmwo)
function tmwo(e){
mwo="touchmove"
console.log(mwo)
cxt=e.touches[0].clientX-canva.offsetLeft
cyt=e.touches[0].clientY-canva.offsetTop
draw.beginPath()
draw.strokeStyle=cwolor
draw.lineWidth=width
draw.moveTo(lstx,lsty)
draw.lineTo(cxt,cyt)
draw.stroke()
lstx=cxt
lsty=cyt
}
new_width=screen.width-70;
new_height=screen.height-300;
if(width < 992){
document.getElementById("cc").width=new_width;
document.getElementById("cc").height=new_height;
document.body.style.overflow="hidden";
}

