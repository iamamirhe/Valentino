const alternatives = [
    {text:"", images:"./assets/images/image1.gif"},
    {text:".قول می‌دم خوب باشه ها", images:"./assets/images/image2.gif"},
    {text:"نمی‌شه یه بار دیگه فکر کنی؟", images:"./assets/images/image3.gif"},
    {text:"...یه فرصت", images:"./assets/images/image4.gif"},
    {text:"توروخدا :((", images:"./assets/images/image5.gif"},
];

const ohyes = {text:"!می‌دونستم قبول می‌کنـــی", images:"./assets/images/yes.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;

    if (item === ohyes) {
        setTimeout(() => {
            window.location.href = "index.html"; // Change this to your actual page
        }, 2000); // 2000 milliseconds = 2 seconds
    }
}


errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'YES'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});