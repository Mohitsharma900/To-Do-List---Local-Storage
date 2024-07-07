/**
 * Initialize
 */

let task_Value = document.querySelector('.input-text');
let add = document.querySelector(".material-icons")
let ul = document.querySelector(".tasks_pending ul")
let delete_li = document.createElement('img');

/**
 * functionalities
 */

add.addEventListener('click', () => {
    let value = task_Value.value;
    let li = document.createElement('li');

    if (value.trim() === "") return;
    
    let delete_li = document.createElement('img');
    delete_li.src = "Assets/Images/trash-solid.svg";
    delete_li.classList.add('delete-icon');

    delete_li.addEventListener('click', (event)=>{
        let Parent = event.target.parentElement
        Parent.remove()
    })

    li.innerHTML = value;
    li.appendChild(delete_li);
    ul.appendChild(li);
    
    console.log(value);
    task_Value.value = "";
});

delete_li.addEventListener('click', (event)=>{
    let Parent = event.target.parentElement
    Parent.remove()
})
    


task_Value.addEventListener('keypress',(event)=> {
    if (event.keyCode === 13) {
        add.click()
    }
})
