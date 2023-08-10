

let users = [];

if (localStorage.getItem("usersList") != null)
{
    users = JSON.parse(localStorage.getItem("usersList"));
}
let inEmail = document.getElementById('signinEmail');
let inPassword = document.getElementById('signinPass');
let inMass = document.getElementById('signinMassage');

// console.log(hText.innerText);

document.getElementById('login').addEventListener('click',function(e) {
    if (users.length === 0) {
        inMass.innerHTML = 'No users found. Please sign up.';
        return;
      }
    for (let i = 0; i < users.length; i++)
    {
        if (users[i].userEmail == inEmail.value)
        {
            if (users[i].userPassword == inPassword.value)
            {
                // window.open('hello.html');
                // document.getElementById('helloText').innerHTML = `hello ${users[i].uName}`;
                inMass.innerHTML = '';
                window.location.href = `hello.html?username=${users[i].userName}`;
                // console.log(`hello ${users[i].userName}`);
            }
        }
        else
        {
            inMass.innerHTML = 'incorrect email or password';
        }
    }
});

console.log(users);


