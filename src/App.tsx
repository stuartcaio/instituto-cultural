import React from 'react';
import './reset.css';
import './css/App.css';
import {Corpo, Fundo, Cabecalho, CabecalhoSuperior, Menu, Item, CabecalhoInferior, TextoDoCabecalho} from './styles';
import {ParagráfoSobre, Principal, Principal__Secao, Principal___Titulo, Artigos, Artigo, Artigo__Imagem, Artigo__Título, Artigo__Autor, Artigo__Botao, Artigos__Botao} from './principalStyle';
import {Copyright, Rodape, Rodape__Categorias, Rodape___Categoria, Rodape____Link} from './rodapeStyle';
import {Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Corpo>
          <Fundo>
            <Cabecalho>
              <CabecalhoSuperior>
                <img className="cabecalho__logo" src={require('./img/book.png')} alt=""/>
                <Menu>
                  <Link to="/">
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
                <TextoDoCabecalho>
                  Um instituto feito por pessoas que buscam a Verdade desde cedo.
                </TextoDoCabecalho>
              </CabecalhoInferior>
            </Cabecalho>
          </Fundo>
          <Principal>
            <Principal__Secao>
              <Principal___Titulo>Sobre nós</Principal___Titulo>
                <ParagráfoSobre>
                  ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ex dignissimos ad, illum voluptate incidunt voluptatem. Doloribus quisquam, totam voluptatem autem quas error sed deleniti magnam cupiditate, mollitia temporibus doloremque. ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor labore totam earum, quisquam, nobis soluta a dignissimos et ea repellat, tempora sint aspernatur recusandae?
                </ParagráfoSobre>
                <ParagráfoSobre>
                  ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ex dignissimos ad, illum voluptate incidunt voluptatem. Doloribus quisquam, totam voluptatem autem quas error sed deleniti magnam cupiditate, mollitia temporibus doloremque. ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor labore totam earum, quisquam, nobis soluta a dignissimos et ea repellat, tempora sint aspernatur recusandae?
                </ParagráfoSobre>
            </Principal__Secao>
            <Principal__Secao>
                <Principal___Titulo>Artigos</Principal___Titulo>
                <Artigos>
                  <Artigo>
                    <Artigo__Imagem src={require('./img/senhor_dos_aneis.jpg')} />
                    <Artigo__Título>Simbolismo em Senhor dos Anéis</Artigo__Título>
                    <Artigo__Autor>Por Caio Stuart</Artigo__Autor>
                    <Artigo__Botao>Leia mais</Artigo__Botao>
                  </Artigo>
                  <Artigo>
                    <Artigo__Imagem src={require('./img/topgun-maverick.jpg')} />
                    <Artigo__Título>Por que Top Gun: Maverick fez sucesso?</Artigo__Título>
                    <Artigo__Autor>Por Alexandre Sampaio</Artigo__Autor>
                    <Artigo__Botao>Leia mais</Artigo__Botao>
                  </Artigo>
                  <Artigo>
                    <Artigo__Imagem src={require('./img/monarquia-brasileira.jpg')} />
                    <Artigo__Título>Em defesa da monarquia brasileira</Artigo__Título>
                    <Artigo__Autor>Por Gabriel Ovidor</Artigo__Autor>
                    <Artigo__Botao>Leia mais</Artigo__Botao>
                  </Artigo>
                </Artigos>
                <Link to={`/paginas/artigos`}>
                  <Artigos__Botao>Mais</Artigos__Botao>
                </Link>
            </Principal__Secao>
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

export default App;