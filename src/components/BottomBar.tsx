import styled from 'styled-components';
import {AiFillHome, AiFillLike} from "react-icons/ai";
import {BsFillChatFill, BsFillBookmarkFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";
import { ScreenType } from '../screens/Navigator';

const Nav = styled.nav`
   position:fixed;
   z-index: 999;
   width:100%;
   max-width: 450px;
   display:flex;
   bottom:0;
   padding: 1.5rem 3rem;
   justify-content: space-between;
   border-top: 1px solid #e1e1e1;
   background: #fff;
   box-shadow: 0 1px 6px rgba(0,0,0,0.6);
   h4{
    margin: 0;
   }
`;

interface Props {
  navigate: (screen: ScreenType, goHome?: boolean) => void;
  actualScreen: ScreenType;
}
export const BottomBar = ({actualScreen, navigate}:Props) => {
  
  return (
    <Nav>
        <AiFillHome size={"2.5rem"} color={actualScreen == "Home" ? "000" : "#9d9d9d"} onClick={() => {navigate("Home")}}/>
        <AiFillLike size={"2.5rem"} color={actualScreen == "Likes" ? "000" : "#9d9d9d"} onClick={() => {navigate("Likes")}}/>
        <BsFillChatFill size={"2.5rem"} color={actualScreen == "Chats" ? "000" : "#9d9d9d"} onClick={() => {navigate("Chats")}}/>
        <FaUser size={"2.5rem"} color={actualScreen == "User" ? "000" : "#9d9d9d"} onClick={() => {navigate("User")}}/>
    </Nav>
  )
}
