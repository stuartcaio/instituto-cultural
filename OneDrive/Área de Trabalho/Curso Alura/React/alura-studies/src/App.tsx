import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import Lista from './Lista';
import Item from './Type';
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

function App() {

  const [tarefa, setTarefa] = useState<Item>(Object);
  const [tarefas, setTarefas] = useState<Item[]>([]);

  function enviou(e: FormEvent){
    e.preventDefault();

    const existe = tarefas.find((item) => item.tarefa === tarefa.tarefa);

    if(existe){
      tarefa.id = existe.id;
    } else{
      addTarefa();
    }

    console.log(tarefas);
  }
  
  function addTarefa(){
    setTarefas([...tarefas, {id: tarefa.id, tarefa: tarefa.tarefa}]);
  }

  const removeTarefa = (tarefaID: number) => {
    const novaLista = tarefas.filter(task => task.id != tarefaID);
    setTarefas(novaLista);
  }

  return (
    <>
    <Corpo>
      <Formulário onSubmit={enviou}>
        <Título>Tarefas</Título>
        <Input onChange={(e) => (setTarefa({id: tarefas.length, tarefa: e.target.value}))} />
        <Botão type="submit">Adicionar</Botão>
      </Formulário>
      <Lista tarefas={tarefas} removeTarefa={removeTarefa}></Lista>
    </Corpo>
    </>
  );
}

export default App;