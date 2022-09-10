import React from 'react'
import styled from 'styled-components';

export const Corpo = styled.body`
background-color: black;
`;

export const Cabecalho = styled.header`
background-image: url(${require('./img/literatura.jpg')});
background-size: cover;
opacity: 0.8;

font-family: 'Nothing You Could Do', cursive;

height: 49vw;
`;

export const CabecalhoSuperior = styled.section`
display: flex;
justify-content: space-around;
align-items: top;
gap: 15rem;

padding: 2rem;

height: 15vh;
`;

export const Menu = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
gap: 3rem;

width: 50%;
`;

export const Item = styled.li`
font-size: 2rem;
font-weight: 400;
color: white;

transition: 1s;

&:hover{
    color: red;
}
`;

export const CabecalhoInferior = styled.section`
display: flex;
justify-content: center;
align-items: center;

height: 100%;
`;

export const TextoDoCabecalho = styled.p`
font-size: 2rem;
font-weight: 700;
color: white;

width: 37.5%;

margin-bottom: 15rem;
`;