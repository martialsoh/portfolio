import './ContactStyle.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
// import { useState, useEffect } from "react";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";



function ContactForm() {

    const form = useRef();

    // export default useForm;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
      const [disabled, setDisabled] = useState(false);
    
      // Function that displays a success toast on bottom right of the page when form submission is successful
      const toastifySuccess = () => {
        toast('Message sent!', {
        //   position: 'bottom-right',
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };
    
      // Function called on submit that uses emailjs to send email of valid contact form
      const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
          // Disable form while processing submission
            setDisabled(true);
    
          // Define template params

          const templateParams = {
            name,
            email,
            subject,
            message
          };

            

            emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_USER_ID,
                templateParams,
            )
            
    
            // Reset contact form fields after submission
            reset();
            // Display success toast
            toastifySuccess();
            // Re-enable form submission
            setDisabled(false);
        }  catch (e) {
            console.log(e);
        }
    };

    return (
        
        
        <div className='form_container'>
    
            <div className="contact__meta">
                <h1 className="hire__text">Contact With Me.</h1>
                <p className="hire__text white">Use the form below to send a message  </p>
            </div>

            <form className='Form' ref={form} id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>    
                <div className='Form1'>
                    <div className='WrapperGrid'>
                        <label className='Label'>Name </label>
                        <input 
                        className='Input1' 
                        type="text" name="name"
                        {...register('name', {
                            required: {
                            value: true,
                            message: 'Please enter your name'
                            },
                            maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                            }
                        })}                       
                        placeholder="Your name"  
                        />
                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                

                    <div className='WrapperGrid'>
                        <label className='Label'>Email Address</label>
                        <input 
                        className='Input1' 
                        type="email" name="email"
                        {...register('email', {
                            required: true,
                            pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        placeholder="Your Email *" 
                        />
                        {errors.email && (
                        <span className='errorMessage'>Please enter a valid email address</span>
                        )}
                    </div>
                </div>

                <div className='Form2'>
                    <div className='WrapperGrid'>
                        <label className='Label'>Subject </label>
                        <input 
                        className='Input2' 
                        type="text" name="subject"                        
                        placeholder="Write a Subject"
                        {...register('subject', {
                            required: {
                            value: true,
                            message: 'Please enter a subject'
                            },
                            maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                            }
                        })}
                        />
                        {errors.subject && (
                        <span className='errorMessage'>{errors.subject.message}</span>
                        )}
                    </div>

                    <div className='WrapperGrid'>
                        <label className='Label'>Message</label>
                        <textarea className='Textarea' 
                        type="message" 
                        name="message" rows="5"
                        {...register('message', {
                            required: true
                        })} 
                        placeholder="Write Your message"></textarea>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div >

                    <div className='WrapperGrid'>
                        <button className='StyledButton' disabled={disabled} type='submit'>Submit</button>
                    </div>
                </div>                
            </form>
            <ToastContainer />
        </div>
            
    )
}

export default ContactForm