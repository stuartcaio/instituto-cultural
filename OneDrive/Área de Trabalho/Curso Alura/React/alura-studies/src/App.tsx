import React from 'react';
import styled from 'styled-components';
import './App.css';

const Corpo = styled.body`
display: flex;
flex-direction: column;
gap: 0.5rem;

width: 100vw;
height: 100vh;
`;

const Formulário = styled.form`
display: flex;
align-items: center;
align-self: center;
flex-direction: column;
gap: 0.5rem;

width: 20%;
height: 20%;

padding: 2rem;

background-color: black;

border-radius: 10px;
`;

const Input = styled.input`
padding: 0.25rem;

border-radius: 5px;
`;

const Botão = styled.button`
padding: 0.25rem;
border: none;

background-color: red;
color: white;
`;

const Título = styled.h1`
font-size: 1.25rem;
text-align: center;
color: white;
`;

const Lista = styled.ul`
display: flex;
flex-direction: column;
align-self: center;
gap: 0.5rem;

background-color: black;
color: white;

padding: 1rem;

width: 22.5%;

border-radius: 10px;
`;

const Item = styled.li`
font-size: 1.25rem;
color: white;
list-style: none;
`;

function App() {
  return (
    <>
    <Corpo>
      <Formulário>
        <Título>Tarefas</Título>
        <Input />
        <Botão>Adicionar</Botão>
      </Formulário>
      <Lista>
        <Item>Ir para a academia</Item>
        <Item>Ler um livro</Item>
      </Lista>
    </Corpo>
    </>
  );
}

export default App;
