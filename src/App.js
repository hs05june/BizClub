
import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import MarketPage from './Pages/MarketPage';
import OrdersPage from "./Pages/OrdersPage";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import { Route, Switch as Switching } from "react-router";
import Switch from '@mui/material/Switch'
import { IconButton } from "@mui/material";
import NavBar from "./Pages/NavBar";
import Login from "./Components/Login";
import PortfoliosPage from "./Pages/PortfoliosPage";
import Watchlist from "./Pages/WatchList";
import { useData } from "./context/contextapi";
import { collection, getDocs, query, where } from "firebase/firestore";
// import AboutPage from "./Pages/AboutPage";
import { useHistory } from "react-router";
import { db } from "./firebase.config";
import BuyPopup from "./Components/BuyPopup";
import ResetPassword from "./Components/ResetPassword";
// kdnknfmb jkihihjt ihitrkint ijoinjktgn

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const {uid,navigate,setStocks,pop,user,setUser} = useData();
  // const history = useHistory();
  useEffect(()=>{
    if(!uid) {
      navigate.push("/login");
    }
    getStocks();
    if(!user){
      getUserData();
    }
    document.documentElement.className = theme;
  }, [theme]);
  const getUserData = async() =>{
    const q1 = query(collection(db,"teams"),where("uid","==",uid));
    const docs = await getDocs(q1);
    // console.log(docs.docs[0].data());
    setUser(docs.docs[0].data());
    
  }
  const getStocks = async ()=>{
    // const q1 = query(db(collection,"stocks"));
    const q1 = query(collection(db,"stocks"));
    const docs = await getDocs(q1);
    console.log(docs.docs[0].data());
    setStocks(docs.docs.map((e)=>({...e.data(),id:e.id})));
  }
  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }

  return (
    <div className="App">
      {
        pop &&
        <BuyPopup/>
      }
      <Switching>
        <Route exact path='/login'>
          <Login checked={checked} themeToggler={themeToggler}/>
        </Route>
        <Route path='/'>
        <NavBar checked={checked} themeToggler={themeToggler}/>
        <Sidebar navToggle={navToggle} />
        </Route>
        <Route path="/login/resetpassword" exact>
        <ResetPassword/>
        </Route>
      </Switching>
       <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>

        <MainContentStyled>
          <Switching>
            <Route path="/market" exact>
              <MarketPage />
            </Route>
            <Route path="/watchlist" exact>
              <Watchlist/>
            </Route>
            <Route path="/" exact>
              <PortfoliosPage />
            </Route>
            <Route path="/orders" exact>
               <OrdersPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage/>
            </Route>
          </Switching>

        </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
