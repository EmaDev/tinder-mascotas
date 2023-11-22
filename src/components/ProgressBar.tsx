import {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
   width: 100%;
   padding: 1rem 0;
   display: grid; 
   grid-template-columns: 33% 33% 33%;
`;

type PasosType = "PASO 1"|"PASO 2"|"PASO 3"
interface Paso {
    tipo: PasosType;
    desc: string;
    estado: boolean;
}

const pasos1: Paso[] = [
    {tipo: "PASO 1",estado: true, desc: "Formulario"},
    {tipo: "PASO 2",estado: true, desc: "Aceptacion"},
    {tipo: "PASO 3",estado: false, desc: "Encuentro"},
]
const pasos2: Paso[] = [
    {tipo: "PASO 1",estado: true, desc: "Formulario"},
    {tipo: "PASO 2",estado: false, desc: "Aceptacion"},
    {tipo: "PASO 3",estado: false, desc: "Encuentro"},
]
const pasos3: Paso[] = [
    {tipo: "PASO 1",estado: true, desc: "Formulario"},
    {tipo: "PASO 2",estado: true, desc: "Aceptacion"},
    {tipo: "PASO 3",estado: true, desc: "Encuentro"},
]

interface Props {
    paso: number
}
export const ProgressBar = ({paso}:Props) => {

  const [pasosActivos, setPasosActivos] = useState<Paso[]>(pasos1);
  
  useEffect(() => {
    if(paso == 1){
        setPasosActivos(pasos1)
    }else if(paso == 2){
        setPasosActivos(pasos2)
    }else{
        setPasosActivos(pasos3)
    }
  },[]);
  return (
    <Container>
        {pasosActivos.map( paso => (
            <div style={{width: "100%", border: "1px solid #e1e1e1",
             background: paso.estado ? "#75aa8c" : "grey", height: "25px"}}
             >
                <p style={{margin: '0', textAlign: "center", color: "#fff", fontSize: "1.2rem"}}>
                    {paso.desc}
                </p>
             </div>
        ))}
    </Container>
  )
}
