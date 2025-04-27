var email;

var password;

var username;

var savedusername = '';

const verifypath = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//JSON.parse(localStorage.getItem('users'))

var hi;

let users = [{
    username: 'Ayaan',
    email: 'ayaan.khalique3@gmail.com',
    password: 'sd',
    visits: JSON.parse(localStorage.getItem('visits')) ? JSON.parse(localStorage.getItem('visits')) : 0
}, {
    username: 'Emaan',
    email: 'emaan.khalique@gmail.com',
    password: 'sd',
    visits: JSON.parse(localStorage.getItem('visits')) ? JSON.parse(localStorage.getItem('visits')) : 0
}, {
    username: 'Khalique',
    email: 'khaliquer@gmail.com',
    password: 'Oyster22',
    visits: JSON.parse(localStorage.getItem('visits')) ? JSON.parse(localStorage.getItem('visits')) : 0
}];
/*
[{
    username: 'Ayaan',
    email: 'ayaan@example.com',
    password: 'student123'
}, {
    username: 'Wasiullah',
    email: 'wasiullah@example.com',
    password: 'teacher321'
}]
*/

function signin() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    username = document.getElementById('username').value

    //fetching updated user from local storage
    users = users;
    users.forEach((check) => {
        //console.log(x);
        //debugger;
        if(check.username == username){
            if (email.match(verifypath)) {
                if (check.email == email) {
                    if (check.password == password) {
                        //alert('Welcome ' + check.username + '!')
                        savedusername += localStorage.setItem('savedusername', JSON.stringify(username));
                        const user = users.find(u => u.email === email);
                        localStorage.setItem('savedUser', JSON.stringify(user));
                        //window.location.href = "http://127.0.0.1:5500/Browserplay/bp.html";
                        window.location.href = "https://www.ayaan-creator-web.github.io/BrowserPlay/bp.html";
                        savedusername = '';
                    }
                }
                else {
                    random = Math.random()
                
                    if (random < 0.5) {
                        alert('Please Check Username or Email');
                    }
                    else {
                        alert('Please Check Email or Password');
                    }
                }   
            }
            else {
                alert('Please enter valid email')
            }
        }
        else {
            //alert('Please Check Username or Email');
        }
    });
    //verifyemail(email)
}

function signup(newId) {
    email = document.getElementById('email2').value
    password = document.getElementById('password2').value
    username = document.getElementById('username2').value

    var newId

    if (users.length == 0) {
        newId = 0;
    }
    else {
        newId = users.length
    }

    if (!CheckUserExist(email)) {
        if (email.match(verifypath)) {
            if (username && password) {
                const newuser = {
                username,
                email,
                password,
                id: newId
                }
                users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []
                users.push(newuser);
                alert('Thanks for Signing Up ' + username + '! Please Sign In to Continue')
                localStorage.setItem('users', JSON.stringify(users));

            }
            else {
                alert('Please Fill in Form Completely')
            }
        }
        else {
            alert('Please Input a Valid Email')
        }
    
    }
    else {
        alert('That Email is Already Registered');
    }
}

function CheckUserExist(email) {

    //fetching updated user from local storage
    users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []
    let doesExist = false
    //debugger;
    users.forEach((check) => {
       if (check.email == email) {
        doesExist = true;
       }
    });
    return doesExist;
}


async function forgotPassword() {
    if (localStorage) {
        window.location.href="Forgot-Password.html";
    }
}


//localStorage.clear()
//johndoe@example.com
//teacher321
//student123
//0187009@schoolsnet.act.edu.au

/*
when signed in:
set local storage for login user
redirect to new page
do not allow user to paste url in browser
allow hompage to only allow users
localStorage.setItem('xyz', 'login successfully');
say welcome username in alert message
*/
