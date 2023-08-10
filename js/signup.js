
// let users = [{uName: 'esmael-ahmed', uEmail: 'esmaelahmed045@gmail.com', uPassword: '2991995@Login'}];
let users = [];

if (localStorage.getItem("usersList") != null)
{
    users = JSON.parse(localStorage.getItem("usersList"));
}


let upName = document.getElementById('signupName');
let upEmail = document.getElementById('signupEmail');
let upPassword = document.getElementById('signupPass');
let upMass = document.getElementById('signupMassage'); 


document.getElementById("signup").addEventListener('click', function(e) {
for (let i = 0; i <users.length; i++) {
    if (users[i].userEmail.toLowerCase() == upEmail.value.toLowerCase())
    {
        upMass.innerHTML = "the email is already registered";
        return;
    }
}

let user = {userName: upName.value, userEmail: upEmail.value, userPassword: upPassword.value}
users.push(user);
localStorage.setItem("usersList", JSON.stringify(users));
upMass.classList.replace('text-danger', 'text-success');
upMass.innerHTML = "Successfully registered";
setTimeout(function () {
    window.location.href = `index.html`;
}, 2000);

});

console.log(users);