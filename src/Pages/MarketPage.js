import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import MarketItem from './MarketItem';

function MarketPage() {

    return (
            <ResumePageStyled>
                <form  className="avatar">
                <span className="searchIcon"><SearchIcon/></span>
                <input type="text" className="search" placeholder='Search in Companies'/>
            </form>
                <table className='portTable'>
                <tr className='heading'>
                    <th style={{width:'25vw',textAlign:'left'}}>Name</th>
                    <th style={{width:'7vw'}}>LTP</th>
                    <th style={{width:'9vw'}}>Change</th>
                    <th style={{width:'10vw'}}>Change %</th>
                    <th style={{width:'13vw'}}>Volume</th>
                    <th style={{width:'10vw'}}>Value (in Cr.)</th>
                </tr>
                <div className='tableContent'>
                    <MarketItem name="anjhu" ltp="12" increase={true} change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                    <MarketItem name="anjhu" ltp="12" change={12} changePercent={13} value={12} volume={989}/>
                </div>
            </table>       
         </ResumePageStyled>
    )
}
const ResumePageStyled = styled.div`
width:100%;
.avatar{
    width:90%;
    // margin-top:3vh;
    // margin-left:6vw;
    height:6vh;
    padding:10px;
    padding-left:15px;
    border-radius: 0.5vh;
    box-shadow:0 0 2px 2px #dedee3;
    font-size:1.3vw;
    display:flex;
    flex-direction: row;
    position:sticky;
    top:12vh;
    left:25vw;
    &:focus{
        box-shadow:0 0 2px 2px #99D5FF;
    }
}
.search{
    outline:none;
    border:0px ;
    margin-left:0.5vw;
    width:100%;
    background: var(--list-item-background);
    color:var(--font-color);
}
.portTable{
    margin-left: 65px;
    width: 76vw;
    // overflow:auto;
}
.portTable th, .portTable td{
    padding-left:1.7vw;
}
font-size:1.2vw;
.heading{
    background:var(--mo-heading-background);
    height: 5vh;
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    color:var(--text-color);
    box-shadow:0px -1px 4px rgba(0,0,0,0.5);
    margin-bottom:0.5vh;
    z-index:10;
    position:sticky;
    top:20vh;
}
.tableContent{
    overflow-y:scroll;
    height:83vh;
    padding-top:4.5vh;
    &::-webkit-scrollbar {
        display: none;
      }
}
`
export default MarketPage