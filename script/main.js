

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
    let color = ['bg-red-300', 'bg-yellow-200', 'bg-green-200', 'bg-pink-300', 'bg-cyan-200', 'bg-violet-200', 'bg-teal-300'];
    let i = Math.floor(Math.random() * color.length);
    let r = color[i];
    console.log(r);
    const themeBody = document.getElementById('body');
    themeBody.classList = r;
})


function minus(id) {
    const task = document.getElementById(id).innerText;
    const convertedTask = parseFloat(task);
    const UpdatedTask = convertedTask - 1;
    document.getElementById(id).innerText = '0' + UpdatedTask;
}

function plus(id) {
    const assignedTask = document.getElementById(id).innerText;
    const convertedAssignedTask = parseFloat(assignedTask);
    const UpdatedAssignedTask = convertedAssignedTask + 1;
    document.getElementById(id).innerText = UpdatedAssignedTask;
}

function activityStatus(activityID, titleID) {
    const container = document.getElementById(activityID);
    const div = document.createElement('div');
    div.classList.add('bg-gray-100', 'mt-5', 'py-2', 'px-3', 'rounded-lg')
    const mobileTitle = document.getElementById(titleID).innerText;
    const date = Date();
    const sliceTime = date.slice(16, 24);
    div.innerHTML = `
    <p>You have completed the task ${mobileTitle} at ${sliceTime}</p>
`
    container.appendChild(div);
}

function disableButton(buttonID) {
    const disable = document.getElementById(buttonID);
    disable.disabled = true;
    const del = document.getElementById(buttonID);
    del.classList = 'opacity-50 bg-blue-200 px-5 py-2.5 rounded-lg'
}

function finalAlert(minusID) {
    let count = document.getElementById(minusID).innerText;
    let countUpdate = parseInt(count);
    if (countUpdate === 0) {
        alert('Congrates!!! You have completed all the current task')
    }
}


document.getElementById('mobile-btn').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    minus('task-to-be-assigned');
    plus('assigned-task');
    activityStatus('activity-status', 'mobile-title');
    disableButton('mobile-btn')
    finalAlert('task-to-be-assigned');
})
document.getElementById('dark-btn').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    minus('task-to-be-assigned');
    plus('assigned-task');
    activityStatus('activity-status', 'dark-title');
    disableButton('dark-btn')
    finalAlert('task-to-be-assigned');
})
document.getElementById('homepage-btn').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    minus('task-to-be-assigned');
    plus('assigned-task');
    activityStatus('activity-status', 'homepage-title');
    disableButton('homepage-btn')
    finalAlert('task-to-be-assigned');
})
document.getElementById('emoji-btn').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    minus('task-to-be-assigned');
    plus('assigned-task');
    activityStatus('activity-status', 'emoji-title');
    disableButton('emoji-btn')
    finalAlert('task-to-be-assigned');
})
document.getElementById('api-btn').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    minus('task-to-be-assigned');
    plus('assigned-task');
    activityStatus('activity-status', 'api-title');
    disableButton('api-btn')
    finalAlert('task-to-be-assigned');
})
document.getElementById('job-btn').addEventListener('click', function (event) {
    alert('Board Updated Successfully');
    minus('task-to-be-assigned');
    plus('assigned-task');
    activityStatus('activity-status', 'job-title');
    disableButton('job-btn')
    finalAlert('task-to-be-assigned');
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