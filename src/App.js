import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './Style.css'

import Container from '@material-ui/core/Container';

import HomeContainer from './containers/HomeContainer'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './components/About'
import Contact from './components/Contact'
import NotFoundPage from './components/pages/NotFoundPage'
import AddProduct from './components/product/AddProduct'
import EditProduct from './components/product/EditProduct'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Navbar></Navbar>
        <div className="container jumbotron text-center" style={{background:"#fff"}}>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/shop" component={HomeContainer} />
              <Route exact path="/product/add" component={AddProduct} />
              <Route exact path="/product/edit/:id" component={EditProduct} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route component={NotFoundPage} />
            </Switch>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
