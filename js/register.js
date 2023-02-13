// Step-1 ----> Add event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2-->get the email address inside the email input field 
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
// step-3-->get the password inside the password input field 
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;

    const confirmPasswordField=document.getElementById('user-password-confirm');
    const confirmPassword=confirmPasswordField.value;
   
    //  Danger!! DO Not verify the user email and password in client side 
    // Step-4--> Verify the email and password for valid user 

    if(email=='hridoy@gmail.com' && password=='hridoy' && confirmPassword=='hridoy'){
        window.location.href='index.html';
    }
    else{
        alert('Invalid User');
    }
})
