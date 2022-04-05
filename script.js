container = document.querySelector(".container");
container.style.width = '800px';
container.style.height = '800px';

function createSquares(num){
    for (let i = 0; i < num*num ;i++){
        square = document.createElement('div');
        square.style.cssText = `width: 100px; height: 100px; background-color: white;`
        square.style.cssText += 'border: 2px solid black;';
        square.style.cssText += 'box-sizing: border-box;';
        square.addEventListener('click' , changeBackground);
        square.classList.add('square');
        container.appendChild(square);
    }
    
}

createSquares(8);

function changeBackground (e){
    console.log(this);
    this.style.backgroundColor = this.style.backgroundColor == 'black' ? 'white' : 'black';
    e.stopPropagation();
}

const button = document.querySelector('.clear');
button.addEventListener('click', clear)

function pickColor(){
    const colors = ['blue', 'black', 'red', 'green'];
    return colors[random(4)];
}

function random(num){
    return Math.floor(Math.random() * num);
}

function clear(e){
    const allSquares = document.querySelectorAll('.square');
    console.log(allSquares);
    allSquares.forEach( square => square.style.backgroundColor= 'white');
}