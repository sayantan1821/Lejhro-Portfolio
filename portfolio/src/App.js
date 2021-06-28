import './App.css';
import LandingSection from './components/Landing-section/LandingSection';
import aboutPage from './components/about-page/aboutPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hello
        </a>
      </header>
      <aboutPage/>
    </div>
    
  );
}

export default App;
