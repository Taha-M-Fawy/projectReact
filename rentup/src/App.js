
import './App.css';
import Header from './components/common/header/Header';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
   <>
   


   <Router>
   <Header/>
      
      
        <Switch>
          <Route exact path = '/' component = {Home } />
        
        
        </Switch>
      
    </Router>
   </>
  
  );
}

export default App;
