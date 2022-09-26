import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useData } from '../context/contextapi';
import { db } from '../firebase.config';
// import Watchlistitem from './WatchlistItem';
import WatchlistItem from './WatchlistItem';

function Watchlist() {
    
    const [watchlist, setWatchlist] =useState();
    const {uid} = useData();
    useEffect(() => {
      getWatchList();
    }, [watchlist])
    const getWatchList =async()=>{
        const q1 = query(collection(db,`watchlist_${uid}`));
        const querySnapshot = await getDocs(q1);
        // console.log(querySnapshot.docs.map((e)=>({...e.data(),id:e.id})));
        setWatchlist(querySnapshot.docs.map((e)=>({...e.data(),id:e.id})));
    }
    return (
            <ResumePageStyled>
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
                        watchlist &&
                        watchlist.map(e=>{
                            return <WatchlistItem name={e.name} ltp={e.ltp} change={e.change} changePercent={e.changePercent} volume={e.volume} value={e.value} increase={false} id={e.id}/>
                        })
                    }
                </div>
            </table>       
         </ResumePageStyled>
    )
}
const ResumePageStyled = styled.div`
width:100%;
// height:60vh;
.portTable{
    margin-left: 65px;
    width: 76vw;
    // overflow:auto;
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
    z-index:10;
    top:10.1vh;
    position:sticky;
}
.tableContent{
    overflow-y:scroll;
    height:83vh;
    &::-webkit-scrollbar {
        display: none;
      }
}
`
export default Watchlist