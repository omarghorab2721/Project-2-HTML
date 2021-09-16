let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let noTasks = document.getElementById('noTasks');
let allTasks = document.getElementById('allTasks');
let invalid = document.getElementById('invalid');
let closeBtn = document.querySelector('.close');
let body = document.querySelector('body');
let card = document.querySelectorAll('.card');

let addTask = () => {
    let taskData = taskInput.value;
    if (taskData.trim() == "" || taskInput.value.lenght < 4 || taskInput.value.lenght > 15) {
        invalid.classList.remove('none');
    } else {
        noTasks.classList.add('none');
        allTasks.innerHTML += `<div class="alert alert-info">
        ${taskData}
        <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true" class="delete">&times;</span>
                      </button>
        </div>`
        taskInput.value = "";
    }

}

let close = () => {
    invalid.classList.add('none');
}

addTaskBtn.addEventListener('click', addTask);
closeBtn.addEventListener('click', close);

document.addEventListener('click', function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        if(allTasks.childElementCount == 0){
            noTasks.classList.remove('none');
        }
    }
});

document.addEventListener('click' , function(e){
    if(e.target.classList.contains('alert-info')){
        e.target.classList.toggle('checked')
    }
})

document.addEventListener('click' ,function(e){
    if(e.target.classList.contains('icon')){
        body.classList.toggle('darkMode');
        card[0].classList.toggle('darkModeCard');
        card[1].classList.toggle('darkModeCard');
    }
})