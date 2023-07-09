import React from 'react'
import './contact.css'

const Contact = () => {

  const handleEvent = (e)=>{
    e.preventDefault()
    alert('message submited')
  }

  return (
    <>
      <div id='connect' className="connect">
        <iframe
            className='map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8161.417418320363!2d73.4624864944429!3d22.611747753487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e29fde215d675%3A0x8ac1b115ee47e73b!2zMjLCsDM2JzQyLjkiTiA3M8KwMjcnNTAuOSJF!5e0!3m2!1sen!2sin!4v1656751332993!5m2!1sen!2sin"
        ></iframe>
        <div className='mail'>
          <h1>mail me for further queries</h1>
          <form id='form' onSubmit={handleEvent}>
            <input className='input' required id='name' type='text' placeholder='Please Provide Your name'></input>
            <input className='input' required id='email' type='email' placeholder='Please Provide Your email id'></input>
            <input className='input' required id='message' type='text' placeholder='Just Say it waht you want'></input>
            <button type='submit'>Submit</button>
          </form>
        </div>
        <div className="profile-div">
          <i onClick={()=>{
            window.open('https://www.facebook.com/swayam.pandya.7' ,'_blank')
          }} className="fab fa-facebook"><span> facebook</span></i>


          <i onClick={()=>{
            window.open('https://twitter.com/pandyaswayam' ,'_blank')
          }} className="fab fa-twitter"><span> twitter</span></i>


          <i onClick={()=>{
            window.open('https://www.instagram.com/bhudev_swayam/' ,'_blank')
          }} className="fab fa-instagram"><span> instagram</span></i>

          <i  onClick={()=>{
            window.open('https://in.linkedin.com/in/swayam-pandya-6687651b9' ,'_blank')
          }} className="fab fa-linkedin"><span> linkedin</span></i>
         
          <i onClick={()=>{
            window.open(' https://github.com/bhudevswayam/' ,'_blank')
          }} className="fab fa-github"><span> github</span></i>

          <i onClick={()=>{
            window.open('https://www.snapchat.com/add/swayam_pandya20?share_id=qMUQSOUAhxE&locale=en-US' ,'_blank')
          }} className="fab fa-snapchat"><span> snapchat</span></i>
        </div>
      </div>
    </>
  )
}

export default Contact;


// import React from "react";
// import './contact.css';
// const Contact = () =>{
//     return(
//         <>
//             <div className="contact-container">
//                 <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8161.417418320363!2d73.4624864944429!3d22.611747753487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e29fde215d675%3A0x8ac1b115ee47e73b!2zMjLCsDM2JzQyLjkiTiA3M8KwMjcnNTAuOSJF!5e0!3m2!1sen!2sin!4v1656751332993!5m2!1sen!2sin">
//                 </iframe>
//                 <h1 id='textBelowMap'>Get In Touch</h1>
//             </div>
//         </>
//     )
// }

// export default Contact;