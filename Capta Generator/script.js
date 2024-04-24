let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

let status = document.getElementById('status');
let previousColor; 

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
    status.style.color = '#654fe0'; 
}



function check() {
    const correctGif = document.getElementById('correct-gif');
    const wrongGif = document.getElementById('wrong-gif');


    let userValue = document.getElementById('entered-captcha').value;

    if (userValue === captcha) {
        status.innerText = "Correct!";
        status.style.color = 'green';
        correct.play();
        correctGif.style.display = 'inline'; 
        setTimeout(() => {
            generate();
            correctGif.style.display = 'none'; 
        }, 2000);  
    } else {
        previousColor = status.style.color;
        status.innerText = "Incorect captcha ";
        status.style.color = 'red';
        wrong.play();
        wrongGif.style.display = 'inline';
        setTimeout(() => {
            generate();
            wrongGif.style.display = 'none'; 
        }, 2000); 
    }
}

const entered = document.getElementById('entered-captcha');
entered.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        check();
    }
});


/////////////////////////////////////////////////////////

// const btn1 = document.getElementById('btn1');
// const correct = document.getElementById('correct');

// btn1.addEventListener('click', ()=>{
//     correct.play();
// })

// const btn2 = document.getElementById('btn1');
// const wrong = document.getElementById('wrong');

// btn2.addEventListener('click', ()=>{
//     correct.play();
// })


