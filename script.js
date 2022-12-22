container = document.querySelector(".container");
//container.setAttribute('draggable', false);
//document.querySelector('body').setAttribute('draggable', false);
let width = container.offsetHeight;
let height = container.offsetWidth;

function createSquares(num){
    for (let i = 0; i < (num*num); i++){
        square = document.createElement('div');
        square.style.cssText = `width: ${width/num}px; height: ${height/num}px; background-color: white;`
        square.style.cssText += 'border: 2px solid black;';
        square.style.cssText += 'box-sizing: border-box;';
        square.setAttribute('draggable', false);
        square.addEventListener('mousedown' , changeBackground);
        square.addEventListener('mouseover' , changeBackground);
        square.classList.add('square');
        //
        container.appendChild(square);
    }
    
}

let mouseDown = false;
document.addEventListener( 'mousedown', onMouseDown, false ); 
document.addEventListener( 'mouseup', onMouseUp, false );

function onMouseDown(e) {
    mouseDown = true;
    console.log('1');
    //e.stopPropagation();
    e.preventDefault();  // <<<<<<<<<<<<< THIS SOLVED THE MOUSEUP EVENT not firing sometimes
    //no idea why it works tho and stopPropagation doesnt
}
function onMouseUp (e) {
    mouseDown = false;
    console.log('2');
}
createSquares(15);

function changeBackground (e){
    if(e.type == 'mouseover' && !mouseDown){
        console.log('hi');
        return;
    }
    this.style.backgroundColor = this.style.backgroundColor == 'black' ? 'black' : 'black';
    // ^^^^ took away 'if black -> turn white', because harder to write letters when u go over drawn lines
    //- was " =='black' ? 'white' : 'black'; "
    //  ^^ stopPropagation was preventing the click & hold loging from working
}

const button = document.querySelector('.clear');
button.addEventListener('click', clear)

function clear(e){
    const allSquares = document.querySelectorAll('.square');
    console.log(allSquares);
    allSquares.forEach( square => square.style.backgroundColor= 'white');
}

//prev random functions
function pickColor(){
    const colors = ['blue', 'black', 'red', 'green'];
    return colors[random(4)];
}

function random(num){
    return Math.floor(Math.random() * num);
}

