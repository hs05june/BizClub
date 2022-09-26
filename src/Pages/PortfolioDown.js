import React from 'react'
import styled from 'styled-components';

function PortfolioDown() {
    return (
        <AboutStyled>
            <table className='portTable'>
                <tr className='heading'>
                    <th style={{width:'18vw',textAlign:'left'}}>Name</th>
                    <th style={{width:'7vw'}}>Quantity</th>
                    <th style={{width:'9vw'}}>Avg Price</th>
                    <th style={{width:'10vw'}}>Last Traded</th>
                    <th style={{width:'10vw'}}>Investment</th>
                    <th style={{width:'10vw'}}>Current Value</th>
                    <th style={{width:'6vw'}}>P&L</th>
                    <th style={{width:'6vw'}}>P&L%</th>
                </tr>
                <div className='tableContent'>
                <div className='nothing'>
                    <img src="rocket1.png" className='rocket'/>
                    <div className='side'>
                    <p style={{fontFamily:'Inter',color:'var(--text-color)',fontWeight:'400',alignContent:'center',fontSize:'1.5vw'}}>Looks like we will have to wait until your bank becomes investment<br/> ready.</p>
                    <p style={{fontFamily:'Inter',color:'var(--text-color)',fontWeight:'600',alignContent:'center',marginLeft:'10vw',fontSize:'1.5vw'}}>Get ready to start investing.</p>
                    </div>
                </div>
                </div>
            </table>
        </AboutStyled>
    )
}

const AboutStyled = styled.div`
    width:90%;
    height:100%;
    .portTable{
        margin-left: 65px;
        width: 100%;
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
        // margin-bottom:5px;
    }
`;

export default PortfolioDown
