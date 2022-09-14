import React from 'react';
import styled from 'styled-components';

export const Membros_ = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

padding: 5rem;
`;

export const Membro = styled.div`
display: flex;
gap: 2rem;

border-radius: 5px;
border: 1px solid grey;

padding: 1rem;
`;

export const Membro__Imagem = styled.img`
width: 12rem;
height: 10rem;

object-fit: cover;
object-position: center;

border-radius: 10px;
border-style: none;
`;

export const Membro__Informacao = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const Membro___Nome = styled.h2`
font-family: 'Raleway', sans-serif;
font-size: 1.75rem;
`;

export const Membro___Sobre = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 1.25rem;
`;