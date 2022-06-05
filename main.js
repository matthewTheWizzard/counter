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

