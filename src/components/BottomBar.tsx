import styled from 'styled-components';
import {AiFillHome} from "react-icons/ai";
import {BsFillChatFill, BsFillBookmarkFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";

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

export const BottomBar = () => {
  return (
    <Nav>
        <AiFillHome size={"2.5rem"}  color={"000"}/>
        <BsFillBookmarkFill size={"2.5rem"} color={"#9d9d9d"}/>
        <BsFillChatFill size={"2.5rem"} color={"#9d9d9d"}/>
        <FaUser size={"2.5rem"} color={"#9d9d9d"}/>
    </Nav>
  )
}
