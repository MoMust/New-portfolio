import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';


function ReturnHome(){
    let Navigate = useNavigate();
return(
    <div>
        <button onClick={() =>{
                    Navigate('/');
                }}>Go back home</button>
    </div>
)


}

export default ReturnHome;