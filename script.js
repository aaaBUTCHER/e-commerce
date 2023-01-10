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

    if(username.value == "" ){
        alert("Username is empty");
        return false;        
    }else if(username.value.trim()==""){
        alert("Username eshte i zbrazet");
        return false;
    }else if(password.value == ""){  
        alert("Password is empty.");  
        return false;  
    }else if(password.value.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;  
    }

}

//sign in - validimi
function validatesigninform(){
    let username1 = document.getElementById('username1');
    let email1 = document.getElementById('email1');
    let password1a = document.getElementById('password1a');
    let password1b = document.getElementById('password1b');

    if(username1.value == "" ){
        alert("Username is empty!");
        return false;        
    }else if(username1.value.trim()==""){
        alert("Username eshte i zbrazet");
        return false;
    }else if(!email1.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        alert("Ju lutem shenoni emailin mir !");  
        return false;
    }else if(password1a.value.length<6){  
        alert("Passwordi duhet te ket se paku 6 karaktere!");  
        return false;  
    }else if( !(password1a.value === password1b.value) ){
        alert("Password kuk jan te njejt")
        return false;
    }
//per buton -- input type submit
}

//contactUs - validimi

function validatecontactform(){
    let username2 = document.getElementById('username2');
    let email2 = document.getElementById('email2');
    let subject2 = document.getElementById('subject2');
    let text2 = document.getElementById('text2');


    if(username2.value == "" ){
        alert("Username is empty!");
        return false;        
    }else if(username2.value.trim()==""){
        alert("Username eshte i zbrazet");
        return false;
    }else if(!email2.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        alert("Ju lutem shenoni emailin mir !");  
        return false;
    }else if(subject2.value ==""){  
        alert("Subject nuk eshte caktuar");  
        return false;  
    }else if(!subject2.value.match(/^[A-Za-z0-9_.]*$/)){
        alert("Subject duhet te permbaj karaktere vetem (Shktonja), ( _ ) ose (.)  !")
        return false;
    }else if(text2.value ==""){
        alert("Text box eshte i zbrazet!")
        return false;
    }

}

