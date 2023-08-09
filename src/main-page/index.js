import logo from './logo.svg';
import './main-page.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This <b>Seyi  </b> is a <i>SuperStar</i>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          His webpage
        </a>
      </header>
    </div>
  );
}

export default App;
