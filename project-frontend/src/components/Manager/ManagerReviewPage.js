import React,{ useState, useEffect } from 'react';
import './ManagerReviewpage.css'
import Axios from 'axios'
import  { Link} from 'react-router-dom'

function ManagerReviewpage(){
  const [data, getData] = useState([])
  useEffect(() => {
    fetchData()
}, [])
  const fetchData=()=>{

    fetch('http://www.localhost:3001/applicantDetails')
      .then((res) =>
        res.json())
 
      .then((response) => {
        console.log(response);
        getData(response);
      })
}
 return (
    <>
        <h1 text='review-txt' className='page-title'>Applicant's Details</h1>
        <tbody title='tbl-bdy'>
            <tr>
                <th>User Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Address</th>
                <th>On Visa?</th>
                <th>Employment Type</th>
                <th>Company Name</th>
                <th>Job Role</th>
                <th>Salary</th>
                <th>Employer Contact Details</th>

            </tr>
            {data.map((item, i) => (
                <tr key={i}>
                    <td>{item.userName}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.dob}</td>
                    <td>{item.email}</td>
                    <td>{item.mobileNumber}</td>
                    <td>{item.adress}</td>
                    <td>{item.visaType}</td>
                    <td>{item.employmentType}</td>
                    <td>{item.companyName}</td>
                    <td>{item.jobTitle}</td>
                    <td>{item.salary}</td>
                    <td>{item.employerContact}</td>
                </tr>
            ))}
        </tbody>
        <div className='Link'>
        <Link style={{color: 'beige'}} className="links" to="/ManagerHomePage">Home Page</Link> 
        </div>
    </>

);
}
export default ManagerReviewpage;