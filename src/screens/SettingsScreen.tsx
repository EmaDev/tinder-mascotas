import styled from 'styled-components'

const Container = styled.section`
   margin-top: 6rem;
   padding: 2rem 1rem;
   width: 100vw;
`;

const Form = styled.form`

  h1{
    font-weight: bold;
  }
   padding: 1rem;
   label{
    font-size: 1.6rem;
    font-weight: bold;
    margin: .5rem 0;
    display: block;
   }
   select{
    background: none;
    border-style:none;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
   }
`;
const Separator = styled.div`
   width: 100%;
   height: 1px;
   background: #e1e1e1;
   margin: 2rem 0;
`;

const StatusBar = styled.div`
   width: 100%;
   height: 4px;
   border-radius: 4px;
   background: green;
   margin:auto 1rem;
   position: relative;

   .ball{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 75px;
    bottom: 0;
    margin: auto;
    background: green;
   }
`;


export const SettingsScreen = () => {
  return (
    <Container>
      <Form>
        <h1>Filtrar por</h1>
        <label>Especie</label>
        <select>
          <option>Perros</option>
          <option>Gatos</option>
          <option>Todos</option>
        </select>
        <Separator />
        <label>Genero</label>
        <select>
          <option>Macho</option>
          <option>Hembra</option>
          <option>Todos</option>
        </select>
        <Separator />
        <label>Rango de edad</label>

        <div style={{ display: "flex", alignItems: "center", justifyItems: "center", margin: "1rem 2rem" }}>
          <span style={{fontSize: "1.4rem", fontWeight: "bold"}}>0</span>
          <StatusBar>
          <div className='ball'></div>
          </StatusBar>
          <span style={{fontSize: "1.4rem", fontWeight: "bold"}}>15</span>
        </div>

        <Separator />

        <label>Distancia</label>
        <div style={{ display: "flex", alignItems: "center", justifyItems: "center", margin: "1rem 2rem" }}>
          <span style={{fontSize: "1.4rem", fontWeight: "bold"}}>1Km</span>
          <StatusBar>
          <div className='ball'></div>
          </StatusBar>
          <span style={{fontSize: "1.4rem", fontWeight: "bold"}}>80Km</span>
        </div>
        <Separator />
      </Form>
    </Container>
  )
}
