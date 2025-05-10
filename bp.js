var typed = false;

var confusing = false;

var dontClicks = 0;

const html = ` 
            <div id="container">
            <h1 id="text"></h1>
            <div class="button-container">
                <button class="button" style="background-color: red;" id="crash" onclick="crash();">Click to Crash the Browser</button>
                <button class="button" style="background-color: green;" id="alert" onclick="alert('Hello!');">Click to Alert</button> 
                <button class="button" style="background-color: blue;" id="close" onclick="closeWindow();">Click to Close the Browser</button>
                <button class="button" style="background-color: orange;" id="new" onclick="window.open('' ,'_blank');">Click to Open a New Tab</button>
                <button class="button" style="background-color: rgb(206, 1, 206);" id="selfDestruct" onclick="selfDestruct()">Click to Self Destruct the Browser</button>
                <button class="button" style="background-color: rgb(113, 0, 0);" id="hide" onclick="dont()">Do Not Click!</button>
                <button class="button" style="background-color: rgb(134, 99, 230);" id="shakeBtn" onclick="shakeButton();">Click to Shake Me</button>
                <button class="button" style="background-color: rgb(99, 230, 178);" id="him" onclick="shakeButton();">Click to Shake Him</button>
                <button class="button" style="background-color: rgb(129, 230, 99);" id="refresh" onclick="window.location.href='';">Click to Refresh the Page</button>
                <button class="button" style="background-color: rgb(255, 0, 0);" id="crashComputer" onclick="crashComputer()">Click to Crash your Computer</button>
                <button class="button" style="background-color: rgb(30, 163, 108);" id="disableEnable" onclick="disableAll()">Click to Disable All Buttons</button>
                <button class="button" style="background-color: green;" id="alertSpam" onclick="alertSpam()">Click to Alert Spam</button>
                <button class="button" style="background-color: rgb(58, 123, 126);" id="randomThing" onclick="randomThing()">Click to Do Something Random</button>
                <button class="button" style="background-color: rgb(225, 0, 255);" id="click">Click to do nothing</button>
                <button class="button" style="background-color: rgb(58, 123, 126);" id="404" onclick="four04()">Click to Break</button>
                <button class="button" style="background-color: rgb(24, 236, 248);" id="quiz" onclick="quiz()">Click to do a Quiz</button>
                <button class="button" style="background-color: rgb(97, 158, 0);" id="confuse" onclick="alert('This is an experimental feature. To use this, please contact ayaan.khalique3@gmail.com to access BrowserPlay Experimental Edition')">Click to Confuse Yourself</button>
            </div>
            </div>
            <button class="button" style="background-color: rgb(149, 57, 255);" id="safe" onclick="switchMode()">Click to Enter Safe Mode</button>
            <script src="bp.js"></script>
        `

const safeHtml = `
            <div id="container">
            <h1 id="text"></h1>
            <div class="button-container">
                <button class="button" style="background-color: green;" id="alert" onclick="alert('Hello!');">Click to Alert</button> 
                <button class="button" style="background-color: orange;" id="new" onclick="window.open('' ,'_blank');">Click to Open a New Tab</button>
                <button class="button" style="background-color: rgb(134, 99, 230);" id="shakeBtn" onclick="shakeButton();">Click to Shake Me</button>
                <button class="button" style="background-color: rgb(99, 230, 178);" id="him" onclick="shakeButton();">Click to Shake Him</button>
                <button class="button" style="background-color: rgb(129, 230, 99);" id="refresh" onclick="window.location.href='';">Click to Refresh the Page</button>
                <button class="button" style="background-color: rgb(225, 0, 255);" id="click">Click to do nothing</button>
                <button class="button" style="background-color: rgb(24, 236, 248);" id="quiz" onclick="quiz()">Click to do a Quiz</button>
            </div>
            </div>
            <button class="button" style="background-color: rgb(149, 57, 255);" id="danger" onclick="switchMode()">Click to Exit Safe Mode</button>
            <script src="bp.js"></script>
            `

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
else {
        //HTML
        document.body.innerHTML = html;
}

async function type(message) {
    if (typed == false) {
        typed = true;
        const header = document.querySelector('#text');
        header.innerHTML = '';
        const text = document.querySelector('#text');
        for (let i = 0; i < message.length; i++) {
            text.innerHTML += message.charAt(i);
            await delay(50);
        }
    } else {
        const header = document.querySelector('#text');
        header.innerHTML = `Welcome back to BrowserPlay, ${user.username}!`;
    }
}

