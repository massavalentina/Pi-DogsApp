import './App.css';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import LandingPage from './Components/LandingPage'
import Home from './Components/Home';
import Detail from './Components/Detail.jsx'
import FormDog from './Components/FormDog';
import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/home/:id' component={Detail}/>
        <Route exact path='/create' component={FormDog}/> 
       

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;