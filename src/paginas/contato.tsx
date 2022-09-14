import React, {useState} from 'react';
import '../reset.css';
import '../css/App.css';
import {Corpo, Fundo, Cabecalho, CabecalhoSuperior, Menu, Item, CabecalhoInferior, TextoDoCabecalho} from '../styles';
import {Principal, Articles, Article, Article__Image, Article__Div, Article___Informacao, Article__Titulo, Article___Data, Article__Paragrafo, Article__Botao, Article__Hr, Articles__Titulo, Lateral, Lateral__Lista, Lateral___Item, Lateral___Hr, The_Article, The_Article__Image, The_Article__Titulo, The_Article__Texto} from './artigosStyle';
import {Copyright, Rodape, Rodape__Categorias, Rodape___Categoria, Rodape____Link} from '../rodapeStyle';
import {Link, useParams} from 'react-router-dom';
import { Artigo__Botao } from '../principalStyle';
import {artigos} from './constArtigos';
import {Membros_, Membro, Membro__Imagem, Membro__Informacao, Membro___Nome, Membro___Sobre} from './membrosStyle';
import {Contato_, Secao__Contato, Contato__Div, Contato___Imagem, Contato___Titulo, Contato___Contato} from './contatoStyle';

function Contato(){

    const [gurus, setGurus] = useState(['Olavo de Carvalho', 'Padre Paulo Ricardo', 'J.R.R Tolkien', 'G.K Chesterton', 'Dostoiévski', 'Scott Hahn', 'Louis Lavelle', 'Sergio Leone','Santo Tomás de Aquino', 'Padre Sertillanges', 'John Ford','Frank Capra']);

    const [livrosInfluentes, setLivrosInfluentes] = useState(['O Senhor dos Anéis', 'O Hobbit', 'A Vida Intelectual', 'A Educação da Vontade', 'O Jardim das Aflições', 'A Morte de Ivan Ilitch', 'Caminho', 'Forja', '1984']);

    const [contatos, setContatos] = useState([
        {
            nome: 'Whatsapp',
            imagem: require('../img/contato/whatsapp (3).png'),
            contato: '(47) 11111-1111'
        },
        {
            nome: 'Instagram',
            imagem: require('../img/contato/instagram.png'),
            contato: '@stuart_caio'
        },
        {
            nome: 'Telegram',
            imagem: require('../img/contato/telegram.png'),
            contato: '(47) 11111-1111'
        },
        {
            nome: 'Email',
            imagem: require('../img/contato/email.png'),
            contato: 'meuemail@gmail.com'
        }
    ]);

    return(
        <>
        <Corpo>
            <Fundo>
                <Cabecalho style={{backgroundImage: `url(${require('../img/terra-media.jpg')})`, height: '75vh', backgroundPosition: 'center'}}>
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
                    </CabecalhoSuperior>
                    <CabecalhoInferior>
                        <TextoDoCabecalho style={{textAlign: 'center'}}>Contato</TextoDoCabecalho>
                    </CabecalhoInferior>
                </Cabecalho>
                <Principal>
                    <Contato_>
                        <Articles__Titulo>Contato</Articles__Titulo>
                            <Secao__Contato>
                                {contatos.map((contato) => (
                                    <Contato__Div>
                                        <Contato___Imagem src={contato.imagem} />
                                        <Contato___Titulo>{contato.nome}</Contato___Titulo>
                                        <Contato___Contato>{contato.contato}</Contato___Contato>
                                    </Contato__Div>
                                ))}
                            </Secao__Contato>
                    </Contato_>
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
            </Fundo>
        </Corpo>
        </>
    );
}

export default Contato;