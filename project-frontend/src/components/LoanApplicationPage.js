import React from 'react';
import './LoanApplicationPage.css'
import  { Link, Navigate} from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios'
import { useNavigate  } from 'react-router-dom';
import {validateEmail,validateLastname,validateFirstname,validateTitle,validateDob,validateGender,
  validateNationality, validateId,validateMarriageStatus,validateMobileNumber,validateResidentialAddress,validateVisa,
  validateCompany,validateSalary,validateLoan,validateRepayment,validateCheckbox} from "./ValidationChecks";


function LoanApplication(){
  const navigate = useNavigate ()
  const [titleReg,settitleReg]= useState('')
  const [IstitleRegValid,setIsTitleRegValid]= useState(false)
  const [firstNameReg,setfirstNameReg]= useState('')
  const [IsFirstNameRegValid,setIsFirstNameRegValid]= useState(false)
  const [lastNameReg,setlastNameReg]= useState('')
  const [IsLastNameRegValid,setIsLastNameRegValid]= useState(false)
  const [dobReg,setdobReg]= useState('')
  const [IsDobRegValid,setIsDobRegValid]= useState(false)
  const [genderReg,setgenderReg]= useState('')
  const [IsGenderRegValid,setIsGenderRegValid]= useState(false)
  const [idReg,setidReg]= useState('')
  const [IsIdRegValid,setIsIdRegValid]= useState(false)
  const [marriageStatusReg,setmarriageStatusReg]= useState('')
  const [IsMarriageStatusRegValid,setIsMarriageStatusRegValid]= useState(false)
  const [nationalityReg,setnationalityReg]=useState('')
  const [IsNationalityRegValid,setIsNationalityRegValid]= useState(false)
  const [mobileNumberReg,setmobileNumberReg]= useState('')
  const [isMobileNumberRegValid,setIsMobileNumberRegValid]= useState(false)
  const [emailReg,setemailReg]= useState('')
  const [isEmailRegValid,setIsEmailRegValid]= useState(false)
  const [adressReg,setadressReg]= useState('')
  const [isAdressRegValid,setIsAdressRegValid]= useState(false)
  const [visaTypeReg,setvisaTypeReg]= useState('')
  const [isVisaTypeRegValid,setIsVisaTypeRegValid]= useState(false)
  const [companyNameReg,setcompanyNameReg]= useState('')
  const [isCompanyNameRegValid,setIsCompanyNameRegValid]= useState(false)
  const [jobTitleReg,setjobTitleReg]= useState('')
  const [isJobTitleRegValid,setIsJobTitleRegValid]= useState(false)
  const [employmentTypeReg,setemploymentTypeReg]=useState('')
  const [isEmploymentTypeRegValid,setIsEmploymentTypeRegValid]= useState(false)
  const [salaryReg,setsalaryReg]= useState('')
  const [isSalaryRegValid,setIsSalaryRegValid]= useState(false)
  const [employerContactReg,setemployerContactReg]= useState('')
  const [isEmployerContactRegValid,setIsEmployerContactRegValid]= useState(false)
  const [loanAmountReg,setLoanAmountReg]= useState('')
  const [isLoanAmountRegValid,setIsLoanAmountRegValid]= useState(false)
  const [repaymentPeriodReg,setRepaymentPeriodReg]= useState('')
  const [isRepaymentPeriodRegValid,setIsRepaymentPeriodRegValid]= useState(false)
  const [CheckboxReg,setCheckboxReg]= useState('')
  const [ischeckboxRegValid,setIsCheckboxRegValid]= useState(false)
  const [CheckboxTwoReg,setCheckboxTwoReg]= useState('')
  const [ischeckboxTwoRegValid,setIsCheckboxTwoRegValid]= useState(false)

  const handleChangeTitle=(e)=>{
      settitleReg(e.target.value)
      setIsTitleRegValid(e.target.value !== "")
    }
   const handleChangeFirstName=(e)=>{
      setfirstNameReg(e.target.value)
      setIsFirstNameRegValid(e.target.value !== "")
  
    }
   const handleChangeLastName=(e)=>{
      setlastNameReg(e.target.value)
      setIsLastNameRegValid(e.target.value !== "")
    }
    const handleChangeDob=(e)=>{
      setdobReg(e.target.value)
      setIsDobRegValid(e.target.value !== "")
  
    }
    const handleChangeGender=(e)=>{
      setgenderReg(e.target.value)
      setIsGenderRegValid(e.target.value !== "")
    }
    const handleChangeId=(e)=>{
        setidReg(e.target.value)
        setIsIdRegValid(e.target.value !== "")
      }
    const handleChangeMarriageStatus=(e)=>{
      setmarriageStatusReg(e.target.value)
      setIsMarriageStatusRegValid(e.target.value !== "")
  
    }
    const handleChangeNationality=(e)=>{
      setnationalityReg(e.target.value)
      setIsNationalityRegValid(e.target.value !== "")
    }
    const handleChangeMobileNumber = (e) =>{
        setmobileNumberReg(e.target.value)
        setIsMobileNumberRegValid(e.target.value !== "")
      }
    const handleChangeEmail=(e)=>{
      setemailReg(e.target.value)
      setIsEmailRegValid(e.target.value !== "")
    }
    const handleChangeAddress=(e)=>{
      setadressReg(e.target.value)
      setIsAdressRegValid(e.target.value !== "")
    }
   const handleChangeVisaType=(e)=>{
      setvisaTypeReg(e.target.value)
      setIsVisaTypeRegValid(e.target.value !== "")
    }
    const handleChangeCompanyName=(e)=>{
      setcompanyNameReg(e.target.value)
      setIsCompanyNameRegValid(e.target.value !== "")
    }
    const handleChangeJobTitle=(e)=>{
      setjobTitleReg(e.target.value)
      setIsJobTitleRegValid(e.target.value !== "")
    }
    const handleChangeEmploymentType=(e)=>{
      setemploymentTypeReg(e.target.value)
      setIsEmploymentTypeRegValid(e.target.value !== "")
    }
   const handleChangeSalary=(e)=>{
      setsalaryReg(e.target.value)
      setIsSalaryRegValid(e.target.value !== "")
    }
    const handleChangeEmployerContact=(e)=>{
      setemployerContactReg(e.target.value)
      setIsEmployerContactRegValid(e.target.value !== "")
    }
  const handleChangeLoanAmount = (e) =>{
    setLoanAmountReg(e.target.value)
    setIsLoanAmountRegValid(e.target.value !== "")
  }
  const handleChangeRepaymentPeriod =(e) =>{
    setRepaymentPeriodReg(e.target.value)
    setIsRepaymentPeriodRegValid(e.target.value !== "")
  }
  const handleChangeCheckbox =(e) =>{
    setCheckboxReg(e.target.value)
    setIsCheckboxRegValid(e.target.value !== "")
  }
  const handleChangeCheckboxTwo =(e) =>{
    setCheckboxTwoReg(e.target.value)
    setIsCheckboxTwoRegValid(e.target.value !== "")
  }
  
  const submit=()=>{
    var userName = JSON.parse(localStorage.getItem("username"))
    Axios.post('http://www.localhost:3001/loanApplication', {userName:userName,title:titleReg,firstName:firstNameReg,
    lastName:lastNameReg,dob:dobReg,gender:genderReg,id:idReg,marriageStatus:marriageStatusReg,nationality:nationalityReg,
    mobileNumber:mobileNumberReg,email:emailReg,adress:adressReg,visaType:visaTypeReg,companyName:companyNameReg,
    jobTitle:jobTitleReg,employmentType:employmentTypeReg,salary:salaryReg,employerContact:employerContactReg,
    loanAmount:loanAmountReg,repaymentPeriod:repaymentPeriodReg}).then((res)=>{
    if(res.body !== " "){
     console.log("Loan Details Saved Successfully");
     navigate('/ApplicationSubmitted')
    }
    else{
     console.log("Failed to save loan details");
    }
   }).catch()
 
     
  }
    return (
        
        <div className='formBody'>
        <div><h4 className="heading">Application Form</h4></div>
        <center>
        <form >
        <table>
        <thead>
      <tr><td>
      <h4 className="Sub-heading">Personal Information</h4>
      </td>
        </tr>
      <tr>
      <td><label>Title:</label></td>
      <td><input type="text" name="txt1" className="formInputs" onChange={handleChangeTitle}/>
        </td>
      </tr>
      <tr>
       <td className='Mandatory'>{validateTitle(titleReg)}</td>
        </tr>
      <tr>     
      <td><label>First Name :</label></td>
      <td><input type="text" name="txt2" className="formInputs" onChange={handleChangeFirstName}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateFirstname(firstNameReg)}</td>
        </tr>
       <tr>
      <td><label>LastName :</label></td>
      <td><input type="text" name="txt3" className="formInputs" onChange={handleChangeLastName}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateLastname(lastNameReg)}</td>
        </tr>
       <tr>
      <td><label>Date of Birth :</label></td>
      <td><input type="date" name="txt4"className="formInputs" onChange={handleChangeDob}/></td>
       </tr>
      <tr>
       <td className='Mandatory'>{validateDob(dobReg)}</td>
        </tr>
       <tr>
      <td><label>Gender :</label></td>
      <td><input type="text" name="txt5" className="formInputs" onChange={handleChangeGender}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateGender(genderReg)}</td>
        </tr>
       <tr>
      
      <td><label>ID Number :</label></td>
      <td><input type="text" name="txt6" className="formInputs" onChange={handleChangeId}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateId(idReg)}</td>
        </tr>
       <tr>
      <td><label>Marriage Status:</label></td>
      <td><input type="text" name="txt6" className="formInputs" onChange={handleChangeMarriageStatus}/>
        </td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateMarriageStatus(marriageStatusReg)}</td>
        </tr>
       <tr>    
      <td><label>Nationality :</label></td>
      <td><input type="text" name="txt7"className="formInputs" onChange={handleChangeNationality}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateNationality(nationalityReg)}</td>
        </tr>
       <tr>
      <td><label>Mobile Number :</label></td>
      <td><input type="text" name="txt8"className="formInputs" onChange={handleChangeMobileNumber}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateMobileNumber(mobileNumberReg)}</td>
        </tr>
       <tr>
      <td><label>Email:</label></td>
      <td><input type="email" name="txt9"className="formInputs" onChange={handleChangeEmail}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateEmail(emailReg)}</td>
        </tr> 
       <tr>     
      <td><label>Address</label></td>
      <td><input type="text" name="txt10"className="formInputs" onChange={handleChangeAddress}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateResidentialAddress(adressReg)}</td>
        </tr> 
       <tr></tr>
       <tr>
      <td><label>Are you under a Visa?Yes or No</label></td>
      <td><input type="text" name="txt11"className="formInputs" onChange={handleChangeVisaType}/>
      </td>
       </tr> 
       <tr>
       <td className='Mandatory'>{validateVisa(visaTypeReg)}</td>
        </tr> 
       <tr><td>
      <h4 className="Sub-heading">Employment Information</h4>
      </td>
        </tr>
        <tr>
      <td><label>Employer/Company Name :</label></td>
      <td><input type="text" name="txt11" className="formInputs" onChange={handleChangeCompanyName}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateCompany(companyNameReg)}</td>
        </tr> 
       <tr>
      <td><label>Job Title:</label></td>
      <td><input type="text" name="txt11" className="formInputs" onChange={handleChangeJobTitle}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateCompany(jobTitleReg)}</td>
        </tr>
       <tr>
      <td><label>Employment type :</label></td>
      <td><input type="text" name="txt12" className="formInputs" onChange={handleChangeEmploymentType}/>
      </td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateCompany(employmentTypeReg)}</td>
        </tr>
       <tr>
      <td><label>Employer/Company Contact Number :</label></td>
      <td><input type="text" name="txt13" className="formInputs" onChange={handleChangeEmployerContact}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateCompany(employerContactReg)}</td>
        </tr>
       <tr>
      <td><label> Net Salary(Yearly)::</label></td>
      <td><input type="text" name="txt14" className="formInputs" onChange={handleChangeSalary}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateSalary(salaryReg)}</td>
        </tr>
       <tr><td>
      <h4 className="Sub-heading">Additional Information</h4>
      </td>
        </tr>
        <tr>
      <td><label>Loan Amount:</label></td>
      <td><input type="text" name="txt14" className="formInputs" onChange={handleChangeLoanAmount}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateLoan(loanAmountReg)}</td>
        </tr>
       <tr>
      <td><label>Preferred repayment period(3,6 or 12 months):</label></td>
      <td><input type="text" name="txt14" className="formInputs" onChange={handleChangeRepaymentPeriod}/></td>
       </tr>
       <tr>
       <td className='Mandatory'>{validateRepayment(repaymentPeriodReg)}</td>
        </tr>
       </thead>
       <tfoot>
