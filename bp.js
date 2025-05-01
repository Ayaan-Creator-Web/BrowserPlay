function crash() {
    while (true) {}
}
window.resizeTo(300, 300);
const user = JSON.parse(localStorage.getItem('savedUser')) ? JSON.parse(localStorage.getItem('savedUser')) : null;

//copyToClipboard('hi');
if (!JSON.parse(localStorage.getItem('savedUser'))) {
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
        header.innerText = `Welcome back to BrowserPlay, ${user.username}!`;
    }
    else if (visits == 1) {
        header.innerText = `Welcome to BrowserPlay, ${user.username}!`;
    }

   /* if (header.innerText = 'You are not logged in') {
        document.body.innerHTML = '<h1 style="color: red;">You are not logged in. Please log in to access this page.</h1>';
    }*/
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

function hide() {
    const div = document.getElementById('container');
    div.classList.add('hidden');
}

function crashComputer() {
    if (confirm('Are you sure you want to crash your computer?')) {
        alert('Make sure you have allowed popups for this site.');
        while (true) {
            window.open('about:blank' ,'_blank');
        }
    }
    else {
        alert('Cancelled crashing your computer.');
    }
}

function disableAll() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });/*
    const disable  = document.querySelector('#disableEnable');
    disable.disabled = false;
    disable.innerHTML = '<button class="button" style="background-color: rgb(30, 163, 108);" id="disableEnable" onclick="enableAll()">Click to Enable All Buttons!</button>';*/
}

function enableAll() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.disabled = false;
    });
    const disable  = document.querySelector('#disableEnable');
    disable.innerHTML = '<button class="button" style="background-color: rgb(30, 163, 108);" id="disableEnable" onclick="disableAll()">Click to Disable All Buttons!</button>';
}

function alertSpam() {
    alert('This is an alert spam!');
    alert("You weren't expecting this!");
    alert("You thought this was important?!");
    alert("This is a test of the alert spam system.");
    alert("This is a test of the alert spam system. Please do not be alarmed.");
    alert("Achievement unlocked: Wasted 0.6 seconds!");
    alert("Press OK to continue questioning your life choices.");
    alert("You just clicked a random box. Congratulations.")
    alert("You are now a certified random box clicker.");
    alert("Please do not take this seriously.");
    alert("This is a joke.");
    alert("Just like your life choices.");
    alert("Don't trust the next alert!");
    alert("Reality.exe has stopped working.");
    alert("Please restart your computer to continue.");
    alert("Just kidding, don't do that.");
    alert("Why  are you still clicking?");
    alert("This message will self-destruct in... Never!");
    alert("Still here? Wow, you must be bored.!");
    alert("This is the last alert, I promise.");
    alert("Just kidding, there are infinite alerts.");
    alert("Or are there?!");
    alert("Please call 1-800-GET-A-LIFE for assistance.");
    alert("Mission accomplished! No idea what you accomplished, but you did it!");
    alert("You are the chosen one. Chosen to click random boxes.");
    alert("I'm not sure if you clicked, or if clicking clicked you.");
    alert("This is the end of the alert spam. Thank you for your time.");
    alert("Just kidding, there are more alerts.");
    alert("Please wait while we waste your time.");
    alert("Alert overload initiated.");
    alert("Ok, seriously, this is the last one.");
    alert("BYE!");
    alert("Just kidding, I'm still here.");
}

function randomThing() {
    const random = Math.floor(Math.random() * 100) + 1;
    if (random < 10) {
        selfDestruct();
    } else if (random < 20) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else if (random < 30) {
        alertSpam();
    } else if (random < 40) {
        disableAll();
    } else if (random < 50) {
        disableAll
    } else if (random < 60) {
        document.body.innerHTML = '<p>lol</p>';
    } else if (random < 70) {
        alert('This is a test of the alert system. Please do not be alarmed... or alerted.');
    } else if (random < 80) {
        alert('Super secret message!');
    } else if (random < 90) {
        window.location.href = "";
    } else {
        alert('You have been randomly selected for a free trip to nowhere!');
    }
}

function four04() {
    document.body.innerHTML = '<h1 style="color: red;">404 Not Found</h1>';
    document.body.innerHTML += '<p style="color: red;">The page you are looking for does not exist.</p>';
    document.body.innerHTML += '<p style="color: red;">Please check the URL and try again.</p>';
    document.body.innerHTML += '<p style="color: red;">If you are lost, please return to the homepage.</p>';
    document.body.innerHTML += '<p style="color: red;">If you are still lost, please contact support.</p>';
    document.body.innerHTML += '<p style="color: red;">If you are still lost, please try again later.</p>';
    document.body.innerHTML += '<p style="color: red;">If you are still lost, please give up.</p>';
}

function sep() {
    const div = document.querySelector('.button-container');
    div.classList.add('sep');
}
