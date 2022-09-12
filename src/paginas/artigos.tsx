import React, {useState} from 'react';
import '../reset.css';
import '../css/App.css';
import {Corpo, Fundo, Cabecalho, CabecalhoSuperior, Menu, Item, CabecalhoInferior, TextoDoCabecalho} from '../styles';
import {ParagráfoSobre, Principal, Principal__Secao, Principal___Titulo, Artigos as Article, Artigo, Artigo__Imagem, Artigo__Título, Artigo__Autor, Artigo__Botao, Artigos__Botao} from '../principalStyle';
import {Copyright, Rodape, Rodape__Categorias, Rodape___Categoria, Rodape____Link} from '../rodapeStyle';
import {Link} from 'react-router-dom';

function Artigos(){

    const [artigos, setArtigos] = useState();

    return(
        <>
        <Corpo>
            <Fundo>
                <Cabecalho style={{backgroundImage: `url(${require('../img/atenas.jpg')})`, height: '75vh', backgroundPosition: 'bottom'}}>
                    <CabecalhoSuperior>
                        <img className="cabecalho__logo" src={require('../img/book.png')} alt=""/>
                        <Menu>
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <Item>Home</Item>
                            </Link>
                            <Item>Sobre</Item>
                            <Item>Artigos</Item>
                            <Item>Membros</Item>
                            <Item>Contato</Item>
                        </Menu>
                    </CabecalhoSuperior>
                    <CabecalhoInferior>
                        <TextoDoCabecalho style={{textAlign: 'center'}}>Artigos</TextoDoCabecalho>
                    </CabecalhoInferior>
                </Cabecalho>
            </Fundo>
        </Corpo>
        </>
    );
}

export default Artigos;