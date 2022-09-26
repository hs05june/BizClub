import React, {useState,useRef, useEffect} from "react";
import styled from "styled-components";
import Draggable from "react-draggable"

export default function BuyPopup(props){
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
    
    return (
        <BuyPopupStyle>
          
     <div className  = "overall">
     <div className="head">
     <div className = "headleft">
        <div style={{marginBottom:'2vh'}}>{props.name}</div>
        <div>LTP: Rs.{props.price}</div>
     </div>
     <div className="headright">Acc Bal: Rs.{props.bal}</div> </div><br></br>
     <div className="quantity">
       <div className = "qh"> <b>Quantity: </b> </div>
        <button onClick={increment} id = "inc">+</button>
        <input id = "input" ref={quantityRef} onChange={(e)=>change(e.target.value)}/>
        <button onClick={decrement} id = "dec">-</button>
     </div>
     <div id = "result" >
      <div className="quantityPrice"><span id = "c1"> Quanity:</span> <div id = "quant">{y}@{props.price}</div></div> <br></br>
      <div className="quantityPrice"><span id = "c2">Price:</span> <div id = "price">{parseInt(y*props.price)}</div>
     </div></div><br></br>
     <div id = "tb">  <button id = "sub" type="submit">BUY</button> </div>
     </div>
     {/* </Draggable> */}
     </BuyPopupStyle>
    );
}

const BuyPopupStyle = styled.div`
*{
    box-sizing: border-box;
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
  box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  }
  .head{
    display: flex;
    height:10vh;
    justify-content: space-around; width: 100%;  border: 1px solid rgba(0, 0, 0, 0.1);
    background: #F1F6FE;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2vw;
    line-height: 15px;
    color: #3C4A57;
  padding-top: 2vh;
  }
  .headright{ background: #F1F6FE;
    position: relative;
    margin-top: 2% ;
    font-family: 'Inter';
    font-style: normal;
  font-weight: 400;
  line-height: 15px;
  color: rgba(60, 74, 87, 0.8);
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
    }
  
    #inc{
      margin-left: 47%;
      &:hover{cursor: pointer;}
    }
    #dec{
      &:hover{cursor: pointer;}
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
      &:hover{
        background-color:#009d78;
        cursor: pointer;
      }
    }
    .buy{
      position: relative;
      top: 4.5%;
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
    }
    #c1,#quant{
      display: inline-block;
    }
    #c1,#c2,.qh{
      padding-left: 2%;
      color: black;
      font-weight: 500;
    }
    .quantityPrice{
      width: 100%;
      padding:0 1vw;
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
`