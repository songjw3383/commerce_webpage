import React, {useState, useEffect} from 'react'
import './App.css';
import MainContent from './components/contents/MainContent';
import SignIn from './components/contents/SignIn';
import Nav from './components/navigation/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from './components/contents/Items';
import About from './components/contents/About';
import Footer from './components/contents/Footer';
import { commerce } from './lib/commerce';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])



  return (
    <div className="app">
      <Router>
        <Nav />
          <Switch>
            <Route path="/" exact={true} render={() => <MainContent />} />
            <Route path="/signin" render={() => <SignIn />} />
            <Route path="/Products" render={() => <Items products={products}/>} />
            <Route path="/About" render={() => <About />} />
          </Switch>
        
      </Router>
        
    </div>
  );
}

export default App;
