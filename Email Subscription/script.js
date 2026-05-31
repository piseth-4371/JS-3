const scriptURL = 'https://script.google.com/macros/s/AKfycbxB8EeGWIMMG0zhFmDJRb7OX6zrXwSaqZEblVeuANLBsoDaH6ZTVpv8wj43GYgpyxkt/exec';
const form = document.forms['submnit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json())
    .then(response => {
        msg.innerHTML = "Thank You subscribing!";
        setTimeout(function(){
            msg.innerHTML = " ";
        }, 5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});

// msg.innerHTML = "Thank You subscribing!";
//         setTimeout(function(){
//             msg.innerHTML = " ";
//         }, 5000)
//         form.reset();
// const msg = document.getElementById("msg");


