let a;
let b;
let operator;
let result;

const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const multiply = function(a, b) {
    return a*b;
};

const divide = function(a,b) {
    if (b===0) {
        console.log("ERROR");
    } else {
    return a/b;
    }
};

const operate = function(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a,b);
    }
};

const display=document.querySelector('.display');

const numbers=document.querySelectorAll('.numbers');
numbers.forEach ((number) => {
    number.addEventListener('click', (e) => {

        if (b===Number(display.textContent)) {
            if (display.textContent==="0") {
                display.textContent=number.innerText;
            } else {
                display.textContent=`${display.textContent}${number.innerText}`;
            }
            b=Number(display.textContent);
            console.log(b);
        } else if (operator===undefined) {
            if (display.textContent==="0") {
                display.textContent=number.innerText;
            } else {
                display.textContent=`${display.textContent}${number.innerText}`;
            }
            a=Number(display.textContent);
            console.log(a);
        } else {
            display.textContent='';
            if (display.textContent==="0") {
                display.textContent=number.innerText;
            } else {
                display.textContent=`${display.textContent}${number.innerText}`;
            }
            b=Number(display.textContent);
            console.log(b);
            //operator=undefined; 


        }
    });
});

const dot=document.querySelector('.dot');
dot.addEventListener('click', () => {
    if (display.textContent.indexOf(".")<0) {
    display.textContent=`${display.textContent}${dot.innerText}`;
    }
});

const operators=document.querySelectorAll('.operators');
operators.forEach((sign) => {
    sign.addEventListener('click', () => {
        if (b!==undefined) {
            result=operate(operator, a, b);
            console.log(result);
            display.textContent=result;
            a=result;
        }
        operator=sign.innerText;
        console.log(operator);
    })
});

const equals=document.querySelector('.equals');
equals.addEventListener('click', () => {
    result=operate(operator, a, b);
    display.textContent=result;
    console.log(result);
});

const ac=document.querySelector('.ac');
ac.addEventListener('click', () => {
    a=undefined;
    b=undefined;
    operator=undefined;
    result=undefined;
    display.textContent='0';
})