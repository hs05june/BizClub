import React from 'react'
import styled from 'styled-components';
import Portfolio_Item from '../Components/Portfolio_Item';
import { useData } from '../context/contextapi';
import WatchlistItem from './WatchlistItem';

function PortfolioDown() {
    const {userStocks} = useData()
    
    return (
        <AboutStyled>
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
                    {
                        userStocks ?
                        userStocks.map((e)=>{
                            return(
                                <Portfolio_Item name={e.name} ltp={e.ltp} change={e.change} changePercent={e.changePercent} volume="5769" value={e.value} increase={e.change>0} id={e.id}/>
                            )
                        })
                        :
                        <div className='nothing'>
                        <img src="rocket1.png" className='rocket'/>
                        <div className='side'>
                        <p style={{fontFamily:'Inter',color:'var(--text-color)',fontWeight:'400',alignContent:'center',fontSize:'1.5vw'}}>Looks like we will have to wait until your bank becomes investment<br/> ready.</p>
                        <p style={{fontFamily:'Inter',color:'var(--text-color)',fontWeight:'600',alignContent:'center',marginLeft:'10vw',fontSize:'1.5vw'}}>Get ready to start investing.</p>
                        </div>
                    </div>
                    }
               
                </div>
            </table>
        </AboutStyled>
    )
}

const AboutStyled = styled.div`
    width:90%;
    height:100%;
    /* margin-left:100px; */
    .portTable{
        margin-left: 65px;
        width: 94%;
        position:absolute;
        top:25vh;
    }
    .portTable th, .portTable td{
        padding-left:1.5vw;
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
        z-index:1;
        top:30vh;
        position:sticky;
    }
    .rocket{
        border:dashed 2px var(--rocket-border);
        border-radius : 5px;
        width : 12vw;
        height: 15vw;
    }
    .nothing{
        display:flex;
        flex-direction:row;
        margin:15vh 8vw;
    }
    .side{
        height:15vw;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        margin-left:2vw;
    }
    .element{
        font-family:Inter;
        color:var(--text-color);
        font-weight:400;
        font-size:1vw;
        background: var(--item-background);
        border: 2px solid #E1E1E1;
        box-sizing: border-box;
        height:2.5vw;
        width:100%;
    }
    .tableContent{
    overflow-y:scroll;
    height:83vh;
    &::-webkit-scrollbar {
        display: none;
      }
    }
    `
export default PortfolioDown
