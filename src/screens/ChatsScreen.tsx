import React from 'react';


import styled from 'styled-components';
import { db } from '../db';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenType } from './Navigator';

const Container = styled.section`
   padding: 2rem 1rem;
   margin: 6rem 0;
   width: 100vw;
`;

const ItemChat = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.4);
  background: #fff;
  margin: 2rem 0;
   img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 1rem;
   }
   span{
    font-size: 1.4rem;
    font-weight: bold;
   }
`;

const ItemDetail = styled.div`
`


interface Props {
    navigate?: (screen: ScreenType, goHome?: boolean) => void;
}

export const ChatsScreen = ({navigate}:Props) => {
    return (
        <Container>
            <div>

            </div>
            {db.slice(0, 4).map((item, i) => (
                <>
                <ItemChat key={i} onClick={() => navigate("Chat")}>
                    <div style={{margin: "0 1rem", display: "flex", alignItems: "center"}}>
                        <img src={item.url} />
                        <span>{item.name}</span>
                    </div>
                    
                    <ProgressBar paso={i}/>
                </ItemChat>
                
                </>
            ))}
        </Container>
    )
}
