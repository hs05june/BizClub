
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
// import AboutPage from "./Pages/AboutPage";


function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);

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
      <Switching>
        <Route exact path='/login'>
          <Login checked={checked} themeToggler={themeToggler}/>
        </Route>
        <Route path='/'>
        <NavBar checked={checked} themeToggler={themeToggler}/>
        <Sidebar navToggle={navToggle} />
        </Route>
      </Switching>
       

        {/* <div className="theme">
          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                 <Switch
                  value=""
                  checked={checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={themeToggler}
                  
                /> 
              </div>
            </div>
        </div> */}

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
