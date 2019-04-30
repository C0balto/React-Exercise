import React, { Component } from 'react';
import { Modal, Button, Row, Col, Card, CardTitle } from 'react-materialize';
import './App.css';



class App extends Component {
 

  filmes = [
    {titulo: 'Rambo', genero: 'Ação, Guerra' , tempo:'1h 33min', sinopse:'Um veterano da Guerra do Vietnã usa todo seu treinamento e agressividade exercitada nos campos de batalha quando é preso e torturado por policiais' ,img:'http://4.bp.blogspot.com/-JpNL3rIJ-5I/VbpOelZ2zbI/AAAAAAAAByI/Vbc75pXF45k/s1600/rambo-1-92153_0x410.jpg' , className: 'net-box' },
    {titulo: 'Top Gun', genero: 'Ação, Guerra' , tempo:'', sinopse:'A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite. Quando o piloto Maverick é enviado para a escola, sua atitude irresponsável e comportamento arrogante o coloca em desacordo com os outros pilotos, especialmente Iceman.' , img:'https://images.impresa.pt/sic/2018-10-04-Top-Gun-H.jpg/original/mw-860' , className: 'net-box' },
    {titulo: 'De volta para o Futuro', genero: 'Ficção', tempo:'1h 40min' , sinopse:'Marty McFly, um adolescente de uma pequena cidade californiana, é transportado para a década de 1950 quando a experiência do excêntrico cientista Doc Brown dá errado. Viajando no tempo em um carro modificado, Marty conhece versões jovens de seus pais...' , img:'https://cdn3.movieweb.com/i/article/VV4J9sA629Ap6KG9RmCPPoXCWIXdGE/798:50/Back-To-The-Future-Movie-Facts-Trivia.jpg' , className: 'net-box' },
    {titulo: 'Caça Fantasmas', genero: 'Comédia , Ação, Fantasia', tempo: '1h 45min' , sinopse:'Uma equipe de cientistas, Dr. Egon, Dr. Ray e Dr. Peter, perde o emprego em uma universidade de Nova York. Eles decidem, então, se tornar caçadores de fantasmas e travar uma batalha de alta tecnologia com o sobrenatural por dinheiro. Com isso, se deparam com uma porta de entrada para outra dimensão …' , img:'https://l3apq3bncl82o596k2d1ydn1-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/ghostbusters-810x433.jpg' , className: 'net-box' },
    {titulo: 'Emmanuelle',genero:'Porno, Softcore',tempo:'1h 45min' , sinopse:'Emmanuelle é um filme erótico softcore de 1974 dirigido por Just Jaeckin e estrelado por Sylvia Kristel.' , img:'https://i.ytimg.com/vi/9sGKE-raw-c/maxresdefault.jpg' , className: 'net-box' },
    {titulo: 'Uma Cilada para Roger Rabbit', genero:'Fantasia, Policial' , tempo:'1h 44min' , sinopse:'Na Hollywood dos anos 1940, uma época em que seres humanos e personagens de desenho animado existiam lado a lado, o coelho Roger Rabbit é acusado de um crime que não cometeu e se une a um detetive para limpar o seu nome e tentar provar a sua inocência.' , img:'https://pausadrammatica.files.wordpress.com/2018/06/uma-cilada-para-roger-rabbit-03.jpg?w=640' , className: 'net-box' },
    {titulo: 'Double Dragon', genero: '' , sinopse:'' , img:'http://www.adventuresinpoortaste.com/wp-content/uploads/2019/01/doubledragon-ttg7_1280w-min.jpg' , className: 'net-box' },
    {titulo: 'Castelo Ratimbum', genero: '' , sinopse:'' , img:'https://tvcultura.com.br/upload/tvcultura/programas/programa-castelo.jpg' , className: 'net-box' }
  ];
  scrollEnd() {
    var scrolldiv = document.getElementById("slider");
    scrolldiv.scrollTo({
      left: 900,
      behavior: 'smooth'
    })
  }
  scrollStart() {
    var scrolldiv = document.getElementById("slider");
    scrolldiv.scrollTo({
      left: -900,
      behavior: 'smooth'
    })
  }
  
