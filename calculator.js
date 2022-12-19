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
        if (b===Number(display.textContent) && ((display.textContent.length<=12 && display.textContent.indexOf(".")>0) || (display.textContent.length<=11 && display.textContent.indexOf(".")<0))) {
            if (display.textContent==="0") {
                display.textContent=number.innerText;
            } else {
                display.textContent=`${display.textContent}${number.innerText}`;
            }
            b=Number(display.textContent);
            console.log("b is", b);
        } else if (operator===undefined && ((display.textContent.length<=12 && display.textContent.indexOf(".")>0) || (display.textContent.length<=11 && display.textContent.indexOf(".")<0))) {
            if (display.textContent==="0") {
                display.textContent=number.innerText;
            } else {
                display.textContent=`${display.textContent}${number.innerText}`;
            }
            a=Number(display.textContent);
            console.log("a is", a);
        } else if ((equal===true && b!==undefined) || display.textContent==="ERROR" || display.textContent==="Result too long") {
            display.textContent='';
            display.textContent=number.innerText;
            a=Number(display.textContent);
            console.log("a is", a);
            operator=undefined;
            b=undefined;
            equal=false;
        } else if (operator!==undefined) {
            display.textContent='';
            display.textContent=number.innerText;
            b=Number(display.textContent);
            console.log("b is", b);
            //
            equal=false;
        }
    });
});

const dot=document.querySelector('.dot');
dot.addEventListener('click', () => {
    if (display.textContent.indexOf(".")<0 || result==display.textContent) {
        if ((equal===true && b!==undefined) || display.textContent==="ERROR" || display.textContent==="Result too long") {
            display.textContent='';
            display.textContent="0.";
            a=Number(display.textContent);
            console.log("a is", a);
            operator=undefined;
            b=undefined;
            equal=false;
        } else if (operator!==undefined && b!==Number(display.textContent)) {
            display.textContent='';
            display.textContent="0.";
            b=Number(display.textContent);
            console.log("b is", b);
        } else {
            display.textContent=`${display.textContent}${dot.innerText}`;
        }
    }
});

const operators=document.querySelectorAll('.operators');
operators.forEach((sign) => {
    sign.addEventListener('click', () => {
        if (a==undefined) {
            a=0;
            console.log("a is", a);
        }
        if (operate(operator, a, b) === "ERROR") {
            result=operate(operator, a, b);
            display.textContent=result;
            console.log("ERROR");
        } else if (b!==undefined && equal!==true) {
            result=operate(operator, a, b);
            console.log("full result is", result, "(operator button pressed)");
            if (result.toString().length > 12 && result.toString().indexOf(".")<12 && result.toString().indexOf(".")>0) {
                let cut=result.toString().slice(0, 14);
                console.log("cut number is", cut);
                result=Number(Number(cut).toFixed(cut.length-result.toString().indexOf(".")-2));
                display.textContent=result;
                a=result;
                console.log("Result (and a) is", result, "(operator button pressed, result rounded)");
            } else if (result.toString().length > 12 && (result.toString().indexOf(".")<0 || result.toString().indexOf(".")>=12)) {
                display.textContent="Result too long";
                console.log("Result is too long (calculated by operator (+,-,*,/))");
            } else {
                display.textContent=result;
                a=result;
                console.log("Result (and a) is", result, "(operator button pressed)");
            };
        }
        operator=sign.innerText;
        console.log(operator);
        b=undefined;
    })
});

const equals=document.querySelector('.equals');
equals.addEventListener('click', () => {
    if (operate(operator, a, b) === "ERROR") {
        result=operate(operator, a, b);
        display.textContent=result;
        console.log("ERROR");
    } else if (b!==undefined) {
        result=operate(operator, a, b);
        console.log("full result is", result, "(= button pressed)");
        if (result.toString().length > 12 && result.toString().indexOf(".")<12 && result.toString().indexOf(".")>0) {
            let cut=result.toString().slice(0, 14);
            console.log("cut number is", cut);
            result=Number(Number(cut).toFixed(cut.length-result.toString().indexOf(".")-2));
            display.textContent=result;
            a=result;
            equal=true;
            console.log("Result (and a) is", result, "(= button pressed, result rounded)");
        } else if (result.toString().length > 12 && (result.toString().indexOf(".")<0 || result.toString().indexOf(".")>=12)) {
            display.textContent="Result too long";
            console.log("Result is too long (calculated by equals (=))");
        } else {
            display.textContent=result;
            a=result;
            equal=true;
            console.log("Result (and a) is", result, "(= button pressed)");
        }
    }
});

const ac=document.querySelector('.ac');
ac.addEventListener('click', () => {
    a=undefined;
    b=undefined;
    operator=undefined;
    result=0;
    display.textContent='0';
    console.log("All cleared");
});

const backspace=document.querySelector(".backspace");
backspace.addEventListener('click', () => {
    if (a==display.textContent && display.textContent!=0 && a!=result) {
        if (display.textContent.length==1) {
            display.textContent="0";
            a=0;
            console.log("backspace, a is", a);
        } else {
            display.textContent=display.textContent.slice(0, display.textContent.length-1);
            a=Number(display.textContent);
            console.log("backspace, a is", a);
        }
    } else if (b==display.textContent && display.textContent!=0) {
        if (display.textContent.length==1) {
            display.textContent="0";
            b=0;
            console.log("backspace, b is", b);
        } else {
            display.textContent=display.textContent.slice(0, display.textContent.length-1);
            b=Number(display.textContent);
            console.log("backspace, b is", b);
        }
    }
});