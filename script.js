//navpar -in -out
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

//login form - validim
function validateloginform(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
console.log("ss");
    if(username.value == "" || password.value ==  ""){
        alert("Username or Password are empty");
        return false;        
    }else if(password.value.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
    }

}