var visits = localStorage.getItem('visits') ? JSON.parse(localStorage.getItem('visits')) : 0;
visits += 1;
localStorage.setItem('visits', JSON.stringify(visits));

function header() {
    const header = document.querySelector('#text');
    if (visits > 1) {
        type(`Welcome back to BrowserPlay, ${user.username}!`);
    }
    else if (visits == 1) {
        type(`Welcome to BrowserPlay, ${user.username}!`);
    }

   /* if (header.innerText = 'You are not logged in') {
        document.body.innerHTML = '<h1 style="color: red;">You are not logged in. Please log in to access this page.</h1>';
    }*/
}

header();

function confuse() {
    if (confusing == false) {
        confusing = true;
        //const header = document.querySelector('#text');
        document.body.innerHTML = confusingHtml;
        header();
    } else {
        confusing = false;
        //const header = document.querySelector('#text');
        document.body.innerHTML = html;
        header();
    }
}

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

async function dont() {
    dontClicks += 1;

    if (dontClicks == 1) {
        document.body.innerHTML = '<h1 style="color: red;">You have been warned.</h1>';
        await delay(1000);
        document.body.innerHTML = '<h1 style="color: red;">We are going to warn you again.</h1>';
        await delay(1000);
        document.body.innerHTML = '<h1 style="color: red;">Do NOT Click the Button!</h1>';
        await delay(1000);
        document.body.innerHTML = '<h1 style="color: red;">Or else...</h1>';
        await delay(2000);
        document.body.innerHTML = html;
        header();
    } else {
        document.body.innerHTML = `<h1 style="color: red;">WE TOLD YOU NOT TO CLICK THE BUTTON!</h1>`;
        await delay(1000);
        document.body.innerHTML = `<h1 style="color: red;">YOU CLICKED IT ${dontClicks} TIMES!</h1>`;
        await delay(1000);
        document.body.innerHTML = '<h1 style="color: red;">HOW COULD YOU!</h1>';
        await delay(1000);
        document.body.innerHTML = '<h1 style="color: red;">ALERT! SHUTTING DOWN BROWSER!</h1>';
        await delay(1000);
        document.body.innerHTML = '<h1 style="color: red;">SHUTTING DOWN IN 3!</h1>';
        await delay(1000);
        document.body.innerHTML = '<h1 style="color: red;">SHUTTING DOWN IN 2!</h1>';
        await delay(1000);
        document.body.innerHTML = '<h1 style="color: red;">SHUTTING DOWN IN 1!</h1>';
        await delay(1000);
        document.body.innerHTML = '<h1 style="color: red;">SHUTTING DOWN NOW!</h1>';
        await delay(1000);
        document.body.innerHTML = html;
        header();
    }
}

function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function quiz() {
    if (confirm('Are you sure you want to take the quiz?')) {
        let answer = prompt('Who made BrowserPlay? Firstname only.');
        if (answer.toLowerCase() == 'ayaan') {
                answer = prompt('Correct! Is the full version of BrowserPlay free? (yes/no)');
                if (answer.toLowerCase() == 'no') {
                    answer = prompt('Correct again! Is BrowserPlay fun? (yes/no)');
                        if (answer.toLowerCase() == 'yes') {
                            answer = prompt("Brilliant! Is BrowserPlay's developer smart? (yes/no)");
                            if (answer.toLowerCase() == 'yes') {
                                alert('You are correct! You are now a BrowserPlay expert!');   
                            }
                            else {
                                fail();
                            }
                        }
                        else {
                            fail();
                        }
                }
                else {
                    fail();
                }
        }
        else {
            fail();
        }
    }
}

function fail() {
    alert('Incorrect! You have failed the quiz!');
    alert('You are now banned from BrowserPlay!');
    alert('Just kidding, you are not banned.');
    alert('But you should really know this.');
    alert('Please try again later.');
}


async function zoom() {
    document.body.style.zoom = parseFloat(document.body.style.zoom) + 0.2;
    await delay(1000);
    document.body.style.zoom = parseFloat(document.body.style.zoom) - 0.2;
}

function zoomIn() {
    document.body.style.zoom = parseFloat(document.body.style.zoom) + 0.2;
}
  
function zoomOut() {
    document.body.style.zoom = parseFloat(document.body.style.zoom) - 0.2;
}

function resetZoom() {
    document.body.style.zoom = 1;
}

async function switchMode() {
    if (document.body.innerHTML.includes('selfDestruct')) {
        document.body.innerHTML = safeHtml;
        header();
    } else {
        document.body.innerHTML = html;
        header();
    }
}
