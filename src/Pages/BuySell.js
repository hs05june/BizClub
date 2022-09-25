import React from 'react'
import styled from 'styled-components';

function BuySell(props) {
  return (
    <BuySellStyle>
      <button className='buy'>BUY</button>
      <button className='sell'>{props.use}</button>
    </BuySellStyle>
  )
}

const BuySellStyle = styled.div`
  background:var(--buy-sell-background);
  padding:7px;
  width:99.8%;
  text-align:left;
    .buy,.sell{
        border-radius:5px;
        border:0px;
        color:white;
        font-weight:bold;
        font-size:17px;
        padding:3px 6px;
        margin:0 1vh;
    }
    .buy:hover,.sell:hover{
        cursor: pointer;
        box-shadow:0 0 2px 2px #C1AEB3;
    }
    .buy{
        background:#26059E;
    }
    .sell{
        background:#FF1F1F;
    }
`
export default BuySell