import React from 'react'
import PortfolioUp from './PortfolioUp'
import PortfolioDown from './PortfolioDown'
import { useData } from '../context/contextapi'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useEffect } from 'react'

const PortfoliosPage = () => {
  const {userStocks,setUserStocks,user} = useData()
  const getUserStocks =async()=>{
    const q = query(collection(db,`team${user.uid}_stocks`))
    const docs = await getDocs(q)
    console.log(docs);
    setUserStocks(docs.docs.map((e)=>({...e.data(),id:e.id})))
    console.log(userStocks);
  }
  useEffect(() => {
    getUserStocks()
    return(()=>{
      getUserStocks()
    })
  }, [user,db])
  
  return (
    <div>
      <PortfolioUp/>
    {/* {
      userStocks ?
      <div>

      </div>
    } */}
      <PortfolioDown/>
    </div>
  )
}

export default PortfoliosPage