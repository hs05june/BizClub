import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import BuyPopup from "../Components/BuyPopup";
const AuthContext = createContext({})
export function AuthProvider ({children}){
    const navigate = useHistory()
    const [userPosts, setUserPosts] = useState(null)
    const [user, setUser] = useState(null)
    const [cookies,setCookies,removeCookies] = useCookies()
    const [uid, setUid] = useState(cookies.uid)
    const [stocks, setStocks] = useState(null)
    const [search, setSearch] = useState('')
    const [postBool, setPostBool] = useState(true)
    const [pop, setPop] = useState(false)
    const [currentStock, setCurrentStock] = useState(null)
    if(stocks){
    console.log(stocks);
        stocks.sort((a,b)=>{
          return b.date - a.date;
        })
      }
    if(userPosts){ 
        userPosts.sort((a,b)=>{
          return b.date - a.date;
        })
      }
    if(stocks){
        stocks.sort((a,b)=>{
          return b.date - a.date;
        })
      }
    const setUidCookie =(uid)=>{
        setCookies('uid',uid,{path:"/"})
    }
    const logout =()=>{
        setUser(null)
        removeCookies('uid')
        navigate.push('/login')
    }
   
return(
    <AuthContext.Provider 
    value={{
        user,
        logout,
        setUser,
        navigate,
        setUidCookie,
        uid,
        setUid,
        setUserPosts,
        userPosts,
        stocks,
        setStocks,
        search,
        setSearch,
        cookies,
        postBool,
        setPostBool,
        pop,
        setPop,
        currentStock,
        setCurrentStock
    }}
    >
        {children}
    </AuthContext.Provider>
)
}
export const useData = () => useContext(AuthContext)
