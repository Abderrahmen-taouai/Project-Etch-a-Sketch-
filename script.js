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

document.getElementById("favcolor").addEventListener('input',()=>{
   grid.style.background=document.getElementById("favcolor").value;

})

function removeAllChildNodes(parent) {
   while (parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}


let range=0;
function createSquare(e){
    
     removeAllChildNodes(grid);
    let inp= prompt("please entre the Grtid size max 100!");  

    console.log(typeof inp);
    //range= e.target.valueAsNumber;
    range= parseInt(inp);
    console.log(typeof range);

 for (let index = 1; index <= range*range; index++) {
    let sqr=document.createElement('div');
 
    sqr.className='sqr';
    sqr.id=`${index}`;
    sqr.addEventListener('click', (e)=>{
      console.log(e.target);
      sqr.style.background=document.getElementById('favcolor1').value;})
  

    grid.appendChild(sqr);
     grid.style.gridTemplateColumns =`repeat(${range}, 1fr)`;
    grid.style.gridTemplateRows =`repeat(${range}, 1fr)`;;


    //grid.setAttribute('style','grid-template-columns: repeat(range, auto);');

    
 }

 grid.style.display="grid";

}

