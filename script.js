container = document.querySelector(".container");

for (let i = 0; i < 63;i++){
    square = document.createElement('div');
    square.style.cssText = `width: 100px; height: 100px; background-color: white;`
    square.style.cssText += 'border: 2px solid black;';
    container.appendChild(square);
}


function pickColor(){
    const colors = ['blue', 'black', 'red', 'green'];
    return colors[random(4)];
}



function random(num){
    return Math.floor(Math.random() * num);
}
