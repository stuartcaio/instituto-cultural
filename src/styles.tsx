import React from 'react'
import styled from 'styled-components';

export const Corpo = styled.body`
display: flex;
flex-direction: column;
gap: 5rem;

background-color: rgb(228, 228, 228);

@media screend and (max-width: 720px){
    width: 100%;

    box-sizing: border-box;
}
`;

export const Fundo = styled.div`
background-color: black;

@media screen and (max-width: 720px){
    width: 100%;
}
`;

export const Cabecalho = styled.header`
background-image: url(${require('./img/literatura.jpg')});
background-size: cover;
opacity: 0.8;

font-family: 'Nothing You Could Do', cursive;

text-decoration: none;

height: 49vw;

@media screen and (max-width: 720px){
    height: 50vh;
}
`;

export const CabecalhoSuperior = styled.section`
display: flex;
justify-content: space-around;
align-items: top;
gap: 15rem;

padding: 2rem;

height: 15vh;

@media screen and (max-width: 720px){
    justify-content: space-around;
    align-items: center;
    gap: 10rem;
}
`;

export const Menu = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
gap: 3rem;

width: 50%;

@media screen and (max-width: 720px){
    position: absolute;
        width: 100%;
        top: 57.59px;
        right: 0;
        background-color: rgb(120, 167, 51);
        height: 0;
        transition: 1s;
        z-index: 1000;
        visibility: hidden;
        overflow-y: hidden;
}
`;

export const Item = styled.li`
font-size: 2rem;
font-weight: 400;
text-decoration: inherit;
color: white;

border: none;

transition: 1s;

&:hover{
    color: red;
}

@media screen and (max-width: 720px){
    font-size: 1.25rem;

    margin-left: 3rem;

        padding: 1rem;

        border-bottom: 2px solid rgba(0, 0, 0, 0.2);

        width: 100%;
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

@media screen and (max-width: 720px){
    text-align: center;
    font-size: 1.25rem;

    width: 75%;
}
`;