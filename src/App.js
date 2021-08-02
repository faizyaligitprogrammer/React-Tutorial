import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './container/Home';
import Sign_in from './container/Sign_in';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact ></Route>
        <Route path='/Sign_in' component={Sign_in} ></Route>

          
      
      </Switch>
    </div>
  );
}

export default App;
