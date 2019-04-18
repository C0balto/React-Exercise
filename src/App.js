import React, { Component } from 'react';
import './App.css';



class App extends Component {
 

  filmes = [
    {titulo: 'Rambo', genero: 'Ação - Guerra' , tempo:'1h80m', img:'http://4.bp.blogspot.com/-JpNL3rIJ-5I/VbpOelZ2zbI/AAAAAAAAByI/Vbc75pXF45k/s1600/rambo-1-92153_0x410.jpg' , className: 'net-box' },
    {titulo: 'Top GUn', genero: 'WAAAR' , tempo:'' , img:'https://images.impresa.pt/sic/2018-10-04-Top-Gun-H.jpg/original/mw-860' , className: 'net-box' },
    {titulo: 'De volta para o Futuro', genero: '' , sinopse:'' , img:'https://cdn3.movieweb.com/i/article/VV4J9sA629Ap6KG9RmCPPoXCWIXdGE/798:50/Back-To-The-Future-Movie-Facts-Trivia.jpg' , className: 'net-box' },
    {titulo: 'Caça Fantasmas', genero: '' , sinopse:'' , img:'https://l3apq3bncl82o596k2d1ydn1-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/ghostbusters-810x433.jpg' , className: 'net-box' },
    {titulo: 'Emmanuelle', genero: '' , sinopse:'' , img:'https://i.ytimg.com/vi/9sGKE-raw-c/maxresdefault.jpg' , className: 'net-box' },
    {titulo: 'Uma Cilada para Roger Rabbit', genero: '' , sinopse:'' , img:'https://pausadrammatica.files.wordpress.com/2018/06/uma-cilada-para-roger-rabbit-03.jpg?w=640' , className: 'net-box' },
    {titulo: '', genero: '' , sinopse:'' , img:'https://fotos.caras.uol.com.br/media/images/large/2015/08/19/img-690242-mortal-kombat20150819111439993534.jpg' , className: 'net-box' },
    {titulo: 'Felix the cat', genero: '' , sinopse:'' , img:'https://www.nfsa.gov.au/sites/default/files/styles/img2x992x0/public/screenings/asset11-2018/felix-the-cat_1600x775.jpg?itok=aDqu1vZD&timestamp=1542073269' , className: 'net-box' }
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
    {titulo: 'Jurassic World', genero: 'Ação - Ficção' , tempo:'1h80m', img:'https://cdn.awsli.com.br/239/239279/produto/7086307/painel-para-decoracao-de-festa-infantil-jurassic-world-87620bbe.jpg' , className: 'net-box' },
    {titulo: 'Avatar', genero: 'Ficçao - Guerra' , tempo:'' , img:'https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg' , className: 'net-box' },
    {titulo: 'Zootopia', genero: '' , sinopse:'' , img:'https://images.alphacoders.com/685/685151.jpg' , className: 'net-box' },
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
    return (
      <div>
        <header className="net-header">
          <nav>
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
          </nav>
          <div className="topfilm" onMouseOver={this.seevideo}>
            <iframe src="https://www.youtube.com/embed/nO_DIwuGBnA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </header>
        <section className="titles"> 
          <div className="rowname">Filmes das Antigas<p/></div>
          <div id="slider" className="organize">
            <button id='end' className='teste' onClick={this.scrollEnd}> End </button>
            {this.filmes.map(filmes => {
              return (
                <div className={filmes.className} style={{backgroundImage:`url(${filmes.img})`}}> <div className='texto'>{filmes.titulo} <br/> <p/> {filmes.tempo} <br/> <p/> {filmes.genero}</div> </div>
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
                <div className={filmeslancamentos.className} style={{backgroundImage:`url(${filmeslancamentos.img})`}}> <div className='texto'>{filmeslancamentos.titulo} <br/> <p/> {filmeslancamentos.tempo} <br/> <p/> {filmeslancamentos.genero}</div> </div>
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