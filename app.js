document.querySelector('.add-button').addEventListener('click', newElement);

function newElement() {
    let input = document.querySelector('.my-input');
    let inputValue = input.value.trim();

    if(inputValue === ""){
        alert("Your input is empty. Please write something!");
        return;
    }

let box = document.createElement('div');
box.className = 'box';

let ul = document.createElement('ul');
let li = document.createElement('li');
let label = document.createElement('label');
let checkbox = document.createElement('input');
checkbox.type = 'checkbox';

let span = document.createElement('span');
span.textContent = inputValue;

label.appendChild(checkbox);
label.appendChild(span);
li.appendChild(label);
ul.appendChild(li);
box.appendChild(ul);

let buttonsDiv = document.createElement('div');
buttonsDiv.className = 'buttons';

let completeBtn = document.createElement('button');
completeBtn.textContent = 'Complete';
completeBtn.className = 'complete btn-cmn';
completeBtn.addEventListener('click' , function () {
    span.classList.add('green-text');
});

let deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.className = 'delete btn-cmn';
deleteBtn.addEventListener('click' , function(){;
    box.remove();
    lineSection.remove();
});

buttonsDiv.appendChild(completeBtn);
buttonsDiv.appendChild(deleteBtn);
box.appendChild(buttonsDiv);

let lineSection = document.createElement('div');
lineSection.className = 'line-section';
let line = document.createElement('div');
line.className = 'line';
lineSection.appendChild(line);

document.querySelector('.bottom-section').appendChild(box);
document.querySelector('.bottom-section').appendChild(lineSection);

input.value="";

}