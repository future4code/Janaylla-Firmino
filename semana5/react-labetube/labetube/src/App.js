import logo from './img/logo.png';
import iconePesquisa from './img/magnifier_icon.ico';


import './App.css';

function App() {
  const titulo ="Titulo do video";
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  return (
    <div className="App">
      <header>
        <div id="logo">
          <a href="index.html">
            <img src={logo} alt="logo" />
            <h3>LabeTube</h3>
          </a>
        </div>
        <div id="pesquisa">
          <input type="search" />
          <img src={iconePesquisa} alt="botão de pesquisa" />
        </div>

      </header>
      <nav class="menu">
        <ul>
          <li class="botoes-meunu-vertical">Início</li>
          <li class="botoes-meunu-vertical">Em alta</li>
          <li class="botoes-meunu-vertical">Inscrições</li>
          <li class="botoes-meunu-vertical">Originais</li>
          <li class="botoes-meunu-vertical">Histórico</li>
        </ul>
      </nav>
      <main>

        <section id="videos">
          <div class="video-box">
            <a href="#" onClick={reproduzVideo}>

              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <img src={logo} class="filtro" />
            </a>
            <h4>{titulo}</h4>
            <p>In at rutrum eros. Quisque sem augue, fermentum non enim et, tincidunt condimentum nulla...</p>
          </div>

          <div class="video-box">
            <a href="#" onClick={reproduzVideo}>

              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <img src={logo} class="filtro" />
            </a>
            <h4>{titulo}</h4>
            <p>In at rutrum eros. Quisque sem augue, fermentum non enim et, tincidunt condimentum nulla...</p>
          </div>
          <div class="video-box">
            <a href="#" onClick={reproduzVideo}>

              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <img src={logo} class="filtro" />
            </a>
            <h4>{titulo}</h4>
            <p>In at rutrum eros. Quisque sem augue, fermentum non enim et, tincidunt condimentum nulla...</p>
          </div>
          <div class="video-box">
            <a href="#" onClick={reproduzVideo}>

              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <img src={logo} class="filtro" />
            </a>
            <h4>{titulo}</h4>
            <p>In at rutrum eros. Quisque sem augue, fermentum non enim et, tincidunt condimentum nulla...</p>
          </div>
          <div class="video-box">
            <a href="#" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <img src={logo} class="filtro" />
            </a>
            <h4>{titulo}</h4>
            <p>In at rutrum eros. Quisque sem augue, fermentum non enim et, tincidunt condimentum nulla...</p>
          </div>
          <div class="video-box">
            <a href="#" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <img src={logo} class="filtro" />
            </a>
            <h4>{titulo}</h4>
            <p>In at rutrum eros. Quisque sem augue, fermentum non enim et, tincidunt condimentum nulla...</p>
          </div>
          <div class="video-box">
            <a href="#" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <img src={logo} class="filtro" />
            </a>
            <h4>{titulo}</h4>
            <p>In at rutrum eros. Quisque sem augue, fermentum non enim et, tincidunt condimentum nulla...</p>
          </div>
          <div class="video-box">
            <a href="#" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <img src={logo} class="filtro" />
            </a>
            <h4>{titulo}</h4>
            <p>In at rutrum eros. Quisque sem augue, fermentum non enim et, tincidunt condimentum nulla...</p>
          </div>
        </section>
      </main>
      <footer>
        Todos os direitos reservados
    </footer>
    </div>
  );
}

export default App;
