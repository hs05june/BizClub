import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListItem from './ListItem';
import { useData } from '../context/contextapi';
// import SeacrhIc


function Navigation() {
    const {stocks} = useData()

    return (
        <NavigationStyled>
            <form  className="avatar">
                <span className="searchIcon"><SearchIcon/></span>
                <input type="text" className="searchWatch" placeholder='Search in WatchList'/>
            </form>
            <div className='watchList'>
                <div className="watchList-head">
                    <PlayArrowIcon className='arrow'/>
                    <div className='headingText' >First Watchlist</div>
                    <ArrowDropDownIcon className='down'/>
                </div>
                <div className='lists'>

                    {/* {stocks.map((stock)=>{

                    })} */}
                    <ListItem title="abcd" value={10} subtitle="acd" change={1} percent={1} increase={true}/>
                    <ListItem title="abcd" value={10} subtitle="acd" change={1} percent={1} increase={true}/>
                    <ListItem title="abcd" value={10} subtitle="acd" change={1} percent={1} increase={true}/>
                    <ListItem title="abcd" value={10} subtitle="acd" change={1} percent={1} increase={true}/>
                    <ListItem title="abcd" value={10} subtitle="acd" change={1} percent={1} increase={true}/>
                    <ListItem title="abcd" value={10} subtitle="acd" change={1} percent={1} increase={true}/>
                    <ListItem title="abcd" value={10} subtitle="acd" change={1} percent={1} increase={true}/>
                    <ListItem title="abcd" value={10} subtitle="acd" change={1} percent={1} increase={true}/>

            </div>
            </div>

            <footer className="footer">
                <p>@2022 <b>Biz Club IIT BHU</b></p>
               </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 90%;
    width: 100%;
    background:  var(--navigation-background-color);
    border-right: 1px solid var(--border-color);
    // overflow-y: auto;
    // margin-top:10vh;
   
      .lists{
        overflow-y:scroll;
        height: 67.5vh;
        &::-webkit-scrollbar {
            display: none;
          }
      }
    .avatar{
        width:90%;
        margin-top: 2vh;
        height:6vh;
        padding:10px;
        padding-left:15px;
        border-radius: 0.5vh;
        box-shadow:0 0 2px 2px #dedee3;
        font-size:1.3vw;
        display:flex;
        flex-direction: row;
        &:focus{
            box-shadow:0 0 2px 2px #99D5FF;
        }
    }
    .searchWatch{
        outline:none;
        border:0px ;
        margin-left:0.5vw;
        width:100%;
        background: var(--list-item-background);
        color:var(--font-color);
    }
    .watchList-head{
        background:var(--background-watch-heading);
        height:5vh;
        width:100%;
        padding-top:7px;
        display:flex;
        flex-direction: row;
    }
    .watchList{
        height:100%;
        border:2px solid #E67595;
        border-radius:0.5vh;
        width:90%;
        margin:10px;
    }
    .arrow{
    color:var(--watch-heading-color);;
    text-shadow:0 0 2px 2px black;
    }

    
    .down{
        margin-left:115px;
        color:var(--watch-heading-color);
    }
    
    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }
            
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }
    
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        color:var(--font-color);
        margin-bottom:1vh;
        p{
            padding: 0.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
    .headingText{
        font-size:1.2vw;
        margin-left:0.5vw;
    }
    `;
    export default Navigation;
    