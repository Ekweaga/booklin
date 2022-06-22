import logo from './logo.svg';
import './App.css';

import {AiOutlineUser} from 'react-icons/ai'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home';
import Menu from './Menu';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          
          <Home/>
        </Route>
        </Switch></BrowserRouter>
        
      
    </div>
  );
}

export default App;
