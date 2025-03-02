

const date = Date();
// console.log(date);
const slicedDay = date.slice(0, 3);
const slicedDate = date.slice(4, 15);
const todayDate = document.getElementById('date');
todayDate.innerHTML = `
    <p class="text-xl">${slicedDay},<br><span class="font-bold"> ${slicedDate}</span></p>
`


// random background color
document.getElementById('theme').addEventListener('click', function () {
    let color = ['bg-red-300', 'bg-yellow-200', 'bg-green-200', 'bg-pink-300', 'bg-aqua-400', 'bg-violet-200', 'bg-teal-300'];
    let i = Math.floor(Math.random() * color.length);
    let r = color[i];
    // console.log(r);
    const themeBody = document.getElementById('body');
    themeBody.classList = r;
})









// fix mobile btn
document.getElementById('mobile-btn').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');

    const task = document.getElementById('task-to-be-assigned').innerText;
    const convertedTask = parseFloat(task);
    // console.log(convertedTask);
    const UpdatedTask = convertedTask - 1;
    document.getElementById('task-to-be-assigned').innerText = '0' + UpdatedTask;


    const assignedTask = document.getElementById('assigned-task').innerText;
    const convertedAssignedTask = parseFloat(assignedTask);
    // console.log(convertedTask);
    const UpdatedAssignedTask = convertedAssignedTask + 1;
    document.getElementById('assigned-task').innerText = UpdatedAssignedTask;



    const container = document.getElementById('activity-status');
    const div = document.createElement('div');
    div.classList.add('bg-gray-100', 'mt-5', 'py-2', 'px-3', 'rounded-lg')

    const mobileTitle = document.getElementById('mobile-title').innerText;
    const date = Date();
    const sliceTime = date.slice(16, 24);

    div.innerHTML = `
    <p>You have completed the task ${mobileTitle} at ${sliceTime}</p>
`
    container.appendChild(div);


    const disable = document.getElementById('mobile-btn');
    disable.disabled = true;
    const del = document.getElementById('mobile-btn');
    del.classList = 'opacity-50 bg-blue-200 px-5 py-2.5 rounded-lg'


    let count = document.getElementById('task-to-be-assigned').innerText;
    let countUpdate = parseInt(count);
    // console.log(countUpdate);


    if (countUpdate === 0) {
        alert('Congrates!!! You have completed all the current task')
    }



})

// dark mode btn
document.getElementById('dark-btn').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');

    const task = document.getElementById('task-to-be-assigned').innerText;
    const convertedTask = parseFloat(task);
    // console.log(convertedTask);
    const UpdatedTask = convertedTask - 1;
    document.getElementById('task-to-be-assigned').innerText = '0' + UpdatedTask;


    const assignedTask = document.getElementById('assigned-task').innerText;
    const convertedAssignedTask = parseFloat(assignedTask);
    // console.log(convertedTask);
    const UpdatedAssignedTask = convertedAssignedTask + 1;
    document.getElementById('assigned-task').innerText = UpdatedAssignedTask;



    const container = document.getElementById('activity-status');
    const div = document.createElement('div');
    div.classList.add('bg-gray-100', 'mt-5', 'py-2', 'px-3', 'rounded-lg')

    const darkTitle = document.getElementById('dark-title').innerText;
    const date = Date();
    const sliceTime = date.slice(16, 24);

    div.innerHTML = `
    <p>You have completed the task ${darkTitle} at ${sliceTime}</p>
`
    container.appendChild(div);


    const disable = document.getElementById('dark-btn');
    disable.disabled = true;
    const del = document.getElementById('dark-btn');
    del.classList = 'opacity-50 bg-blue-200 px-5 py-2.5 rounded-lg'


    let count = document.getElementById('task-to-be-assigned').innerText;
    let countUpdate = parseInt(count);
    // console.log(countUpdate);


    if (countUpdate === 0) {
        alert('Congrates!!! You have completed all the current task')
    }




})

// optimize home page
document.getElementById('homepage-btn').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');

    const task = document.getElementById('task-to-be-assigned').innerText;
    const convertedTask = parseFloat(task);
    // console.log(convertedTask);
    const UpdatedTask = convertedTask - 1;
    document.getElementById('task-to-be-assigned').innerText = '0' + UpdatedTask;


    const assignedTask = document.getElementById('assigned-task').innerText;
    const convertedAssignedTask = parseFloat(assignedTask);
    // console.log(convertedTask);
    const UpdatedAssignedTask = convertedAssignedTask + 1;
    document.getElementById('assigned-task').innerText = UpdatedAssignedTask;



    const container = document.getElementById('activity-status');
    const div = document.createElement('div');
    div.classList.add('bg-gray-100', 'mt-5', 'py-2', 'px-3', 'rounded-lg')

    const homepageTitle = document.getElementById('homepage-title').innerText;
    const date = Date();
    const sliceTime = date.slice(16, 24);

    div.innerHTML = `
    <p>You have completed the task ${homepageTitle} at ${sliceTime}</p>
`
    container.appendChild(div);


    const disable = document.getElementById('homepage-btn');
    disable.disabled = true;
    const del = document.getElementById('homepage-btn');
    del.classList = 'opacity-50 bg-blue-200 px-5 py-2.5 rounded-lg'



    let count = document.getElementById('task-to-be-assigned').innerText;
    let countUpdate = parseInt(count);
    // console.log(countUpdate);


    if (countUpdate === 0) {
        alert('Congrates!!! You have completed all the current task')
    }




})

