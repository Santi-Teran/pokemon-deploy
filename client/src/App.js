import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home';
import Create from './views/CreatePokemon/CreatePokemon';
import Detail from './views/Detail/Detail';
import About from './views/About/About';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/create' component={Create} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
