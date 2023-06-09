
    function validateEmail(mail) {
        if (!/\S+@\S+\.\S+/.test(mail)) {
          document.getElementById("errormail").innerHTML="Please enter a valid email address.";
          return false;
        }
        return true;
      }
      
      function validatePassword(password) {
        if (password.length < 8) {
          document.getElementById("errorpassword").innerHTML="Password must be at least 8 characters long.";
          return false;
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
          document.getElementById("errorpassword").innerHTML="Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
          return false;
        }
        return true;
      }
      
      function validateConfirmPassword(password, cpassword) {
        if (password !== cpassword) {
          document.getElementById("pwcErr").innerHTML="Passwords do not match.";
          return false;
        }
        return true;
      }
      
      
      function validate(form) {
        // Get form values
        let mail = form.mail.value.trim();
        let password = form.password.value;
        let cpassword = form.cpassword.value;
        
        
        let fail = false;
        
        // Validate Email
        if (validateEmail(mail)===false) {
          fail = true;
        }
        
        // Validate Password
        if (validatePassword(password)===false) {
          fail = true;
        }
        
        // Validate Confirm Password
        if (validateConfirmPassword(password, cpassword)===false) {
          fail = true;
        }
        
        // Validate Age
        if (fail===true) {
          return false;
        } else {
          return true;
        }
      }

function validatesubmit(form){

// const form = document.getElementById('signup');

// Add a submit event listener to the form
if(validate(form)===false){
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  

});
return false;
}
return true;
      }

     /* function updateFormAction(form) {
        const form = document.getElementById('signup');
        // Add a submit event listener to the form
if(validate(form)===false){
  form.action = '/sign';
  return false;
  }
  else{
    form.action = '/signupform';
  return true;
  }
       
      }*/