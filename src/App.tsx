import React from 'react';
import './reset.css';
import './css/App.css';
import {Corpo, Fundo, Cabecalho, CabecalhoSuperior, Menu, Item, CabecalhoInferior, TextoDoCabecalho} from './styles';
import {ParagráfoSobre, Principal, Principal__Secao, Principal___Titulo, Artigos, Artigo, Artigo__Imagem, Artigo__Título, Artigo__Autor, Artigo__Botao} from './principalStyle';
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
            </Principal__Secao>
          </Principal>
      </Corpo>
    </>
  );
}

export default App;