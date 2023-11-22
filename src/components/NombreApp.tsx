import styled from "styled-components"

const Titulo = styled.h1`
   margin: 0;
   font-size: 2.3rem;
   font-weight: bold;
   color: grey;
   font-family: monospace, sans-serif;
`;

interface Props {
  size?: number;
}
export const NombreApp = ({size}:Props) => {
  return (
    <Titulo style={{fontSize: size + "rem"}}>
        <span>Pet</span>
        <span style={{color: "#86bd9e"}}>Match</span>
    </Titulo>
  )
}
