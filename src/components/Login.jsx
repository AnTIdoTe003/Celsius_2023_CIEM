// import axios from 'axios';
import React, { useState } from 'react'
import '../styles/login.scss'
import Header from './Header';
import ResponsiveDrawer from './ResponsiveDrawer';
const Login = () => {
  const [download, setDownload] = useState(false)
  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwt8d8fy99oRTirAgv68n4mt7Lbe7tIB8LpFMfJ_Bdi-HAl40EeMfo8sQ9_IQS_eU2YuA/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
      setDownload(!download)
  }
  
    
  return (
    <div className='login_header'>
      <Header></Header>
      <ResponsiveDrawer></ResponsiveDrawer>
    
    <div className="login_wrapper">
      
    <div className="login_content">
      <form autoComplete="off"
      className="form" onSubmit={(e) => Submit(e)}>
        <div className="login_input">
        <label>Name</label>
        <input type='text'  required
          placeholder='Enter your name' 
           name="Name"
        />
        </div>
        <br></br>
        <div className="login_input">
        <label>Contact Number</label>
        <input type="number" required
          placeholder='Enter your contact' 
         name="Contact"
        />
        </div>
        <br></br>   
        <div className="login_input">
        <label>College Name</label>
        <input type="text" required
          placeholder='Enter your college name' 
         name="College"
        />
        </div>
        <br></br>
        <div style={{display:"flex",justifyContent:'center'}}>
        <button type='submit' className='btn' >Submit</button>
        </div> 
        </form>
        <br />
        <div className={download?'show btn':'hide'}>
          <a href="https://drive.google.com/uc?export=download&id=16v728Pii4x29aQjdm9-ggw6aycXuBMwB
          " target={"_blank"} rel="noreferrer"><button  id='downloadbtn'>Download Brochure</button></a>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Login