  filmeslancamentos = [
    {titulo: 'Jurassic World', genero: 'Ação, Ficção' , tempo:'1h80m', img:'https://cdn.awsli.com.br/239/239279/produto/7086307/painel-para-decoracao-de-festa-infantil-jurassic-world-87620bbe.jpg' , className: 'net-box' },
    {titulo: 'Avatar', genero: 'Ficção, Guerra' , tempo:'' , img:'https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg' , className: 'net-box' },
    {titulo: 'Zootopia', genero: '' , sinopse:'Em uma cidade de animais, uma raposa falante se torna uma fugitiva ao ser acusada de um crime que não cometeu. O principal policial do local, o incontestável coelho, sai em sua busca.' , img:'https://images.alphacoders.com/685/685151.jpg' , className: 'net-box' },
    {titulo: 'Avangers', genero: '' , sinopse:'' , img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/13A26/production/_106022408_avnegers976.jpg' , className: 'net-box' },
    {titulo: 'Petter Rabbit', genero: '' , sinopse:'' , img:'https://i2.wp.com/www.vcreporter.com/wp-content/uploads/2018/02/WEB_hbz-peter-rabbit-EDITED.jpg?resize=1025%2C640&ssl=1' , className:'net-box' },
    {titulo: 'Ghost In The Shell', genero: '' , sinopse:'' , img:'https://media.gq.com/photos/58dd6d0ebf444b06a49ccfbe/16:9/w_1280,c_limit/scarlett_johansson_ghost_in_the_shell-wide.jpg' , className: 'net-box' },
    {titulo: 'Player number 1', genero: '' , sinopse:'' , img:'https://sm.ign.com/ign_br/news/r/ready-play/ready-player-one-doesnt-have-a-post-credits-scene-but-should_vf96.jpg' , className: 'net-box' },
    {titulo: 'Tate No Yusha', genero: '' , sinopse:'' , img:'https://i0.wp.com/1realahora.com/wp-content/uploads/2019/01/7.png?fit=1796%2C954' , className: 'net-box' }
  ];
  scrollEnd1() {
    var scrolldiv = document.getElementById("slider2");
    scrolldiv.scrollTo({
      left: 900,
      behavior: 'smooth'
    })
  }
  scrollStart1() {
    var scrolldiv = document.getElementById("slider2");
    scrolldiv.scrollTo({
      left: -900,
      behavior: 'smooth'
    })
  }
  
 
  
  render() {
    const trigger = <div className='modalcall'></div>;
    return (
      <div>
        <header className="net-header">
          <div className='menu'>
            <ul>
              <li className="brand">
                <img src="https://assets.brand.microsites.netflix.io/assets/ee4ee5fe-b99f-11e7-9274-06c476b5c346.gif?v=57" alt='netflixbrand'/>
              </li>
              <li>
                home
              </li>
              <li>
                tvshows
              </li>
              <li>
                Movies
              </li>
              <li>
                Recently Added
              </li>
              <li>
                My List
              </li>
            </ul>
          </div>
          <div className="topfilm">
              
          </div>
        </header>
        <section className="titles"> 
          <div className="rowname">Filmes das Antigas<p/></div>
          <div id="slider" className="organize">
            <button id='end' className='teste' onClick={this.scrollEnd}> End </button>
            {this.filmes.map(filmes => {
              return (
                <div className={filmes.className} style={{backgroundImage:`url(${filmes.img})`}}> 
                  {filmes.titulo}
                  <Modal className='try' header={filmes.titulo} fixedFooter trigger={trigger}>
                    <Row>
                      <Col s={6}>
                        <img className='inmodal'src={filmes.img}/>
                      </Col>
                      <Col s={6}>
                      {filmes.tempo}&nbsp;-&nbsp;&nbsp;{filmes.genero}<br/><hr/>{filmes.sinopse}
                      </Col>
                    </Row> 
                  </Modal>
                </div>
              )
            }) }
            <button id='start' className='teste' onClick={this.scrollStart}> Start </button>
          </div>
          
        </section>
        <section className="titles2">
          <div className="rowname">Lançamentos<p/></div>
          
          <div id="slider2" className="organize">
            <button id='end' className='teste' onClick={this.scrollEnd1}> End </button>
            {this.filmeslancamentos.map(filmeslancamentos => {
              return (
                <div className={filmeslancamentos.className} style={{backgroundImage:`url(${filmeslancamentos.img})`}}>
                  {filmeslancamentos.titulo}
                  <Modal className='try' header={filmeslancamentos.titulo} fixedFooter trigger={trigger}>
                    <Row>
                      <Col s={6}>
                        <img className='inmodal'src={filmeslancamentos.img}/>
                      </Col>
                      <Col s={6}>
                      {filmeslancamentos.tempo}&nbsp;-&nbsp;&nbsp;{filmeslancamentos.genero}<br/><hr/>{filmeslancamentos.sinopse}
                      </Col>
                    </Row>
                  </Modal>
                </div>
              )
            }) }
            <button id='start' className='teste' onClick={this.scrollStart1}> Start </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;