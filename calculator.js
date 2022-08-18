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
    return a / b;
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
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_'+number);
                btn.textContent = number;
                target.appendChild(btn);
            }
        }

        switch(i)
        {
            case 4:
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_ac');
                btn.textContent = "AC";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_c');
                btn.textContent = "C";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_exponent');
                btn.textContent = "^";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_sign');
                btn.textContent = "+/-";
                target.appendChild(btn);
                break;
            case 3:
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_divide');
                btn.textContent = "%";
                target.appendChild(btn);
                break;
                
            case 2:
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_multiply');
                btn.textContent = "x";
                target.appendChild(btn);
                break;
            case 1:
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_subtract');
                btn.textContent = "-";
                target.appendChild(btn);
                break;
            case 0:
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_0');
                btn.textContent = "0";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_decimal');
                btn.textContent = ".";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_equal');
                btn.textContent = "=";
                target.appendChild(btn);
                btn = document.createElement('button');
                btn.classList.add('button');
                btn.setAttribute('id', 'btn_add');
                btn.textContent = "+";
                target.appendChild(btn);
                break;
        }
    }

}

generateUI();