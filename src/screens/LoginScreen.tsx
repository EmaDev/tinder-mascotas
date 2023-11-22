import React from 'react';
import styled from 'styled-components';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ScreenType } from './Navigator';
import { NombreApp } from '../components/NombreApp';
import logoImg from "../assets/logo.png";

const Form = styled.form`
   z-index: 2;
   margin-top: 220px;
   z-index: 2;
   padding: 1rem 2rem;

   input{
    width: 100%;
    margin: 1rem 0;
    border-style:none;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.2);
   }
   button{
    width: 100%;
    margin: 2rem 0;
    padding: 1rem;
    background: #92d1ad;
    border-style:none;
    border-radius: 6px;
    font-size: 1.8rem;
    color: #fff;
    font-weight: bold;
    border: 1px solid #82c19d;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.2);
   }
   label{
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0;
    display: block;
   }

   p{
    text-align:center;
    font-size: 1.4rem;
    font-weight: 500;
    color: grey;
   }
`;

const Background = styled.div`
   position: absolute;
   height: 280px;
   width: 125vw;
   background: #92d1ad;
   top: -64px;
   left: -46px;
   right: 0;
   margin:auto;
   border-radius: 0 0 50% 50%;
   transform: rotate(-16deg);
   z-index: 1;
   display:flex;
   justify-content:  center;
   align-items:center;
`;

const Registro = styled.p`
   position: absolute;
   bottom: 2rem;
   left: 0; right: 0;
   margin:auto;
   text-align:center;
   font-size: 1.5rem;
   span{
    font-weight: bold;
   }
`;
const Logo = styled.div`
  width: 180px;
  height:180px;
  background: #fff;
  transform: rotate(16deg);
  border-radius: 50%;
  display:flex;
  justify-content:  center;
   align-items:center;
  img{
    width: 70%;
    height:70%;
  }
`;
interface Props {
    navigate: (screen: ScreenType, goHome?: boolean) => void;
}

export const LoginScreen = ({ navigate }:Props) => {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <Background >
                <br/>
                <Logo>
                    <img src={logoImg}/>
                </Logo>
            </Background>

            <Form style={{}}>
                <NombreApp size={3.5}/>
                <br/>
                <label>Email</label>
                <input placeholder='emanuel@ejemplo.com' />
                <label>Contraseña</label>
                <input placeholder='*******' />
                <button type="button"
                onClick={() => navigate("Home")}
                >Ingresar</button>

                <p>- O ingresar con -</p>
                <div style={{ display: "flex", margin: "0", justifyContent: "center", gap: "2rem" }}>
                    <FaFacebook size={"3.4rem"} color="#4343cd" />
                    <FcGoogle size={"3.4rem"} />
                </div>
            </Form>

            <Registro>
                No tenes cuenta?
                <span onClick={() => navigate("Register")}> Resgistrate aqui</span>
            </Registro>
        </div>
    )
}
