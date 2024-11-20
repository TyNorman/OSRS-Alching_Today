import logo from './logo.svg';
import './App.css';
import AlchPreview from './AlchPreview/AlchPreview.js';

//OSRS Grand Exchange API endpoint: prices.runescape.wiki/api/v1/osrs
//Abyssal Whip ID for testing: https://prices.runescape.wiki/api/v1/osrs/latest?id=4151

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <AlchPreview/>
        </p>
      </header>
    </div>
  );
}

export default App;
