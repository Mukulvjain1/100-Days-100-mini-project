let eyeicon=document.getElementById('icon');
let passwordfield=document.getElementById('password');

eyeicon.addEventListener('click',()=>{
    if(passwordfield.type=="password"){
        passwordfield.type="text";
       eyeicon.src="eye-open.svg"

    }
    else{
        passwordfield.type="password";
       eyeicon.src="eye-close.svg"
    }
});


let signup=document.getElementById('signupbtn')
let login=document.getElementById('Loginbtn')
let signupPage=document.getElementById('signupPage')
let LoginPage=document.getElementById('loginPage')


signup.addEventListener("click",()=>{
    LoginPage.style.display="none";
    signupPage.style.display="flex";
})
login.addEventListener('click',()=>{
    signupPage.style.display="none";
    LoginPage.style.display="flex";
})