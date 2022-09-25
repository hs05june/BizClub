import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({navToggle}) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 23vw;
    position: fixed;
    height: 100vh;
    background: #F6F6F6;
    overflow: hidden;
    z-index:100;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
    }
`;

export default Sidebar;
