import React, {useState} from 'react';
import Item from './Type';
import styled from 'styled-components';

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
font-size: 1.25rem;
color: white;
list-style: none;
`;

type Props = {
    tarefas: Item[];
}

function Lista(props: Props): any{
    return(
        <>
        <List>
        {props.tarefas.map((tarefa) => (
            <Iten>{tarefa.tarefa}</Iten>
        ))}
        </List>
        </>
    )
}

export default Lista;