import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
/* :root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;

} */

.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --boxshadow-color:rgba(0, 0, 0, 0.329);
    --portfolio-bgcolor:#FEFBFB;
    --portfolio-color:rgb(0,0,0);
    --portfolio-head:rgba(0,0,0,0.5);
    --portfoilio-low:rgba(0,0,0,0.7);
    --portfolio-nav: #ffffcc;
    --background-nav-color:#F6F6F6;
    --background-watch-heading:#E48D8D;
    --watch-heading-color:red;
    --list-item-background:#F1F1F1;
    --home-color:white;
    --navigation-background-color:#F1F1F1;
    --buy-sell-background:#FCF7DA;
    --mo-heading-background:#fffbf8;
    --rocket-border:purple;
    --text-color:rgba(0,0,0,0.5);
    --item-background:#FEFBFB;
    --form-input-background:#F1F1F1;
    --buypopup-text-color:black;
    --buy-popup-head:#F1F6FE;
    --buy-pop-shadow:rgba(0, 0, 0, 0.3);
}

.dark-theme{
    --buy-pop-shadow:rgba(255, 255, 255, 0.7);
    --buy-popup-head:#2C2C2C;
    --buypopup-text-color:#ffffff;
    --form-input-background:#10121A;
    --item-background:#2C2C2C;
    --text-color:rgba(255,255,255,0.7);
    --rocket-border:white;
    --mo-heading-background:#101010;
    --buy-sell-background:#383C3F;
    --home-color:#B5B7BB;
    --navigation-background-color:#0D0D0D;
    --watch-heading-color:#3F8AF9;
    --background-watch-heading:#383C3F;
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-nav-color:#1A1C1E;
    --background-dark-color: #10121A;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --boxshadow-color:#03045e;
    --portfolio-bgcolor:#0F0F0F;
    --portfolio-color:#F2F2F2;
    --portfolio-head:rgba(120,120,120,0.5);
    --portfoilio-low:rgb(30,40,50);
    --portfolio-nav:#0F0F0F;
    --list-item-background:#0D0D0D;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}

body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}

textarea{
    max-width: 100%;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem
    }
}

span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}

//Utilities
.u-margin-bottom{
    margin-bottom: 4rem;
}


//Floting Toggler
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }

  //Nav Toggler
  .ham-burger-menu{
      position: absolute;
      right: 5%;
      top: 3%; 
      display: none;
      z-index: 15;
      svg{
          font-size: 3rem;
      }
    }

    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
  @media screen and (max-width:1200px){
    .ham-burger-menu{
        display: block;
    }
  }


//Global Media Queries

`;

export default GlobalStyle;