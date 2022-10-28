
import './App.css';
import Header from './Header.js';
import Home from './Home.js';

function App() {
  return (
    //Use BEM naming convention
    <div className="app">
     {/* <h1>Amazon Clone</h1> */}
     { <Header />}
     {<Home />}
     
    </div>
  );
}

export default App;
