import logo from './logo.svg';
import './App.css';
import AlchPreview from './AlchPreview.js';

//OSRS Grand Exchange API endpoint: prices.runescape.wiki/api/v1/osrs
//Abyssal Whip ID for testing: https://prices.runescape.wiki/api/v1/osrs/latest?id=4151

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

          <AlchPreview/>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
