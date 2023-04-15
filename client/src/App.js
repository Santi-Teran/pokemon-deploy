import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home';
import Create from './views/CreatePokemon/CreatePokemon';
import Detail from './views/Detail/Detail';
import About from './views/About/About';
import axios from 'axios';
import Favorites from './views/Favorites/Favorites';
axios.defaults.baseURL = 'https://pokemon-deploy-production.up.railway.app/';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/create' component={Create} />
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
