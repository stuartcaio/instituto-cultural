import React from 'react';
import styled from 'styled-components';

export const Membros_ = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

padding: 5rem;

@media screen and (max-width: 720px){
    align-items: center;
    padding: 1rem;

    margin-bottom: 5rem;
}
`;

export const Membro = styled.div`
display: flex;
gap: 2rem;

border-radius: 5px;
border: 1px solid grey;

padding: 1rem;

@media screen and (max-width: 720px){
    flex-direction: column;
    align-items: center;
    align-self: center;
    
    width: 75%;
}
`;

export const Membro__Imagem = styled.img`
width: 12rem;
height: 10rem;

object-fit: cover;
object-position: center;

border-radius: 10px;
border-style: none;

@media screen and (max-width: 720px){
    width: 8rem;
    height: 6rem;
}
`;

export const Membro__Informacao = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

@media screen and (max-width: 720px){
    align-items: center;
}
`;

export const Membro___Nome = styled.h2`
font-family: 'Raleway', sans-serif;
font-size: 1.75rem;

@media screen and (max-width: 720px){
    font-size: 1.25rem;
    font-weight: 700;
}
`;

export const Membro___Sobre = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 1.25rem;

@media screen and (max-width: 720px){
    font-size: 1rem;
    text-align: center;
}
`;