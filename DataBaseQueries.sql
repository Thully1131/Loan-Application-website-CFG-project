create database homeloanapplication;
--------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE homeloanapplication.signup (
  firstName varchar(60) ,
  lastName varchar(60),
  email varchar(60) ,
  userName varchar(50),
  mobile varchar(20) ,
  password varchar(50) 
);
----------------------------------------------------------------------------------------------------------------------------------
create table homeloanapplication.userdetails
(userName varchar(20),
age varchar(10),
gender varchar(30),
nationality varchar(60),
alternativeContact varchar(20),
residentialAddress varchar(60),
permanentAddress  varchar(60)
);
--------------------------------------------------------------------------------------------------------------------------
create table homeloanapplication.loanapplication(
userName varchar(20),
title varchar(20),
firstName varchar(30),
lastName varchar(20),
dob varchar(20),
gender varchar(20),
id varchar(50),
marriageStatus varchar(20),
nationality varchar(20),
mobileNumber varchar(20),
email varchar(60),
adress varchar(60),
visaType varchar(20),
companyName varchar(60),
jobTitle varchar(20),
employmentType varchar(20),
employerContact varchar(20),
salary varchar(20),
loanAmount varchar(20),
repaymentPeriod varchar(20)
);
-------------------------------------------------------------------------------------
