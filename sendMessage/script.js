/*
Taken from https://youtu.be/Kp3HGwlXwCk?t=3048
But works with pressing enter on input as well
*/

const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMessage);
messageIn.addEventListener('change', sendMessage);

function sendMessage() {
    let content =  messageIn.value;
    if (content === '') {
        alert('Please Enter Valid Value');
    }
    else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}