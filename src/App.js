import './App.css';
import StarWars from './components/StarWars';
import {
  BrowserRouter,
  Link, 
  Route, 
  Switch
} from "react-router-dom";
import Info from './components/Info'

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <div className= "container">
        <h1>Luke API Walker</h1>
        <StarWars></StarWars>
        <Switch>
          <Route path = "/:category/:id">
            <Info></Info>
          </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
