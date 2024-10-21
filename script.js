'use stict'
const btn =document.querySelector('button');
const nameInp=document.querySelector('#name');
const emailInp=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#user');
  const myForm=document.querySelector('#form')

let valid=true;

/*myForm.addEventListener('submit',(e) =>{

    e.preventDefault()

    if(nameInp.value ==='' || emailInp.value ===''){
        msg.classList.add('error')
        msg.innerHTML='pls fill details'

        setTimeout(() => msg.remove(),3000);
    }else{
        const li =document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInp.value}: ${emailInp.value}`));

        userList.appendChild(li)

        // clear details
        nameInp.value='';
        emailInp.value=''
    }
})*/

myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(nameInp.value ==='' || emailInp.value === ''){
        msg.classList.add('error')
        msg.textContent='Data Required'

        setTimeout(() => msg.remove(),3000)
    }else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInp.value}:${emailInp.value}`))
        userList.appendChild(li);

        nameInp.value ='';
        emailInp.value ='';
    }
})