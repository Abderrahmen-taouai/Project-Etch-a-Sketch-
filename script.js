/* 

*/

const container=document.querySelector('.container');

const grid=document.createElement('div');
grid.className='grid';
//grid.setAttribute('style', 'display:grid;');
document.querySelector('.container').appendChild(grid);
const btn=document.querySelector('button');
var input = document.createElement("input");
input.type = "number";
input.className = "inputNum";
document.body.appendChild(input);
input.addEventListener('input', createSquare);

let range=0;
function createSquare(e){
  range= e.target.valueAsNumber;

 for (let index = 1; index <= range*range; index++) {
    let sqr=document.createElement('div');
 
    sqr.className='sqr';
  

    grid.appendChild(sqr);
    grid.style.gridTemplateColumns =`repeat(${range}, 1fr)`;
    grid.style.gridTemplateRows =`repeat(${range}, 1fr)`;;


    //grid.setAttribute('style','grid-template-columns: repeat(range, auto);');

    
 }
 grid.style.display="grid";
 //grid.style.gap="15px";
 //grid.style.gridTemplate = 'repeat(range, 1fr)';
 //grid.style.gridTemplateColumns ="repeat(8 , auto)";

}