const express = require("express")
const app = express();
const mysql = require("mysql")
const cors=require("cors");


app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
user:"root",
host:"localhost",
password:"root",
database:"homeloanapplication",
}); 

app.post('/passwrd',(req,res)=>{
     const userName=req.body.userName;
     const password=req.body.password;
     var count=0;
     db.query("UPDATE signup SET password=? WHERE userName=?",[password,userName] , (err, result)=>{
        if(result.affectedRows>0){
            res.status(200).json(result["affectedRows"])
        }else{
            console.log("Password not updated")
        }
     })
     return count;
})

app.post('/profileDetails',(req,res)=>{
    const userName=req.body.userName;
    const age =req.body.age;
    const gender =req.body.gender;
    const nationality= req.body.nationality;
    const alternativeContact=req.body.alternativeContact;
    const residentialAddress=req.body.residentialAddress;
    const permanentAddress=req.body.permanentAddress;
    var count = 0;
        db.query("INSERT INTO userdetails(userName,age,gender,nationality,alternativeContact,residentialAddress,permanentAddress) VALUES (?,?,?,?,?,?,?)",
        [userName,age,gender,nationality,alternativeContact,residentialAddress,permanentAddress],(err,result)=>{
         count = result["affectedRows"];
         if(count==0){
            console.log("User Details Saving failed");
         }else{
         res.status(200).json(result["affectedRows"])
         
         }
    }
    )
    return count;
})



app.post('/reg',(req,res)=>{
    const firstName =req.body.firstName;
    const lastName =req.body.lastName;
    const email= req.body.email;
    const mobile=req.body.mobile;
    const password=req.body.password;
    const userName=req.body.username;
    var count = 0;
    db.query("INSERT INTO signup(firstName,lastName,email,userName,mobile,password) VALUES (?,?,?,?,?,?)",
    [firstName,lastName,email,userName,mobile,password],(err,result)=>{
         count = result["affectedRows"];
         if(count==0){
            console.log("Account creation failed");
         }else{
         res.status(200).json(result["affectedRows"])
         
         }
    }
    )
    return count;
})

app.post('/loanApplication',(req,res)=>{
    const userName =req.body.userName;
    const title=req.body.title;
    const firstName =req.body.firstName;
    const lastName =req.body.lastName;
    const dob=req.body.dob;
    const gender =req.body.gender;
    const id =req.body.id;
    const marriageStatus =req.body.marriageStatus;
    const nationality= req.body.nationality;
    const mobileNumber=req.body.mobileNumber;
    const email=req.body.email;
    const adress=req.body.adress;
    const visaType =req.body.visaType;
    const companyName =req.body.companyName;
    const jobTitle= req.body.jobTitle;
    const employmentType=req.body.employmentType;
    const employerContact=req.body.employerContact;
    const salary=req.body.salary;
    const loanAmount=req.body.loanAmount;
    const repaymentPeriod=req.body.repaymentPeriod;
    var count = 0;
    db.query("INSERT INTO loanapplication(userName,title,firstName,lastName,dob,gender,id,marriageStatus,nationality,mobileNumber,email,adress,visaType,companyName,jobTitle,employmentType,employerContact,salary,loanAmount,repaymentPeriods) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [userName,title,firstName,lastName,dob,gender,id,marriageStatus,nationality,mobileNumber,email,adress,visaType,
        companyName,jobTitle,employmentType,employerContact,salary,loanAmount,repaymentPeriod],(err,result)=>{
         count = result["affectedRows"];
         if(count==0){
            console.log("loan application creation failed");
         }else{
         res.status(200).json(result["affectedRows"])
         
         }
    }
    )

    return count;
})

app.get('/applicantDetails', (req, res) => {
    db.query("SELECT * FROM loanapplication", (err, results) => {
      if(err) throw err;
      res.send(results);
      //console.log(results)
    });
  });

app.post('/login',(req,res)=>{
    const password=req.body.password;
    const userName=req.body.username;
    var count = 0;
    db.query("SELECT userName,password from signup where userName=? and password=?",
    [userName,password],(err,result)=>{
         //count = result;
         //console.log(count);
         //console.log(result)
         if(err){
            res.send({err:err})
         }
         if(result==[]){
           console.log(" check username/password")
         }else{
            res.status(200).json(result)
         }
    }
    
    )
    return count;
})

app.listen(3001,()=>{
    console.log("running server");
});