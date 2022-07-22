import React from 'react'
import '../Css/ContactForm.css';
import emailjs from 'emailjs-com'
function ContactForm() {
        function sendEmail(e){
        e.preventDefault()

        emailjs.sendForm('service_r4v20od', 'template_kxmssbu',e.target, 'user_z0ZrJ8xdlfZwDeLvMXTFT').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        e.target.reset();
    }

    function modalSend(){
        const x = document.getElementById('myModal');
        const inputName = document.getElementById('name').value;
        const inputEmail = document.getElementById('email').value;
        const inputMessage = document.getElementById('message').value;

        if(inputName === '' || inputEmail === '' || inputMessage === ''){
            x.style.display = 'none'
        }else{
            x.style.display = 'block';
        }
    }
    
   return(
       <div>
           <div className='container'>
           </div>
           <form  onSubmit={sendEmail}>
                <div className='form '>
                    <input  type="text" placeholder='Your name..' name ="name"  id="name" required></input>
                </div>
                <div className='form pt-2'>
                    <input type="text" placeholder='Your email..' name ="email" id="email"  required></input>
                </div>
                <div className='form pt-2'>
                    <textarea placeholder='Your message..' name ="message" id="message"  required></textarea>
                </div>
                <div >
                    <input className='submit-button' type="submit" value="Send" data-bs-toggle='modal' data-bs-target='#myModal' onClick={modalSend}></input>
                </div>

                
            </form>

            <div class="modal" id="myModal">
                <div class="modal-dialog ">
                    <div class="modal-content">

                    
                    <div class="modal-header">
                        
                    </div>

                    <div class="modal-body">
                        <p> Your message has been sent!<br/>
                        I'll be in touch as soon as possible.</p>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
            </div>
           
            
       </div>
    
);
};





export default ContactForm