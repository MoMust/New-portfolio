import React from 'react';
import '../Css/Error.css';
import { useNavigate} from 'react-router-dom';
import ReturnHomeButton from '../Components/ReturnHomeButton'

function Error() {

    const navigate = useNavigate();
    return (
        <div className='body-class-error'>
             <h1>404....page not found</h1>
             {/* <button  className='btn-primary' type="button">Return</button> */}
             
             <div className='return' onClick={()=>{
                 navigate('/');
             }}>Return</div>
             
        </div>
      
    )
}

export default Error
