import logo from './logo.svg';
import './App.css';
import './pages/registation/RegistationPages';
import './pages/LoginPages/Login';
import RegistrationPages from './pages/registation/RegistationPages';
import LoginPages from './pages/LoginPages/Login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
             {/* < RegistationPages />        */}
           {/* < LoginPages />       */}
           <BrowserRouter>
        <Switch>
          <Route path= "/login" component={LoginPages} />
          <Route path= "/registration" component={RegistrationPages} />
        </Switch>
      </BrowserRouter>
  );
       
      
     
    </div>
  );
}

export default App;
