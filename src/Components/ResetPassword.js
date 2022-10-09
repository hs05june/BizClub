import React, { useRef, useState } from 'react'
import { RiEyeCloseLine , RiEyeLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { auth,db } from '../firebaseconfig';
import styled from 'styled-components';
import { signInWithEmailAndPassword, updatePassword } from 'firebase/auth';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { useData } from '../context/contextapi';
const ResetPassword = () => {
  const [see, setSee] = useState(false)
  const [see1, setSee1] = useState(false)
  const {navigate}= useData();
  const emailRef = useRef("");
  const passRef = useRef("");
  const newpassRef = useRef("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const newpassword = newpassRef.current.value;
    if(email === "" || password === ""){
      alert("Please fill all the fields")
    }
    signInWithEmailAndPassword(auth,email,password)
    .then(async(e)=>{
    //   console.log(e);
      const uid  = e.user.uid;
      const currentUser = auth.currentUser;
      updatePassword(currentUser,newpassword)
      .then(r=>{
        alert("Password Updated Successfully,Login Again");
        const ref = doc(db,"teams",uid);
        updateDoc(ref,{
            password:newpassword
        }).then(e=>{
            alert("Password Updated Successfully in database,Login Again");
            setTimeout(() => {
                navigate.push('/login');
              }, 2000);
        })
        .catch(e=>{
            console.log("DataBase error in updating password");
            
        })
       
      })
      .catch(r=>{
        console.error("Error in updating password",r);

      })
      
      
    })
    .catch(r=>{
      console.log(r);
    })
    
  }
  return (
    <LoginStyles>
  <div className="main">
    
        <div className="form">
          <div className="logo">Logo</div>
          <h4 id="login">Reset Password</h4>
          <div className="input">
        <input type="text" placeholder='Enter Your Team Email'  ref={emailRef} />
          </div>
          <div className="input">
        <input type={`${!see ? "password" :"text"}`} placeholder='Enter Your Old Password' ref={passRef}/>
{
  see ?
  <RiEyeLine onClick={()=>{setSee(!see)}} />
  :
  <RiEyeCloseLine onClick={()=>{setSee(!see)}} />
}
          </div>
          <div className="input">
        <input type={`${!see1 ? "password" :"text"}`} placeholder='Enter Your New Password' ref={newpassRef}/>
{
  see1 ?
  <RiEyeLine onClick={()=>{setSee1(!see1)}} />
  :
  <RiEyeCloseLine onClick={()=>{setSee1(!see1)}} />
}
          </div>
          <div className="btn">
        <button onClick={handleSubmit}>Reset Password</button>
          </div>
        </div>
    </div>
</LoginStyles>
  )
}
const LoginStyles = styled.div`
.main{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 2rem 0 ;
}
.form{
 border: 2px rgba(0, 0, 0, 0.034) solid;
 box-shadow: 0rem  0rem 1rem 0rem var(--boxshadow-color) ;
 width: 40vw;
 display: flex;
 align-items: center;
 flex-direction: column;
 padding: 4rem 0.3rem;
 border-radius: 0.5rem;
 
}
.input {
width: 80%;
display: inline-flex;
border: 1.4px rgba(0, 0, 0, 0.135) solid;
padding: 1rem 0.5rem;
margin: 1rem 0rem;
border-radius: 0.3rem;
border: 1px solid var(--border-color);
}
.input input{
    width: 100%;
    outline: none;
    border: none;
    font-size: 1rem;
    color: inherit;
    background: transparent;
}
.btn{
    width: 80%;
}
#login{
font-size: 2rem;
font-weight: 400;
}
#link{
   float: right;
   margin-top: 1rem;
}
.btn button{
    width: 100%;
    padding: 1rem 0.3rem;
    letter-spacing: 1px;
    font-size: 1rem;
    background-image: linear-gradient(0deg,#318c61,#4dba93fc)!important;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
}
.logo{

}
@media(max-width:710px){
    .form{
        width: 70vw;
    }
}
@media(max-width:320px){
    .form{
        width: 80vw;
    }
}
`
export default ResetPassword