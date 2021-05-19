import LoginPages from './pages/LoginPages/Login';
import RegistrationPages from './pages/registation/RegistationPages';
import Dashboard from './pages/Notes/Dashboard';
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
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter> 
   
  
     {/* <Note/>   */}
      
     
    </div>
  );
}

export default App;

