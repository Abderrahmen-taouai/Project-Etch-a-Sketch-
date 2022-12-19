/* 

*/

const container=document.querySelector('.container');

const grid=document.createElement('div');
grid.className='grid';
document.querySelector('.container').appendChild(grid);
const btn=document.querySelector('button');
var input = document.createElement("input");
input.type = "number";
input.className = "inputNum";
document.body.appendChild(input);

//input.addEventListener('input', createSquare);
btn.addEventListener('click', createSquare);
let rainBow=document.getElementById('check');






function removeAllChildNodes(parent) {
   while (parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}

function changeColor(event) {
   event.target.style.backgroundColor = randomColor();
}


function randomColor() {
   var randomRed = Math.floor(Math.random() * 255);
   var randomGreen = Math.floor(Math.random() * 255);
   var randomBlue = Math.floor(Math.random() * 255);
   //create the string that is the ‘random color’
   var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";

   return randomColor;
}

let range=0;
function createSquare(e){
    
     removeAllChildNodes(grid);
    let inp= prompt("please entre the Grid size max 100!");  

    console.log( e);
    //range= e.target.valueAsNumber;
    range= parseInt(inp);
    console.log(typeof range);

 for (let index = 1; index <= range*range; index++) {
    let sqr=document.createElement('div');
 
    sqr.className='sqr';
    sqr.id=`${index}`;

    rainBow.addEventListener('click',()=>
{
   sqr.addEventListener('click', changeColor);
});
    sqr.addEventListener('click', (e)=>{
      sqr.style.background=document.getElementById('favcolor1').value;})
  
  
  

    grid.appendChild(sqr);
    grid.style.gridTemplateColumns =`repeat(${range}, 1fr)`;
    grid.style.gridTemplateRows =`repeat(${range}, 1fr)`;;


    //grid.setAttribute('style','grid-template-columns: repeat(range, auto);');

    
 }

 grid.style.display="grid";

}

    

function createSquare1(e){
    
   removeAllChildNodes(grid);
  let inp= prompt("please entre the Grid size max 100!");  

  console.log( e);
  //range= e.target.valueAsNumber;
  range= parseInt(inp);
  console.log(typeof range);

for (let index = 1; index <= range*range; index++) {
  let sqr=document.createElement('div');

  sqr.className='sqr';
  sqr.id=`${index}`;

  
  sqr.addEventListener('click', changeColor);




  grid.appendChild(sqr);
  grid.style.gridTemplateColumns =`repeat(${range}, 1fr)`;
  grid.style.gridTemplateRows =`repeat(${range}, 1fr)`;;


  //grid.setAttribute('style','grid-template-columns: repeat(range, auto);');

  
}

grid.style.display="grid";

}