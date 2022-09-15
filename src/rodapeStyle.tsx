import React from 'react';
import styled from 'styled-components';

export const Rodape = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3rem;

width: 100%;
height: 25vh;

background-color: rgb(228, 228, 228);
`;

export const Rodape__Categorias = styled.div`
display: flex;
justify-content: space-around;

width: 75%;

@media screen and (max-width: 720px){
    flex-wrap: wrap;
    gap: 0.5rem;

    width: 85%;
}
`;

export const Rodape___Categoria = styled.h3`
text-align: center;
font-size: 1.5rem;
font-weight: 400;

padding: 0.75rem;

border: 1px solid grey;
border-radius: 10px;

color: rgb(150,150,150);
color: linear-gradient(0deg, rgba(117,117,117,1) 0%, rgba(228,228,228,1) 100%);

width: 7.5rem;

@media screen and (max-width: 720px){
    text-align: center;

    width: 6.5rem;
}
`;

export const Rodape____Link = styled.a`
text-decoration: none;
color: inherit;

transition: 1s;

&:hover{
    color: rgb(75,75,75);
}
`;

export const Copyright = styled.p`
font-size: 1.1rem;
font-weight: 0;
color: rgb(75,75,75);

@media screen and (max-width: 720px){
    padding: 2rem;
}
`;