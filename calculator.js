let a;
let b;
let operator;
let result=0;
let equal;

const display=document.querySelector('.display');

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
        return "ERROR";
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
            console.log("b is", b);
        } else if (operator===undefined) {
            if (display.textContent==="0") {
                display.textContent=number.innerText;
            } else {
                display.textContent=`${display.textContent}${number.innerText}`;
            }
            a=Number(display.textContent);
            console.log("a is", a);
        } else if (equal===true && b!==undefined) {
            display.textContent='';
            display.textContent=number.innerText;
            a=Number(display.textContent);
            console.log("a is", a);
            operator=undefined;
            b=undefined;
            equal=false;
        } else {
            display.textContent='';
            display.textContent=number.innerText;
            b=Number(display.textContent);
            console.log("b is", b);
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
        if (b!==undefined && equal!==true) {
            result=Math.round(operate(operator, a, b)*1000)/1000;
            console.log("result is", result);
            display.textContent=result;
            a=result;
        }
        operator=sign.innerText;
        console.log(operator);
        b=undefined;
    })
});

const equals=document.querySelector('.equals');
equals.addEventListener('click', () => {
    if (b!==undefined) {
    result=Math.round(operate(operator, a, b)*1000)/1000;
    display.textContent=result;
    a=result;
    console.log("result is", result);
    equal=true;
    }
});

const ac=document.querySelector('.ac');
ac.addEventListener('click', () => {
    a=undefined;
    b=undefined;
    operator=undefined;
    result=0;
    display.textContent='0';
})