let color = 'black';

document.addEventListener("DOMContentLoaded", function () {
    gridSize(16);
    
    let select = document.querySelector('.select');
    select.addEventListener('click', function(){
        let size = 16;
        gridSize(size);
    });
});

function gridSize(size) {
    
    
    let grid = document.querySelector('.grid');
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let numDivs = size * size;

    for(let i=0;i<numDivs;i++){

        let div = document.createElement("div");
        div.addEventListener('mouseover',colorDiv);
        grid.insertAdjacentElement("beforeend", div);

    }
    
}


function colorDiv() {
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    }
    else{
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice) {

    color = colorChoice;
    
}

function resetColor() {
    
    let divs = document.querySelector('.reset');
    divs.forEach((div) => div.style.backgroundColor = 'white');
}