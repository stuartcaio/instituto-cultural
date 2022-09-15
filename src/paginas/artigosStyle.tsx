import React from 'react';
import styled from 'styled-components';

export const Principal = styled.main`
display: flex;
justify-content: space-between;

background-color: rgb(228, 228, 228);

@media screen and (max-width: 720px){
    justify-content: center;

    width: 100%;
}
`;

export const Articles = styled.div`
display: flex;
flex-direction: column;
gap: 5rem;

padding: 5rem;

width: 40rem;

background-color: rgb(228, 228, 228);

@media screen and (max-width: 720px){
    padding: 0rem;

    width: 20rem;
}
`;

export const Articles__Titulo = styled.h2`
font-family: 'Raleway', sans-serif;
font-size: 2rem;
text-align: center;
color: grey;

border-radius: 5px;
border: 1px solid grey;

width: 20rem;

padding: 0.5rem;

@media screen and (max-width: 720px){
    font-size: 1.25rem;

    margin-top: 2rem;

    width: 12rem;
}
`;

export const Article = styled.div`
display: flex;
flex-direction: column;
gap: 1.25rem;
`;

export const Article__Image = styled.img`
width: 40rem;
height: 20rem;

@media screen and (max-width: 720px){
    width: 17rem;
    height: 10rem;
}
`;

export const Article__Div = styled.div`
display: flex;
justify-content: start;
align-items: center;
gap: 0.25rem;

width: 40rem;

@media screen and (max-width: 720px){
    width: 20rem;
}
`;

export const Article___Informacao = styled.h4`
font-family: 'Raleway', sans-serif;
font-size: 1rem;
text-align: center;
color: grey;

padding: 0.5rem;

border-radius: 5px;
border: 1px solid grey;

box-sizing: border-box;

width: 15rem;

@media screen and (max-width: 720px){
    font-size: 0.75rem;

    width: 8.5rem;
}
`;

export const Article___Data = styled.h4`
font-size: 1rem;
color: grey;

margin-left: 12rem;

padding: 0.25rem;

@media screen and (max-width: 720px){
    display: none;

    font-size: 0.75rem;

    margin-left: 0rem;
}
`;

export const Article__Titulo = styled.h2`
font-size: 2rem;
font-family: 'Raleway', sans-serif;

@media screen and (max-width: 720px){
    font-size: 1rem;
}
`;

export const Article__Paragrafo = styled.p`
font-size: 1.25rem;
max-width: 200ch;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

width: 55%;

@media screen and (max-width: 720px){
    font-size: 0.75rem;

    width: 75%;
}
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

@media screen and (max-width: 720px){
    width: 33%;
}
`;

export const Article__Hr = styled.hr`
padding: 0rem;

background-color: grey;

margin-right: 40rem;

width: 40rem;

@media screen and (max-width: 720px){
    width: 20rem;
}
`;

export const Lateral = styled.div`
display: flex;
flex-direction: column;
gap: 2.5rem;

background-color: rgb(228, 228, 228);

padding: 5rem;

@media screen and (max-width: 720px){
    display: none;
}
`;

export const Lateral__Lista = styled.ul`
display: flex;
flex-direction: column;
gap: 1.25rem;
`;

export const Lateral___Item = styled.li`
font-size: 1.25rem;
font-family: 'Raleway', sans-serif;
`;

export const Lateral___Hr = styled.hr`
background-color: grey;

width: 100%;
`;

export const The_Article = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

padding: 5rem;

@media screen and (max-width: 720px){
    padding: 2rem;
}
`;

export const The_Article__Titulo = styled.h2`
font-family: 'Raleway', sans-serif;
font-size: 2rem;

@media screen and (max-width: 720px){
    font-size: 1.25rem;
}
`;

export const The_Article__Image = styled.img`
width: 40rem;
height: 20rem;

@media screen and (max-width: 720px){
    width: 20rem;
    height: 10rem;
}
`;

export const The_Article__Texto = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 1.5rem;

@media screen and (max-width: 720px){
    font-size: 1rem;

    margin-bottom: 5rem;
}
`;