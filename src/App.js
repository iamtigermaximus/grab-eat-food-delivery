import {BrowserRouter,Switch, Route} from 'react-router-dom'
//COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//PAGES
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'

const App = () => {
  
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
            <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
