import React, {useState,useRef, useEffect} from "react";
import styled from "styled-components";
import Draggable from "react-draggable"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useData } from "../context/contextapi";
import { addDoc, collection, doc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase.config";

export default function BuyPopup(props){
  const {currentStock} = useData();

  console.log(currentStock);
    const {user,setPop} = useData();
    const quantityRef = useRef();
    const[y,change] = useState(0);
    useEffect(()=>{
      quantityRef.current.value = 0;
    },[])
    function increment(){
      quantityRef.current.value = parseInt(quantityRef.current.value)+1;
      change(quantityRef.current.value)
      
}
function decrement(){
    if(quantityRef.current.value > 0){
        quantityRef.current.value = parseInt(quantityRef.current.value)-1;
        change(quantityRef.current.value)
        }
    };
    const buyStock =()=>{
      console.log("buying");
      if(y*currentStock.value > user.balance){
        alert("You don't have enough balance");
        setPop(false);
      }
      else {
        addDoc(collection(db,`team${user.uid}_stocks`),{
          name:currentStock.name,
          quantity:y,
          value:currentStock.value,
          total:y*currentStock.value
        })
        .then(e=>{
          alert("Stock bought successfully");
          setPop(false);
          const docRef =doc(db,"teams",where("uid","==",user.uid))
          updateDoc(docRef,{
            balance:(user.balance - y*currentStock.value).toFixed(2)
          })
          // db.collection("teams").doc(user.uid).update({balance:(user.balance - y*currentStock.value).toFixed(2)})
          user.balance =  ((user.balance - y*currentStock.value).toFixed(2)).toString();

        })
        .catch(e=>{
          console.error("Some error occured while buying a stock",e);
          setPop(false);
        })
      }
    }
    return (
      <Draggable>
        <BuyPopupStyle>
     <div className  = "overall">
      <div className="closeDiv" onClick={()=>setPop(false)}>
     <HighlightOffIcon className="close"/>
     </div>
     <div className="head">
     <div className = "headleft">
        <div style={{marginBottom:'2vh'}}>{currentStock.name}</div>
        <div>LTP: Rs.{currentStock.ltp}</div>
     </div>
     <div className="headright">Acc Bal: Rs.{user.balance}</div> </div><br></br>
     <div className="quantity">
       <div className = "qh"> <b>Quantity: </b> </div>
        <button onClick={increment} id = "inc">+</button>
        <input id = "input" ref={quantityRef} onChange={(e)=>change(e.target.value)} style={{color:'black',borderRadius:'3px',border:'1px black solid'}}/>
        <button onClick={decrement} id = "dec">-</button>
     </div>
     <div id = "result" >
      <div className="quantityPrice"><span id = "c1"> Quanity:</span> <div id = "quant">{y}@{currentStock.value}</div></div> <br></br>
      <div className="quantityPrice"><span id = "c2">Price:</span> <div id = "price">{(y*currentStock.value).toFixed(2)}</div>
     </div></div><br></br>
     <div id = "tb">  <button id = "sub" type="submit" onClick={buyStock}>BUY</button> </div>
     </div>
     </BuyPopupStyle>
     </Draggable>
    );
}

const BuyPopupStyle = styled.div`
  position: absolute;
  margin:auto;
  z-index:600;
  // user-select: none;
  *{
    box-sizing: border-box;
  }
  .closeDiv{
    position:relative;
    width:100%;
    text-align:right;
     background:var(--buy-popup-head);
     padding:2px;
    //  margin:0 -3px;
    height:0vh;
  }
  .close{
    color:red;
    right:0;
    // top:1vw;
    &:hover{
      cursor:pointer;
      color:rgb(253, 70, 70);
    }
  }
  .App{
    position: relative;
    margin: 0 auto;
    padding : 20px;
    top: 200px;
    left : 200px;  
  }
  
  .headleft{
    padding-bottom: 5px;
    position: relative;
    font-weight: 550;
    margin-left: -10%;
  }
  .overall{
    border: solid black 0.5px;
    position : relative;
    width : 30vw;
    height: 25vw;
    box-shadow: -4px -4px 4px var(--buy-pop-shadow), 4px 4px 4px var(--buy-pop-shadow);
    background-color:var(--background-nav-color);
    border-radius:4px;
  }
  .head{
    display: flex;
    height:10vh;
    justify-content: space-around; width: 100%;  border: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--buy-popup-head);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2vw;
    line-height: 15px;
    // color: #3C4A57;
    color:var(--buypopup-text-color);
    padding-top: 2vh;
  }
  .headright{ 
    background: var(--buy-popup-head);
    position: relative;
    margin-top: 2% ;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    // color: rgba(60, 74, 87, 0.8);
    color:var(--buypopup-text-color);
    padding-bottom: 5px;
    font-size: 1vw;
  }
  #b1,#b2{
    display: inline-block;
    width: 50%;
    height: 30px;
    border: none;
      position: relative;
    }
    #b1 button,#b2 button{
      width: 100%;
    }
    .quantity{
      padding:0 1vw;
      display: flex;
      color:var(--buypopup-text-color);
    }
    
    #inc{
      margin-left: 47%;
      &:hover{cursor: pointer;}
    }
    #dec{
      &:hover{cursor: pointer;}
      // color:var(--buypopup-text-color);
    }
    .overall #sub{
      text-align: center;
      width: 90%;
      bottom : 0px;
      position : absolute;
      bottom: 5%;
      left: 5%;
      background-color:  #0CAE88;
      border : none;
      border-radius: 5px;
      color: aliceblue;
      // color:var(--buypopup-text-color);
      &:hover{
        background-color:#009d78;
        cursor: pointer;
      }
    }
    .buy{
      position: relative;
      top: 4.5%;
      color:var(--buypopup-text-color);
    }
    #b1 button{
      background-color:  #0CAE88;
      border: none;
      color: aliceblue;
      height: 111%;
    }
    #b2,#b2 button{
      border: none;
      background-color : rgb(229, 218, 218);
    }
    #b2 button{
      height: 111%;;
    }
    #result{
      position: relative;
      top: 15%;
      width:30vw;
      color:var(--buypopup-text-color);
    }
    #tb button{
      height: 10%;
      margin: 1.5vh auto;
    }
    #input{
      width: 20%;
      background-color: aliceblue;
      border: #F1F6FE;
      text-align: center;
      color:var(--buypopup-text-color);
    }
    #c1,#quant{
      display: inline-block;
    }
    #c1,#c2,.qh{
      padding-left: 2%;
      color:var(--buypopup-text-color);
      font-weight: 500;
    }
    .quantityPrice{
      width: 100%;
      padding:0 1vw;
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color:var(--buypopup-text-color);
    }
    color:var(--buypopup-text-color);
    `