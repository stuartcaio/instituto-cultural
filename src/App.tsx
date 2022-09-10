import React from 'react';
import './reset.css';
import './css/App.css';
import {Corpo, Cabecalho, CabecalhoSuperior, Menu, Item, CabecalhoInferior, TextoDoCabecalho} from './styles';

function App() {
  return (
    <>
      <Corpo>
        <Cabecalho>
          <CabecalhoSuperior>
            <img className="cabecalho__logo" src={require('./img/book.png')} alt=""/>
            <Menu>
              <Item>Home</Item>
              <Item>Sobre</Item>
              <Item>Artigos</Item>
              <Item>Membros</Item>
              <Item>Contato</Item>
            </Menu>
          </CabecalhoSuperior>
          <CabecalhoInferior>
            <TextoDoCabecalho>
              Um instituto feito por pessoas que buscam a Verdade desde cedo.
            </TextoDoCabecalho>
          </CabecalhoInferior>
        </Cabecalho>
      </Corpo>
    </>
  );
}

export default App;