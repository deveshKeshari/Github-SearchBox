import './App.css';  
import GithubAPI from './components/GithubAPI';

function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-dark bg-dark'>
        <a href='/' className='navbar-brand'>React with Github User Search (HTTP Calls)</a>
      </nav>
      <GithubAPI/>
    </div>
  );
}

export default App;
