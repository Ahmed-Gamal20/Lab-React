import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import NotFounded from './Components/NotFounded/NotFounded';
import ViewProduct from './ViewProduct/ViewProduct';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/pro" component={Products} exact/>
      <Route path="/view/:id" component={ViewProduct} exact/>
      <Route path="*" component={NotFounded} exact/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
