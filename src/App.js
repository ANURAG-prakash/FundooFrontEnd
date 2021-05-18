import logo from './logo.svg';
import './App.css';
import './pages/registation/RegistationPages';
import './pages/LoginPages/Login';
import RegistrationPages from './pages/registation/RegistationPages';
import LoginPages from './pages/LoginPages/Login';
import Notes from './pages/Notes/Notes';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
              {/* < RegistrationPages />         */}
            {/* < LoginPages />        */}
             <BrowserRouter>
        <Switch>
          <Route path= "/login" component={LoginPages} />
          <Route path= "/registration" component={RegistrationPages} />
          <Route path="/notes" component={Notes}/>
        </Switch>
      </BrowserRouter> 
   
  
     {/* <Note/>   */}
      
     
    </div>
  );
}

export default App;
