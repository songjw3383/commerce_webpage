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
import Project from './components/contents/Project';
import Checkout from './components/contents/Checkout';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('')

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

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();

    setCart(cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart)

  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      
      setOrder(incomingOrder)
      
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <div className="app">
      <Router>
        <Nav totalItems={cart.total_items}/>
          <Switch>
            <Route path="/" exact={true} render={() => <MainContent />} />
            <Route path="/signin" render={() => <SignIn />} />
            <Route path="/Products/:id" render={(props) => <ItemDetail {...props} />} />
            <Route path="/Products" render={() => <Items onAddToCart={handleAddToCart} products={products} />} />
            <Route path="/checkout" render={() => <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error ={errorMessage} refreshCart={refreshCart}/>} />
            <Route path="/About" exact={true} render={() => <About />} />
            <Route path="/Project" render={() => <Project />} />
            <Route path="/Cart" render={() => 
              <Cart 
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
                />} />
          </Switch>
          
      </Router>
      
        
    </div>
  );
}

export default App;
