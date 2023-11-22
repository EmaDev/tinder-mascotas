import styled from 'styled-components';
import {LuSettings2} from "react-icons/lu";
import { NombreApp } from './NombreApp';
import { ScreenType } from '../screens/Navigator';
import { MdKeyboardArrowLeft } from "react-icons/md";


const Nav = styled.nav`
   position: fixed;
   top: 0;
   left:0;
   width: 100vw;
   max-width: 450px;
   z-index: 999;
   display:flex;
   padding: 1.5rem;
   justify-content: space-between;
   align-items:center;
   border-bottom: 1px solid #e1e1e1;
   background: #fff;
   overflow:hidden;
   box-shadow: 0 1px 6px rgba(0,0,0,0.4);
   h4{
    margin: 0;
   }
   .btn:hover{
    transition: .3s ease all;
    transform: scale(1.2);
   }
`;

interface Props {
    title: ScreenType;   
    prevScreen: ScreenType;
    navigate: (screen: ScreenType, goHome?: boolean) => void;
}
export const NavBar = ({title, prevScreen, navigate}:Props) => {
  return (
    <Nav>
        {title != "Home" && 
          <MdKeyboardArrowLeft size={"3.5rem"} onClick={() => navigate(prevScreen)}/>
        }
        <NombreApp/>
        <LuSettings2 size={"2.5rem"} className="btn"
        onClick={() => navigate("Settings")}/>
    </Nav>
  )
}
