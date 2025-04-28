function crash() {
    while (true) {}
}

const user = JSON.parse(localStorage.getItem('savedUser')) ? JSON.parse(localStorage.getItem('savedUser')) : null;

if (!user) {
    //window.location.href = "http://127.0.0.1:5500/Sign-In/Sign-In.html";
    document.body.innerHTML = '<h1 style="color: red;">You are not logged in. Please log in to access this page.</h1>';
    //alert('You are not logged in. Please log in to access this page.');
}

var visits = localStorage.getItem('visits') ? JSON.parse(localStorage.getItem('visits')) : 0;
visits += 1;
localStorage.setItem('visits', JSON.stringify(visits));

function header() {
    const header = document.querySelector('#text');
    if (visits > 1) {
        header.innerText = `Welcome back to Browserplay, ${user.username}!`;
    }
    else if (visits == 1) {
        header.innerText = `Welcome to Browserplay, ${user.username}!`;
    }
}

header();

async function closeWindow() {
    window.close();
    await delay(1);
    alert('We are encountering an issue with your browser. Please try again later.');
}

async function selfDestruct() {
    const selfDestructTimer = document.querySelector('#text');
    selfDestructTimer.innerHTML = 'Self-destruct in 5 seconds...';
    await delay(1000);
    selfDestructTimer.innerHTML = 'Self-destruct in 4 seconds...';
    await delay(1000);
    selfDestructTimer.innerHTML = 'Self-destruct in 3 seconds...';
    await delay(1000);
    selfDestructTimer.innerHTML = 'Self-destruct in 2 seconds...';
    await delay(1000);
    selfDestructTimer.innerHTML = 'Self-destruct in 1 seconds...';
    await delay(1000);
    document.body.innerHTML = '';
}

function addToHistory() {
    history.pushState(null, '', 'new-page');
}

//addToHistory();

function delay(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

var users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];

async function checkIfLoggedIn() {
    if (!user) {
        //window.location.href = "http://127.0.0.1:5500/Sign-In/Sign-In.html";
        document.body.innerHTML = '<h1 style="color: red;">You are not logged in. Please log in to access this page.</h1>';
        //alert('You are not logged in. Please log in to access this page.');
    }
}

checkIfLoggedIn();

function shakeButton() {
    let button = document.getElementById("shakeBtn");
    button.classList.add("shake");
    setTimeout(() => button.classList.remove("shake"), 500);
}
