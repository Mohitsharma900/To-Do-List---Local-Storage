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
    let task_text = document.createElement('span');
    task_text.textContent = value;
    li.appendChild(task_text)
    // let li_tick = document.createElement('li')
    // let li_del = document.createElement('li')
    if (value.trim() === "") return;

    let tick = document.createElement('img');
    tick.src = "Assets/Images/check-solid.svg"
    tick.classList.add('tick_icon')

    tick.addEventListener('click', (event)=>{
        let parent=  event.target.parentElement;
        parent.parentElement.remove();
        let task_completed_ul = document.querySelector('.task-completed-ul');
        let Li = document.createElement('li');
        Li = parent.parentElement;
        ul_li.removeChild(tick)
        task_completed_ul.appendChild(Li)
    })

    let delete_li = document.createElement('img');
    delete_li.src = "Assets/Images/trash-solid.svg";
    delete_li.classList.add('delete-icon');

    delete_li.addEventListener('click', (event)=>{
        let Parent = event.target.parentElement
        Parent.parentElement.remove()
    })

    

    let ul_li= document.createElement('ul');
    ul_li.appendChild(tick);
    ul_li.appendChild(delete_li);
    li.appendChild(ul_li)
    ul_li.classList.add('ul-li')


    // li.innerText = value;
    // li.appendChild(tick)
    // li.appendChild(delete_li);
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
