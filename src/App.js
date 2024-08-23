import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import NotFounded from './Components/NotFounded/NotFounded';
import ViewProduct from './ViewProduct/ViewProduct';
import Favorites from './Components/Favorite/Favorite';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/pro" component={Products} exact/>
      <Route path="/favorite" component={Favorites} exact/>
      <Route path="/view/:id" component={ViewProduct} exact/>
      <Route path="*" component={NotFounded} exact/>
     </Switch>
     <Footer/>

     </BrowserRouter>
    </div>
  );
}

export default App;
