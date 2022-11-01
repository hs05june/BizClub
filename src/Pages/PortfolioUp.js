import React from "react";
import { useState } from "react";
import styled from "styled-components";

const PortfolioUp = () => {
    const [active, setActive] = useState("");
    const handleClick =(e)=>{
        setActive(e.target.innerText);
    }
  return (
    <Upstyles>
      <div className="main">
        {/* <div className="top">
          <div className={`top_in + ${active ==="All" ?"active" :""}`} onClick={handleClick}>All</div>
          <div className={`top_in + ${active ==="Stocks" ?"active" :""}`} onClick={handleClick}>Stocks</div>
          <div className={`top_in + ${active ==="ETFs" ?"active" :""}`} onClick={handleClick}>ETFs</div>
          <div className={`top_in + ${active ==="smallcases" ?"active" :""}`} onClick={handleClick}>smallcases</div>
        </div> */}
        <div className="middle">Portfolio Value</div>
        <div className="bottom">
          <div className="bottom_in">
            <div className="bottom_head">Investment</div>
            <div className="bottom_low"><span style={{
                fontSize:"1.4rem",
                color:"var(--portfolio-low)",
                textShadow:"2px 2px var(--boxshadow-color)"
            }}>₹</span><span style={{
                fontWeight:"bolder",
                color: "var(--white)",
                marginLeft:"2px",
                fontSize:"1.3rem"
            }}>0</span>.00</div>
          </div>
          <div className="bottom_in">
            <div className="bottom_head">Current Value</div>
            <div className="bottom_low"><span style={{
                fontSize:"1.4rem",
                color:"var(--portfolio-low)",
                textShadow:"2px 2px var(--boxshadow-color)"
            }}>₹</span><span style={{
                fontWeight:"bolder",
                color: "var(--white)",
                marginLeft:"2px",
                fontSize:"1.3rem"
            }}>0</span>.00</div>
          </div>
          <div className="bottom_in">
            <div className="bottom_head">Overall Profits/ Loss</div>
            <div className="bottom_low"><span style={{
                fontSize:"1.4rem",
                color:"var(--portfolio-low)",
                textShadow:"2px 2px var(--boxshadow-color)"
            }}>₹</span><span style={{
                fontWeight:"bolder",
                color: "var(--white)",
                marginLeft:"2px",
                fontSize:"1.3rem"
            }}>0</span>.00</div>
          </div>
          <div className="bottom_in">
            <div className="bottom_head">Today's Profit</div>
            <div className="bottom_low"><span style={{
                fontSize:"1.4rem",
                color:"var(--portfolio-low)",
                textShadow:"2px 2px var(--boxshadow-color)"
            }}>₹</span><span style={{
                fontWeight:"bolder",
                color: "var(--white)",
                marginLeft:"2px",
                fontSize:"1.3rem"
            }}>0</span>.00</div>
          </div>
        </div>
      </div>
    </Upstyles>
  );
};
const Upstyles = styled.div`
    width:95%;
    margin-left:5%;
    position:absolute;
    top:3vh;
    z-index:100;
    margin-bottom:1vh;
  .main {
    background: var(--main-color);
    color: var(--portfolio-color);
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 1rem;
    border-radius: 0.6rem;
    box-shadow: 0rem 0rem 0.6rem var(--boxshadow-color);
    border: 1px solid var(--border-color);
    cursor: default;
  }
  .top{
    display: flex;
    flex-direction: row;
    width: 60%;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem 0rem;
    color: var(--portfolio-head);
    cursor: pointer;
    max-width: 570px;
}
.middle{
    padding: 0.3rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 24px;
    height: 24px;
    margin-bottom: 0.5rem;
}
.bottom{
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem;
    max-width: calc(1250px*0.7);
}
.bottom_low{
    display: flex;
    align-items: center;
    color: var(--portfolio-low);
}
.bottom_head{
    font-size: 1rem;
  color: var(--portfolio-head);
  
}
.top_in{
    padding: 0.1rem 0.6rem;
    font-size: 1.3rem;
    font-weight: bolder;
    border-radius: 0.4rem;

}
  .top_in:hover{
    background:#BEF7E9;

  }
  @media (max-width:800px) {
    .top{
        width: 90%;
    }
    .bottom{
        width: 100%;
    }
  }
  .active{
    background: #BEF7E9;
  }
`;

export default PortfolioUp;