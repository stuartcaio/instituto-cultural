import React, {useState} from 'react';
import Item from './Type';
import styled from 'styled-components';
import removeTarefa from './App';
import { ArrowFunction } from 'typescript';

const List = styled.ul`
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

const Iten = styled.li`
display: flex;
justify-content: space-between;

color: white;
list-style: none;

width: 100%;
`;

const ItenTexto = styled.h2`
font-size: 1.25rem;
`;

const Exclui = styled.button`
background: none;
border: none;
color: red;
`;

type Props = {
    tarefas: Item[];
    removeTarefa: any;
}

function Lista(props: Props): any{
    return(
        <>
        <List>
        {props.tarefas.map((tarefa) => (
            <Iten>
                <ItenTexto>{tarefa.tarefa}</ItenTexto>
                <Exclui onClick={() => props.removeTarefa(tarefa.id)}>X</Exclui> 
            </Iten>
        ))}
        </List>
        </>
    )
}

export default Lista;