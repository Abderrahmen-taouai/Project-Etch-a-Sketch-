/* 

*/

let startColor='';
const container=document.querySelector('.container');

const grid=document.createElement('div');
grid.className='grid';
document.querySelector('.container').appendChild(grid);
const btn=document.querySelector('.input');
var input = document.createElement("input");
input.type = "number";
input.className = "inputNum";
document.body.appendChild(input);

btn.addEventListener('click', createSquare);






function removeAllChildNodes(parent) {
   while (parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}

function getRandomRgb() {
   var num = Math.round(0xffffff * Math.random());
   var r = num >> 16;
   var g = num >> 8 & 255;
   var b = num & 255;
   return 'rgb(' + r + ', ' + g + ', ' + b + ')';
 }
 

let range=0;
function createSquare(e){
    
     removeAllChildNodes(grid);
    let inp= prompt("please entre the Grid size max 100!");  

    console.log( e);
    range= parseInt(inp);
    console.log(typeof range);

 for (let index = 1; index <= range*range; index++) {
    let sqr=document.createElement('div');
 
    sqr.className='sqr';
    sqr.id=`${index}`;
    sqr.addEventListener('mouseover', colorize);

    grid.appendChild(sqr);
    grid.style.gridTemplateColumns =`repeat(${range}, 1fr)`;
    grid.style.gridTemplateRows =`repeat(${range}, 1fr)`;;

 }

 grid.style.display="grid";

}
function colorize (){
   if (startColor =='black') {
   this.style.background='black';
   //Need to converst the opacity since is string
    const opa =Number(this.style.opacity); 
   //Add 10% of opacity for the same square once we revist it 
   this.style.opacity=opa+ 0.1;   
}
  else if (startColor =='random')
   this.style.background="#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();}
    
function changeColorSquare(choice){
   startColor=choice;
   
 

}
const colorinputblack=document.querySelector('.colorInputBlack');
const colorinputrainBow=document.querySelector('.colorInputRainBow');

colorinputblack.addEventListener('click',()=>{
    changeColorSquare('black')});

colorinputrainBow.addEventListener('mouseup',()=>{
   changeColorSquare('random')});
  