import React, {useState} from 'react';
import '../reset.css';
import '../css/App.css';
import {Corpo, Fundo, Cabecalho, CabecalhoSuperior, Menu, Item, CabecalhoInferior, TextoDoCabecalho} from '../styles';
import {Principal, Articles, Article, Article__Image, Article__Div, Article___Informacao, Article__Titulo, Article___Data, Article__Paragrafo, Article__Botao, Article__Hr, Articles__Titulo, Lateral, Lateral__Lista, Lateral___Item, Lateral___Hr} from './artigosStyle';
import {Copyright, Rodape, Rodape__Categorias, Rodape___Categoria, Rodape____Link} from '../rodapeStyle';
import {Link} from 'react-router-dom';
import { Artigo__Botao } from '../principalStyle';

function Artigos(){

    const [artigos, setArtigos] = useState([
        {
            id: 1,
            imagem: require('../img/senhor_dos_aneis.jpg'),
            titulo: 'Simbolismo em O Senhor dos Anéis',
            categoria: 'Literatura',
            autor: 'Caio Stuart',
            data: '10/09/2022',
            texto: 'ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ex dignissimos ad, illum voluptate incidunt voluptatem. Doloribus quisquam, totam voluptatem autem quas error sed deleniti magnam cupiditate, mollitia temporibus doloremque. ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor labore totam earum, quisquam, nobis soluta a dignissimos et ea repellat, tempora sint aspernatur recusandae?'
        },
        {
            id: 2,
            imagem: require('../img/topgun-maverick.jpg'),
            titulo: 'Por que Top Gun: Maverick fez tanto sucesso?',
            categoria: 'Cinema',
            autor: 'Alexandre Sampaio',
            data: '11/09/2022',
            texto: 'ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ex dignissimos ad, illum voluptate incidunt voluptatem. Doloribus quisquam, totam voluptatem autem quas error sed deleniti magnam cupiditate, mollitia temporibus doloremque. ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor labore totam earum, quisquam, nobis soluta a dignissimos et ea repellat, tempora sint aspernatur recusandae?'
        },
        {
            id: 3,
            imagem: require('../img/monarquia-brasileira.jpg'),
            titulo: 'Em Defesa da Monarquia Brasileira',
            categoria: 'História',
            autor: 'Gabriel Ovidor',
            data: '12/09/2022',
            texto: 'ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ex dignissimos ad, illum voluptate incidunt voluptatem. Doloribus quisquam, totam voluptatem autem quas error sed deleniti magnam cupiditate, mollitia temporibus doloremque. ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor labore totam earum, quisquam, nobis soluta a dignissimos et ea repellat, tempora sint aspernatur recusandae?'
        }
    ]);

    const [gurus, setGurus] = useState(['Olavo de Carvalho', 'Padre Paulo Ricardo', 'J.R.R Tolkien', 'G.K Chesterton', 'Dostoiévski', 'Scott Hahn', 'Louis Lavelle', 'Sergio Leone','Santo Tomás de Aquino', 'Padre Sertillanges', 'John Ford','Frank Capra']);

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
                                    <Article__Botao>Leia mais</Article__Botao>
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
                    </Lateral>
                </Principal>
            </Fundo>
        </Corpo>
        </>
    );
}

export default Artigos;