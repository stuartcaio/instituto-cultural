import React from 'react';
import styled from 'styled-components';

export const Principal = styled.main`
display: flex;
flex-direction: column;
gap: 7.5rem;

padding: 2.5rem;

background-color: rgb(228, 228, 228);
color: black;

@media screend and (max-width: 720px){
    align-items: center;

    width: 100%;
}
`;

export const Principal__Secao = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
`;

export const Principal___Titulo = styled.h2`
font-size: 3.5rem;
color: black;

@media screen and (max-width: 720px){
    font-size: 2.5rem;
}
`;

export const ParagráfoSobre = styled.p`
font-size: 1.5rem;

width: 75%;

@media screen and (max-width: 720px){
    font-size: 1.25rem;
}
`;

export const Artigos = styled.div`
display: flex;
justify-content: space-around;
gap: 1rem;

@media screen and (max-width: 720px){
    flex-direction: column;
}
`;

export const Artigo = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

background-color: white;

padding: 1rem;

width: 25rem;
height: 28rem;

@media screen and (max-width: 720px){
    width: 18rem;
    height: 20rem;

    gap: 1.25rem;
}
`;

export const Artigo__Imagem = styled.img`
width: 100%;
height: 15rem;
`;

export const Artigo__Título = styled.h2`
font-size: 1.5rem;
text-align: center;

@media screen and (max-width: 720px){
    font-size: 1.25rem;
}
`;

export const Artigo__Autor = styled.p`
font-size: 1rem;
font-weight: 400;
text-align: center;
opacity: 0.75;
`;

export const Artigo__Botao = styled.button`
align-self: center;

background-color: grey;
color: white;

font-size: 1.1rem;

border-radius: 5px;
border-style: none;

padding: 0.5rem;

width: 50%;
`;

export const Artigos__Botao = styled.button`
font-size: 1.15rem;

margin-left: 77.5rem;

background-color: red;
color: white;

border-radius: 5px;
border-style: none;

width: 5rem;

padding: 0.5rem;

transition: 1.5s;

&:hover {
    background-color:  rgb(131, 21, 21);
}

@media screen and (max-width: 720px){
    font-size: 1rem;

    margin-left: 17.5rem;

    padding: 0.25rem;

    width: 3rem;
}
`;