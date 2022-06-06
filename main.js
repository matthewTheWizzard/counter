// first way to solve the problem

const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
let value = document.querySelector('.value');


value.textContent = 0;
decrease.addEventListener('click', function(){
    value.textContent -=1;
});

increase.addEventListener('click', function(){
    let sumIncrease = parseInt(value.textContent) + 1;
    value.textContent = sumIncrease;
});

reset.addEventListener('click', function(){
    value.textContent = 0;
    
});

// second way to solve problem

/*
const buttons = function(){
    const buttons = document.querySelectorAll('.btn');
    console.log(buttons);
    let buttonsArray = [];
    for(let i = 0; i < 3; i++){
        let button = buttons[i];
        console.log(button);    
        buttonsArray.push(button);
        console.log(buttonsArray);
    }
    console.log(buttonsArray);
    return buttonsArray;
};


*/