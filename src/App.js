import './App.css';
import NavigationBar from './components/NavigationBar';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <NavigationBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
