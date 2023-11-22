import React from 'react';
import styled from 'styled-components';
import { ScreenType } from './Navigator';
import Swal from 'sweetalert2';

const Form = styled.form`
   padding: 2rem;
   h2{
    margin: 2rem auto;
    text-align:center;
   }

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
    span{
        color:red;
        font-weight: normal;
    }
   }

   p{
    text-align:center;
    font-size: 1.4rem;
    font-weight: 500;
    color: grey;
   }
   select{
    background: none;
    border-style:none;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    margin: 1rem 0;
   }
   textarea{
    width: 100%;
    padding: 1rem;
    height: 120px;
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
    margin: 1rem 0;
   }
`;

interface Props {
    navigate?: (screen: ScreenType, goHome?: boolean) => void;
}

export const ProfileScreen = ({ navigate }: Props) => {


    const mostrarAlerta = () => {
        return Swal.fire({
            title: "Modificar datos?",
            text: "Para las mascotas que actualemente te encuentras postulado, conservaran los datos actuales.",
            icon: "warning",
            confirmButtonText: 'Modificar'
        });
    }
    return (
        <div style={{ width: "100%", minHeight: "100vh" }}>
            <br /><br />
            <Form style={{ minHeight: "110vh" }}>
                <h2>Informacion de tu cuenta</h2>
                <label>Tipo de hogar</label>
                <select disabled>
                    <option>Casa</option>
                </select>
                <label>Cantidad de ambientes</label>
                <select disabled>
                    <option>4 o mas</option>
                </select>
                <label>Personas mayores que habitan el hogar</label>
                <select disabled>
                    <option>3</option>
                </select>
                <label>Personas mayores que habitan el hogar</label>
                <select disabled>
                    <option>Empleado</option>
                </select>
                <label>Informacion adicional</label>
                <textarea disabled value={"Etiam elementum, ante id accumsan faucibus, mi sem consequat tellus, et scelerisque eros quam et orci. Proin luctus tincidunt velit, sed posuere nisi varius quis. Sed vitae orci et odio aliquet porta. Nulla dignissim magna eget pretium cursus. Sed egestas convallis molestie."} />
                <button type="button"
                    onClick={mostrarAlerta}
                >Modificar datos</button>
            </Form>

        </div>
    )
}

