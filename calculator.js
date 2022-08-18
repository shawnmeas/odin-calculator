function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0)
        return 'ERROR';
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function operate(operator, a, b) {
    let result;
    switch(operator) 
    {
        case 'add':
            result = add(a, b);
            break;
        case 'subtract':
            result = subtract(a, b);
            break;
        case 'multiply':
            result = multiply(a, b);
            break;
        case 'divide':
            result = divide(a, b);
            break;
        case 'power':
            result = power(a, b);
            break;
    }

    return result;
}

function generateUI() {
    let container = document.getElementById('container');
    let div, btn, target;
    for(let i = 4; i >= 0; i--)
    {
        div = document.createElement('div');
        div.classList.add('row');
        div.setAttribute('id', 'row_'+i);
        container.appendChild(div);
        target = document.getElementById('row_'+i);
        if(i != 4 && i != 0)
        {
            for(let j = 1; j < 4; j++)
            {
                number = (3*(i-1))+j;
                btn = document.createElement('button');
                btn.classList.add('button', 'number');
                btn.setAttribute('id', 'btn_'+number);
                btn.textContent = number;
                target.appendChild(btn);
            }
        }

        switch(i)
        {
            case 4:
                btn = document.createElement('button');
                btn.classList.add('button', 'function');
                btn.setAttribute('id', 'btn_ac');
                btn.textContent = "AC";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button', 'function');
                btn.setAttribute('id', 'btn_c');
                btn.textContent = "C";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button', 'function');
                btn.setAttribute('id', 'btn_backspace');
                btn.innerHTML = "<img src='images/backspace.png'>";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button', 'operation');
                btn.setAttribute('id', 'btn_power');
                btn.textContent = "^";
                target.appendChild(btn);
                break;
            case 3:
                btn = document.createElement('button');
                btn.classList.add('button', 'operation');
                btn.setAttribute('id', 'btn_divide');
                btn.textContent = "%";
                target.appendChild(btn);
                break;
                
            case 2:
                btn = document.createElement('button');
                btn.classList.add('button', 'operation');
                btn.setAttribute('id', 'btn_multiply');
                btn.textContent = "*";
                target.appendChild(btn);
                break;
            case 1:
                btn = document.createElement('button');
                btn.classList.add('button', 'operation');
                btn.setAttribute('id', 'btn_subtract');
                btn.textContent = "-";
                target.appendChild(btn);
                break;
            case 0:
                btn = document.createElement('button');
                btn.classList.add('button', 'number');
                btn.setAttribute('id', 'btn_0');
                btn.textContent = "0";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button', 'number');
                btn.setAttribute('id', 'btn_decimal');
                btn.textContent = ".";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button', 'function');
                btn.setAttribute('id', 'btn_equal');
                btn.textContent = "=";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button', 'operation');
                btn.setAttribute('id', 'btn_add');
                btn.textContent = "+";
                target.appendChild(btn);
                break;
        }
    }

    history.textContent = '. . .'
    display.textContent = '0';
}

function generateEvents() {
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            buttonFunction(btn);           
        });
    });
}

function buttonFunction(btn) {
    if(btn.classList.contains('number'))
    {
        let value = btn.textContent;
        if(display.textContent.includes('.') && value.includes('.'))
            console.log('decimal');
        else if(output == '')
            updateDisplay('append', value);
        else
        {
            output = '';
            history.textContent = '. . .';
            updateDisplay('set', value);
        }
    }
    else if(btn.classList.contains('operation'))
    {
        firstOperand = parseFloat(display.textContent);
        operation = btn.id.slice(4);
        history.textContent = firstOperand + ' ' + btn.textContent;
        updateDisplay('clear');
    }
    else if(btn.id == 'btn_equal')
    {
        if(firstOperand != '')
        {
            secondOperand = parseFloat(display.textContent);
            history.textContent += ' ' + secondOperand.toString();
            output = operate(operation, firstOperand, secondOperand);
            updateDisplay('set', output); 
            firstOperand = '';
            secondOperand = '';
        }
    }
    else if(btn.id == 'btn_backspace')
    {
        if(output = '')
            updateDisplay('backspace');
    }
    else if(btn.id == 'btn_ac')
    {
        updateDisplay('allclear');
    }
    else if(btn.id == 'btn_c')
    {
        updateDisplay('clear');
    }
}

function updateDisplay(func, value=0) {
    let valueStr = value.toString();
    if(func === 'allclear')
    {
        display.textContent = valueStr;
        history.textContent = '. . .';
        firstOperand = '';
        secondOperand = '';
        operation = '';
    }
    else if(func == 'clear')
    {
        if(output == '')
            display.textContent = valueStr;
        else
        {
            updateDisplay('allclear');
        }
    }
    else if(func == 'backspace')
    {
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    }
    else if(func == 'set')
    {
        display.textContent = valueStr;
    }
    else if(func == 'append')
    {
        if(display.textContent.length == 8)
            display.textContent = display.textContent;
        else if(display.textContent == '0')
            display.textContent = valueStr;
        else
            display.textContent += valueStr;
    }
}

const display = document.getElementById('display');
const history = document.getElementById('history');
generateUI();
const buttons = document.querySelectorAll('button');

let firstOperand = '';
let secondOperand = '';
let operation = ''; 
let output = '';
generateEvents();