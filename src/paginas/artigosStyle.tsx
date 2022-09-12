import React from 'react';
import styled from 'styled-components';

export const Articles = styled.div`
display: flex;
flex-direction: column;
gap: 5rem;

padding: 5rem;

background-color: rgb(228, 228, 228);
`;

export const Article = styled.div`
display: flex;
flex-direction: column;
gap: 1.25rem;
`;

export const Article__Image = styled.img`
width: 40rem;
height: 20rem;
`;

export const Article__Div = styled.div`
display: flex;
justify-content: start;
align-items: center;
gap: 0.25rem;

width: 40rem;
`;

export const Article___Informacao = styled.h4`
font-size: 1rem;
text-align: center;
color: grey;

padding: 0.25rem;

border-radius: 5px;
border: 1px solid grey;

box-sizing: border-box;

width: 9rem;
`;

export const Article___Data = styled.h4`
font-size: 1rem;
color: grey;

margin-left: 17rem;

padding: 0.25rem;
`;

export const Article__Titulo = styled.h2`
font-size: 2rem;
font-family: 'Raleway', sans-serif;
`;

export const Article__Paragrafo = styled.p`
font-size: 1.25rem;
max-width: 200ch;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

width: 55%;
`;

export const Article__Botao = styled.button`
font-size: 1.1rem;
text-decoration: none;

padding: 0.5rem;

color: grey;

width: 15%;

border-radius: 5px;
border-style: 0.5px;
border-color: grey;

transition: 1s;

&:hover {
    background-color: black;
    color: white;
}
`;

export const Article__Hr = styled.hr`
padding: 0rem;

background-color: grey;

margin-right: 40rem;

width: 40rem;
`;