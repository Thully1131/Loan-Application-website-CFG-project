export const validateFirstname = (Firstname) =>{
    const firstName = Firstname.trim();
    if(!firstName){
        return "This field is required.";
    }
    return "";
}
export const validateLastname = (Lastname) =>{
    const lastName = Lastname.trim();
    if(!lastName){
        return "This field is required.";
    }
    return "";
}
export const validateMobileNumber = (mobileNumber) =>{
    const MobileNumber =mobileNumber.trim();
    const  mobileRegEx = /[0-9]/
    if(!MobileNumber){
        return "This field is required.";
    }else if (!new RegExp(mobileRegEx).test(mobileNumber)){
        return "Should only consist of numerical values"
 }
    return "";
}


export const validateUsername= (username)=>{
    const isBetween =(length,min,max) =>
    length < min || length > max ? false : true;
 const min = 4;
 const max= 20;
 const userName = username.trim();

 if(!userName){
    return "Username is required";
 }else if(!isBetween(userName.length,min,max)){
    return `Username must be between ${min} and ${max} characters.`;
 }else if(!new RegExp(/^[a-zA-Z0-9._]*$/).test(userName)){
return "Username can only contain [a-z],[A-Z],[0-9],[.]";
 }
 return "";
};

export const  validateEmail = (email)=>{
    const Email=email.trim();
    const emailRegEx= ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if(!Email){
        return "Email is required"
    }else if (!new RegExp(emailRegEx).test(Email)){
        return "incorrect email format"
    }
    return "";
};

export const validatePassword=(password)=>{
  const Password  = password.trim();
  const  passRegEx = {
    numCheck:/[0-9]/,
    capsCheck:/[A-Z]/,
    specialCharCheck:/[!@#$%^&*]/,
    lengthCheck: 8,
  };

  if(!Password){
    return "Password is required"
  }else if(!new RegExp(passRegEx.numCheck).test(Password)){
    return "Password must contain at least 1 Number value.";
  } else if(!new RegExp(passRegEx.capsCheck).test(Password)){
    return "Password must contain at least 1 Caps letter.";
  }else if (!new RegExp(passRegEx.specialCharCheck).test(Password)){
    return "Password must contain at least 1 special character.";
  }else if(Password.length<passRegEx.lengthCheck){
    return "Password must have a min of 8 characters";
  }
  return "";
};

export const validateConfirmPassword = (confirmPassword,password) => {
    const ConfirmPassword = confirmPassword.trim();
    if(!ConfirmPassword){
        return "Confirm Password is required.";
    }else if (ConfirmPassword != password){
        return "password do not match";
    }
    return "";
}

export const validateAge = (age) =>{
    const Age = age.trim();
    const ageRegEX = /[0-9]/
    if(!Age){
        return "This field is required.";
    } else if (!new RegExp(ageRegEX).test(age)){
        return "Should only consist of numerical values"
    }
    return "";
}

export const validateGender = (gender) =>{
    const Gender = gender.trim();
    if(!Gender){
        return "This field is required.";
    }
    return "";
}

export const validateNationality = (nationality) =>{
    const Nationality = nationality.trim();
    if(!Nationality){
        return "This field is required.";
    }
    return "";
}

export const validateAlternativeContact = (alternativeContact) =>{
    const AlternateContact = alternativeContact.trim();
    const alternativeContactRegEx =/[0-9]/
    if(!AlternateContact){
        return "This field is required.";
    }else if(!new RegExp(alternativeContactRegEx).test(alternativeContact)){
        return "Should only consist of numerical values"
    }
    return "";
}

export const validateResidentialAddress = (residentialAddress) =>{
    const ResidentialAddress = residentialAddress.trim();
    if(!ResidentialAddress){
        return "This field is required.";
    }
    return "";
}

export const validatePermanentAddress = (permanentAddress) =>{
    const PermanentAddress = permanentAddress.trim();
    if(!PermanentAddress){
        return "This field is required.";
    }
    return "";
}
export const validateTitle = (Title) =>{
    const title = Title.trim();
    if(!title){
        return "This field is required.";
    }
    return "";
}
export const validateDob= (Dob) =>{
    const dob = Dob.trim();
    if(!dob){
        return "This field is required.";
    }
    return "";
}

export const validateId= (username)=>{
    const isBetween =(length,min,max) =>
    length < min || length > max ? false : true;
 const min = 13;
 const max= 30;
 const userName = username.trim();

 if(!userName){
    return "Id number is required";
}else if(!new RegExp(/^[0-9 ]*$/).test(userName)){
    return "ID can only contain numerical values";
 }else if(!isBetween(userName.length,min,max)){
    return `ID must be between ${min} and ${max} .`;
 }
 return "";
};

export const validateMarriageStatus= (MarriageStatus) =>{
    const marriageStatus = MarriageStatus.trim();
    if(!marriageStatus){
        return "This field is required.";
    }
    return "";
}

export const validateVisa= (Visa) =>{
    const visa = Visa.trim();
    if(!visa){
        return "This field is required.";
    }
    return "";
}
export const validateCompany= (Company) =>{
    const company = Company.trim();
    if(!company){
        return "This field is required.";
    }
    return "";
}

export const validateSalary= (Salary)=>{
 const salary= Salary.trim();
if(!salary){
    return "Salary is required";
}else if(!new RegExp(/^[0-9 £]*$/).test(salary)){
    return "Salary can only contain [0-9] and $";
 }
 return "";
};

export const validateLoan= (Loan)=>{
    const loan= Loan.trim();
    const isBetween =(length,min,max) =>
    length < min || length > max ? false : true;
 const min = 4;
 const max= 6;
   if(!loan){
       return "Loan amount is required";
   }else if(!new RegExp(/^[0-9 £]*$/).test(loan)){
       return "loan amount can only contain [0-9] and $";
    }else if(!isBetween(loan.length,min,max)){
        return 'Loan must be between £200-£2000';
     }
     return "";
    };

    export const validateRepayment= (Repayment) =>{
        const repayment = Repayment.trim();
        if(!repayment){
            return "This field is required.";
        }
        return "";
    }
    export const validateCheckbox= (Checkbox) =>{
        const checkbox= Checkbox.trim();
        if(!checkbox){
            return "This field is required.";
        }
        return "";
    }