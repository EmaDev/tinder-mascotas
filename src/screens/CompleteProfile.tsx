import React from 'react';
import styled from 'styled-components';
import { ScreenType } from './Navigator';

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
    box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
    margin: 1rem 0;
   }
   textarea{
    width: 100%;
    padding: 1rem;
    height: 200px;
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
    margin: 1rem 0;
   }
`;

interface Props {
    navigate?: (screen: ScreenType, goHome?: boolean) => void;
}

export const CompleteProfile = ({ navigate }: Props) => {
    return (
        <div style={{ width: "100%", minHeight: "100vh" }}>
            <br /><br />
            <Form style={{ minHeight: "120vh" }}>
                <h2>Completar perfil</h2>
                <br />
                <label>Tipo de hogar</label>
                <select>
                    <option>Seleccione..</option>
                    <option>Casa</option>
                    <option>Departamento</option>
                    <option>PH</option>
                </select>
                <label>Cantidad de ambientes</label>
                <select>
                    <option>Seleccione..</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4 o mas</option>
                </select>
                <label>Personas mayores que habitan el hogar</label>
                <select>
                    <option>Seleccione..</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4 o mas</option>
                </select>
                <label>Actividad</label>
                <select>
                    <option>Seleccione..</option>
                    <option>Empleado</option>
                    <option>Jubilado</option>
                    <option>Desempleado</option>
                </select>
                <label>Informacion adicional<span > (*opcional)</span></label>
                <textarea />
                <button type="button"
                    onClick={() => navigate("Home")}
                >Confirmar</button>
            </Form>

        </div>
    )
}

