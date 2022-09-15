import React, {useState} from 'react';
import '../reset.css';
import '../css/App.css';
import {Corpo, Fundo, Cabecalho, CabecalhoSuperior, Menu, Item, CabecalhoInferior, TextoDoCabecalho} from '../styles';
import {Principal, Articles, Article, Article__Image, Article__Div, Article___Informacao, Article__Titulo, Article___Data, Article__Paragrafo, Article__Botao, Article__Hr, Articles__Titulo, Lateral, Lateral__Lista, Lateral___Item, Lateral___Hr} from './artigosStyle';
import {Copyright, Rodape, Rodape__Categorias, Rodape___Categoria, Rodape____Link} from '../rodapeStyle';
import {Link} from 'react-router-dom';
import { Artigo__Botao } from '../principalStyle';
import {artigos} from './constArtigos';

function Artigos(){

    const [gurus, setGurus] = useState(['Olavo de Carvalho', 'Padre Paulo Ricardo', 'J.R.R Tolkien', 'G.K Chesterton', 'Dostoiévski', 'Scott Hahn', 'Louis Lavelle', 'Sergio Leone','Santo Tomás de Aquino', 'Padre Sertillanges', 'John Ford','Frank Capra']);

    const [livrosInfluentes, setLivrosInfluentes] = useState(['O Senhor dos Anéis', 'O Hobbit', 'A Vida Intelectual', 'A Educação da Vontade', 'O Jardim das Aflições', 'A Morte de Ivan Ilitch', 'Caminho', 'Forja', '1984']);

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
                            <Link to="/paginas/artigos">
                                <Item>Artigos</Item>
                            </Link>
                            <Link to="/paginas/membros">
                                <Item>Membros</Item>
                            </Link>
                            <Link to="/paginas/contato">
                            	<Item>Contato</Item>
                            </Link>
                        </Menu>
                        <button className="cabecalho__botao">
                            <img src={require('../img/icon-menu.png')} alt=""/>
                        </button>
                    </CabecalhoSuperior>
                    <CabecalhoInferior>
                        <TextoDoCabecalho style={{textAlign: 'center'}}>Artigos</TextoDoCabecalho>
                    </CabecalhoInferior>
                </Cabecalho>
                </Fundo>
                <Principal>
                    <Articles>
                        <Articles__Titulo>Últimas publicações</Articles__Titulo>
                        {artigos.map((artigo) => (
                            <Article>
                                <Article__Image src={artigo.imagem} />
                                <Article__Div>
                                    <Article___Informacao>{artigo.categoria}</Article___Informacao>
                                    <Article___Informacao>{artigo.autor}</Article___Informacao>
                                    <Article___Data>{artigo.data}</Article___Data>
                                </Article__Div>
                                <Article__Titulo>{artigo.titulo}</Article__Titulo>
                                <Article__Paragrafo>{artigo.texto}</Article__Paragrafo>
                                <Link to="/paginas/artigos">
                                    <Link to={`/paginas/${artigo.id}`}>
                                        <Article__Botao>Leia mais</Article__Botao>
                                    </Link>
                                </Link>
                                <Article__Hr />
                            </Article>
                        ))}
                    </Articles>
                    <Lateral>
                        <Articles__Titulo>Nossos gurus</Articles__Titulo>
                        <Lateral__Lista>
                            {gurus.map((guru) => (
                                <>
                                    <Lateral___Item>{guru}</Lateral___Item>
                                    <Lateral___Hr />
                                </>
                            ))}
                        </Lateral__Lista>
                        <Articles__Titulo>Livros influentes</Articles__Titulo>
                        <Lateral__Lista>
                            {livrosInfluentes.map((livro) => (
                                <>
                                    <Lateral___Item>{livro}</Lateral___Item>
                                    <Lateral___Hr />
                                </>
                            ))}
                        </Lateral__Lista>
                    </Lateral>
                </Principal>
                <Rodape>
                    <Rodape__Categorias>
                    <Rodape___Categoria>
                        <Rodape____Link href="#">Literatura</Rodape____Link>
                    </Rodape___Categoria>
                    <Rodape___Categoria>
                        <Rodape____Link href="#">Cinema</Rodape____Link>
                    </Rodape___Categoria>
                    <Rodape___Categoria>
                        <Rodape____Link href="#">Música</Rodape____Link>
                    </Rodape___Categoria>
                    <Rodape___Categoria>
                        <Rodape____Link href="#">Filosofia</Rodape____Link>
                    </Rodape___Categoria>
                    <Rodape___Categoria>
                        <Rodape____Link href="#">Astrologia</Rodape____Link>
                    </Rodape___Categoria>
                    <Rodape___Categoria>
                        <Rodape____Link href="#">Linguística</Rodape____Link>
                    </Rodape___Categoria>
                    </Rodape__Categorias>
                    <Copyright>&copy; Instituto Cultural Agrovileiro 2022</Copyright>
                </Rodape>
        </Corpo>
        </>
    );
}

export default Artigos;