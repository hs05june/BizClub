import React, { useRef, useState } from 'react'
// import { RiEyeCloseLine , RiEyeLine } from "react-icons/ri";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Switch from '@mui/material/Switch'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useData } from '../context/contextapi';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase.config';

const Login = (props) => {
  const [see, setSee] = useState(false)
  // const {setUidCookie,setUser,setUid,navigate}= useData();
  const {setUidCookie,setUser,setUid,navigate}= useData();
  const emailRef = useRef("");
  const passRef = useRef("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if(email === "" || password === ""){
      alert("Please fill all the fields")
    }
    signInWithEmailAndPassword(auth,email,password)
    .then(async(e)=>{
      console.log(e);
      const uid  = e.user.uid;
      const q1 = query(collection(db,"teams"),where("uid","==",uid));
      const docs = await getDocs(q1);
      // console.log(docs.docs[0].data());
      setUidCookie(uid);
      setUid(uid);
      setUser(docs.docs[0].data());
      setTimeout(() => {
        navigate.push('/');
      }, 2000);
      
    })
    .catch(r=>{
      console.log(r);
    })
    
  }
  return (
    <LoginStyles>
      <div className="theme">
          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                 <Switch
                  value=""
                  checked={props.checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={props.themeToggler}
                  
                /> 
              </div>
            </div>
        </div>
  <div className="main">
    
        <div className="form">
          <div className="logo" style={{textAlign:'center'}}><img src="logo2.jpg" height="20%" width="20%"/></div>
          <h4 id="login">Login</h4>
          <div className="input">
        <input type="text" placeholder='Enter Your Team Name' ref={emailRef} style={{background:'transparent'}}/>
          </div>
          <div className="input">
        <input type={`${!see ? "password" :"text"}`} placeholder='Enter Your Password' ref={passRef} style={{background:'transparent'}}/>
{
  see ?
  <VisibilityIcon onClick={()=>{setSee(!see)}} />
  :
  <VisibilityOffIcon onClick={()=>{setSee(!see)}} />
}
          </div>
          <div className="btn">
        <button onClick={handleSubmit}>Login</button>
          </div>
          <Link  style={{marginTop:'2em'}} to="/login/resetpassword" >
        Reset Password
          </Link>
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
 padding: 2rem 0.3rem;
 border-radius: 0.5rem;
 padding-top:1rem;
}
.logo img{
  margin-bottom:0.5em;
  border-radius:5px;
  box-shadow: 0px 0px 3px 3px rgba(255,255,255,0.6);
 
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

}
input :autofill{
  background:transparent !important;

}
input ::--webkit-autofill{
  background:transparent !important;
  color:transparent !important;

}
--webkit-input-background:transparent;
input :focus{
  background: transparent !important;
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
export default Login