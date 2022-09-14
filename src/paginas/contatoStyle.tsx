import React from 'react';
import styled from 'styled-components';

export const Contato_ = styled.div`
display: flex;
flex-direction: column;
gap: 5rem;

font-family: 'Raleway', sans-serif;

padding: 5rem;
`;

export const Secao__Contato = styled.div`
display: flex;
gap: 2.5rem;
flex-wrap: wrap;
`;

export const Contato__Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;

border-radius: 10px;
border: 1px solid grey;

width: 10rem;
height: 10rem;

padding: 5rem;
`;

export const Contato___Imagem = styled.img`
width: 8rem;
height: 8rem;
`;

export const Contato___Titulo = styled.h2`
font-size: 1.75rem;
`;

export const Contato___Contato = styled.h3`
font-size: 1.25rem;
font-weight: 700;
`;