</tfoot>
</table>
</form>
</center>
<h4 className="Sub-heading">Terms and condition</h4>
<div>
    <p>I authorize prospective Credit Grantors/Lending/Leasing Companies to obtain personal and credit information about me from my employer and credit bureau, or credit reporting agency, any person who has or may have any financial dealing with me, or from any references I have provided. This information, as well as that provided by me in the application, will be referred to in connection with this lease and any other relationships we may establish from time to time. Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies. </p>
    <input type="checkbox" name="allow" value="1" onChange={handleChangeCheckbox}  ></input>
    <div  className='fieldMandatory'>{validateCheckbox(CheckboxReg)}</div>  
</div>
<div>
<p>I hereby agree that the information given is true, accurate and complete as of the date of this application submission. </p>
<input type="checkbox" name="allow" value="1" onChange={handleChangeCheckboxTwo}></input>
<div  className='fieldMandatory'>{validateCheckbox(CheckboxTwoReg)}</div>  
</div>

<center><button title='submit-btn' onClick={submit} disabled={!IstitleRegValid && !IsFirstNameRegValid && !IsLastNameRegValid
  && !IsDobRegValid && !IsGenderRegValid && !IsIdRegValid && !IsMarriageStatusRegValid && !IsNationalityRegValid
  && !isMobileNumberRegValid && !isEmailRegValid && !isAdressRegValid && !isVisaTypeRegValid && !isCompanyNameRegValid && 
  !isJobTitleRegValid && !isEmploymentTypeRegValid && !isEmployerContactRegValid && !isSalaryRegValid && !isLoanAmountRegValid
  && !isRepaymentPeriodRegValid && !ischeckboxRegValid && !ischeckboxTwoRegValid}>Submit Application</button></center>
  
  <h1 className='disclaimer'>*Disclaimer : All fields are mandatory and application will not be considered if any field is left empty</h1>
 
</div>   
     
      
    )
}

export default LoanApplication;