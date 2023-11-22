import React from 'react';
import styled from 'styled-components';
import { db } from '../db';

const Container = styled.section`
   padding: 2rem 1rem;
   margin-top: 6rem;
   display: grid;
   grid-template-columns: 50% 50%;
`;

const Card = styled.div`
   width: 180px;
   height: 180px;
   background: red;
   border-radius: 6px;
   margin: 1rem;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
`;
export const LikesScreen = () => {
    return (
        <>
        <Container>
            {db.map((card, i) => (
                <Card key={i} style={{
                    backgroundImage: "url(" + card.url + ")"
                }}>
                </Card>
            ))}
        </Container>
        </>
    )
}
