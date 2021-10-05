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
import ItemDetail from './components/contents/ItemDetail';
import Cart from './components/contents/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);

    setCart(cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, { quantity });

    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmpty = async () => {
    const {cart} = await commerce.cart.empty();

    setCart(cart)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <div className="app">
      <Router>
        <Nav totalItems={cart.total_items}/>
            <Route path="/" exact={true} render={() => <MainContent />} />
          <Switch>
            <Route path="/signin" render={() => <SignIn />} />
            <Route path="/Products/:id" render={(props) => <ItemDetail {...props} />} />
            <Route path="/Products" render={() => <Items onAddToCart={handleAddToCart} products={products} />} />
            <Route path="/About" render={() => <About />} />
            <Route path="/Cart" render={() => 
              <Cart 
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmpty={handleEmpty}
                />} />
          </Switch>
          
      </Router>
      
        
    </div>
  );
}

export default App;