// emoji btn
document.getElementById('emoji-btn').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');

    const task = document.getElementById('task-to-be-assigned').innerText;
    const convertedTask = parseFloat(task);
    // console.log(convertedTask);
    const UpdatedTask = convertedTask - 1;
    document.getElementById('task-to-be-assigned').innerText = '0' + UpdatedTask;


    const assignedTask = document.getElementById('assigned-task').innerText;
    const convertedAssignedTask = parseFloat(assignedTask);
    // console.log(convertedTask);
    const UpdatedAssignedTask = convertedAssignedTask + 1;
    document.getElementById('assigned-task').innerText = UpdatedAssignedTask;



    const container = document.getElementById('activity-status');
    const div = document.createElement('div');
    div.classList.add('bg-gray-100', 'mt-5', 'py-2', 'px-3', 'rounded-lg')

    const emojiTitle = document.getElementById('emoji-title').innerText;
    const date = Date();
    const sliceTime = date.slice(16, 24);

    div.innerHTML = `
    <p>You have completed the task ${emojiTitle} at ${sliceTime}</p>
`
    container.appendChild(div);


    const disable = document.getElementById('emoji-btn');
    disable.disabled = true;
    const del = document.getElementById('emoji-btn');
    del.classList = 'opacity-50 bg-blue-200 px-5 py-2.5 rounded-lg'



    let count = document.getElementById('task-to-be-assigned').innerText;
    let countUpdate = parseInt(count);
    // console.log(countUpdate);


    if (countUpdate === 0) {
        alert('Congrates!!! You have completed all the current task')
    }



})

// api btn
document.getElementById('api-btn').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');

    const task = document.getElementById('task-to-be-assigned').innerText;
    const convertedTask = parseFloat(task);
    // console.log(convertedTask);
    const UpdatedTask = convertedTask - 1;
    document.getElementById('task-to-be-assigned').innerText = '0' + UpdatedTask;


    const assignedTask = document.getElementById('assigned-task').innerText;
    const convertedAssignedTask = parseFloat(assignedTask);
    // console.log(convertedTask);
    const UpdatedAssignedTask = convertedAssignedTask + 1;
    document.getElementById('assigned-task').innerText = UpdatedAssignedTask;



    const container = document.getElementById('activity-status');
    const div = document.createElement('div');
    div.classList.add('bg-gray-100', 'mt-5', 'py-2', 'px-3', 'rounded-lg')

    const apiTitle = document.getElementById('api-title').innerText;
    const date = Date();
    const sliceTime = date.slice(16, 24);

    div.innerHTML = `
    <p>You have completed the task ${apiTitle} at ${sliceTime}</p>
`
    container.appendChild(div);


    const disable = document.getElementById('api-btn');
    disable.disabled = true;
    const del = document.getElementById('api-btn');
    del.classList = 'opacity-50 bg-blue-200 px-5 py-2.5 rounded-lg'


    let count = document.getElementById('task-to-be-assigned').innerText;
    let countUpdate = parseInt(count);
    // console.log(countUpdate);


    if (countUpdate === 0) {
        alert('Congrates!!! You have completed all the current task')
    }




})

// job button
document.getElementById('job-btn').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');

    // subbed applied task
    const task = document.getElementById('task-to-be-assigned').innerText;
    const convertedTask = parseFloat(task);
    // console.log(convertedTask);
    const UpdatedTask = convertedTask - 1;
    document.getElementById('task-to-be-assigned').innerText = '0' + UpdatedTask;


    // add applied task
    const assignedTask = document.getElementById('assigned-task').innerText;
    const convertedAssignedTask = parseFloat(assignedTask);
    // console.log(convertedTask);
    const UpdatedAssignedTask = convertedAssignedTask + 1;
    document.getElementById('assigned-task').innerText = UpdatedAssignedTask;


    // add new section in activity status
    const container = document.getElementById('activity-status');
    const div = document.createElement('div');
    div.classList.add('bg-gray-100', 'mt-5', 'py-2', 'px-3', 'rounded-lg')

    const jobTitle = document.getElementById('job-title').innerText;
    const date = Date();
    const sliceTime = date.slice(16, 24);

    div.innerHTML = `
    <p>You have completed the task ${jobTitle} at ${sliceTime}</p>
`
    container.appendChild(div);


    // disable button
    const disable = document.getElementById('job-btn');
    disable.disabled = true;
    const del = document.getElementById('job-btn');
    del.classList = 'opacity-50 bg-blue-200 px-5 py-2.5 rounded-lg'


    let count = document.getElementById('task-to-be-assigned').innerText;
    let countUpdate = parseInt(count);
    // console.log(countUpdate);


    if (countUpdate === 0) {
        alert('Congrates!!! You have completed all the current task')
    }


})




// clear activity status
document.getElementById('clear-history-btn').addEventListener('click', function () {
    // const remove = document.getElementById('activity-status-container');
    const child = document.getElementById('activity-status');
    // remove.removeChild(child);
    child.innerHTML = "";
})



// link
const blog = document.getElementById('blog').addEventListener('click', function () {
    window.location.href = "./blog.html"
})


