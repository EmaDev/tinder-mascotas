import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   width: 100vh;
   min-height: 80vh;
   margin: 5rem 1rem;
   position: relative;
`;
const Formulario = styled.form`
   width: 100%;
   textarea{
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
`;

const Check = styled.div`
   display: flex;
   justify-content: center;
   align-items:center;
`;


const ChatContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  bottom: 1rem;
  left: 0; right: 0;
  margin:auto;

`;
const ChatContenido = styled.div`
  position:relative;
  width: 100%;
  height: 100%;
  span{
    position: absolute;
    width: 100px;
    top: 2rem; 
    right: 0; left: 0;
    margin:auto;
    font-size: 1.3rem;
    color: grey;
  }
  label{
    position: absolute;
    width: 200px;
    top: 1.5rem; 
    right: 0; left: 0;
    margin:auto;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const Chat = styled.div<any>`
   background: #a3e4a3;
   position: absolute;
   margin:auto;
   max-width: 40vw;
   padding: 1rem;
   border-radius: 8px;
   top: 7rem;
   p{
    margin: 0;
   }
   ${({ lado }) => lado == "left" ?
        "left: 0;"
        :
        "right:0;"
    }
`;

export const ChatScreen = () => {
    const [confirmado, setConfirmado] = useState<boolean>(false);

    return (
        <Container>
            <br /><br />
            {confirmado ?

                <ChatContainer>
                    <ChatContenido>
                        <span style={{ top: "-1rem" }}>20 de noviembre</span>
                        <label>tu formulario fue aprobado</label>
                        <span style={{ top: "4rem" }}>22 de noviembre</span>

                        <Chat lado={"left"}>
                            <p>hola, nos gusto tu perfil</p>
                        </Chat>
                        <Chat lado={"right"} style={{ top: "15rem" }}>
                            <p>Muchas gracias</p>
                        </Chat>
                    </ChatContenido>
                </ChatContainer>
                :
                <Formulario>
                    <label>Pregunta 1 del refugio</label>
                    <textarea />
                    <label>Pregunta 2 del refugio</label>
                    <textarea />
                    <label>Pregunta 3 del refugio</label>
                    <textarea />
                    <label>Pregunta 4 del refugio</label>
                    <textarea />
                    <label>Pregunta 5 del refugio</label>
                    <textarea />

                    <Check>
                        <input type={"checkbox"} />
                        <span>Acepto los terminos de adopcion</span>
                    </Check>
                    <button type='button' onClick={() => setConfirmado(!confirmado)}>
                        Enviar formulario
                    </button>
                </Formulario>
            }
        </Container>
    )
}

/* 
 <Formulario>
            <label>Pregunta 1 del refugio</label>
            <textarea/>
            <label>Pregunta 2 del refugio</label>
            <textarea/>
            <label>Pregunta 3 del refugio</label>
            <textarea/>
            <label>Pregunta 4 del refugio</label>
            <textarea/>
            <label>Pregunta 5 del refugio</label>
            <textarea/>

            <Check>
                <input type={"checkbox"}/>
                <span>Acepto los terminos de adopcion</span>
            </Check>
            <button type='button'>
                Enviar formulario
            </button>
        </Formulario>
*/