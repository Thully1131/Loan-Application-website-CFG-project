import  { Link} from 'react-router-dom'
import './ApplicationSubmitted.css'


function ApplicationSubmitted(){

return(
    <div class="txt-msg">
        <h3 title='msg'>Your Application for Home Loan has been submitted to manager for review.</h3>
        <h3>The manager will contact you once the decision has been made!</h3>
        <div class="link-cls"><h3><Link to='/HomePage'>Home Page</Link></h3></div>
    </div>
);
}

export default ApplicationSubmitted;