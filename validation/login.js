const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateLoginInput(data) {
    let errors = {};
    
    
    data.email = !isEmpty(data.email) ? data.email : ''; // Means if the data is not empty then it wil show the data but if it is empty it will show an empty string and will be tested here
     data.password = !isEmpty(data.password) ? data.password : ''; 
      
        
    
   
    

   if(Validator.isEmpty(data.email)) {
      errors.email = 'Email field is required';
  }
  
   if(!Validator.isEmail(data.email)) {
      errors.email = 'Email is invalid';
  }
  
   if(Validator.isEmpty(data.password)) {
      errors.password = 'Password field is required';
  }
  
 
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
}