import styled from 'styled-components';
import {LuSettings2} from "react-icons/lu";


const Nav = styled.nav`
   position: fixed;
   top: 0;
   left:0;
   width: 100vw;
   max-width: 450px;
   z-index: 999;
   display:flex;
   padding: 1.5rem 1rem;
   justify-content: space-between;
   border-bottom: 1px solid #e1e1e1;
   background: #fff;
   overflow:hidden;
   box-shadow: 0 1px 6px rgba(0,0,0,0.4);
   h4{
    margin: 0;
   }
`;

interface Props {
    title: string;   
}
export const NavBar = ({title}:Props) => {
  return (
    <Nav>
        <h4>{title}</h4>
        <LuSettings2 size={"2rem"}/>
    </Nav>
  )
}
