const input = document.getElementById('input-container');
const addbtn = document.querySelector('.ADD');
const list = document.querySelector('.list-container');
const option = document.getElementsByTagName('li');


addbtn.addEventListener('click', ()=> {
    if(input.value === "") {
        alert("Write Something !");
    } else {
        const ele = document.createElement('li');
        ele.innerHTML = input.value;
        list.appendChild(ele);
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        ele.appendChild(span);
        input.value = "";
    }
})

list.addEventListener('click' , (e)=> {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
})



