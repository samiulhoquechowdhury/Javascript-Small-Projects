let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

let status = document.getElementById('status');
let previousColor; // Store previous color

status.innerText = "Captcha Generator";

function generate(){
    let first = alphabets[Math.floor(Math.random() * alphabets.length)]
    let second = Math.floor(Math.random() * 10)
    let third = Math.floor(Math.random() * 10)
    let forth = alphabets[Math.floor(Math.random() * alphabets.length)]
    let fifth = alphabets[Math.floor(Math.random() * alphabets.length)]
    let sixth = Math.floor(Math.random() * 10)

    captcha = first.toString() + second.toString() + third.toString() + forth.toString() + fifth.toString() + sixth.toString()

    document.getElementById('generated-captcha').value = captcha;
    document.getElementById('entered-captcha').value = '';
    status.innerText = "Captcha Generator";
    status.style.color = previousColor; // Restore previous color
}

function check() {
    let userValue = document.getElementById('entered-captcha').value;

    if (userValue === captcha) {
        status.innerText = "Correct!";
        status.style.color = 'green';
    } else {
        previousColor = status.style.color;
        status.innerText = "Try Again!!";
        status.style.color = 'red';
        setTimeout(generate, 2000); 
    }
}

const entered = document.getElementById('entered-captcha');
entered.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        check();
    }
});
