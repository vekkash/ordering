import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Salad from './components/Salad'
import Rolls from './components/Rolls'
import Deserts from './components/Deserts'
import Sandwich from './components/Sandwich'
import Cakes from './components/Cakes'
import Pureveg from './components/Pureveg'
import Pasta from './components/Pasta'
import Noodles from './components/Noodles'
import Beverage from './components/Beverage'
import Signup from './components/Signup'
import Login from './components/Login'
import Sechome from './components/Sechome'
import Cart from './components/Cart'
import Buy from './components/Buy'
import PaymentPage from './components/PaymentPage'
// import { CartContext } from './components/CartContext'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salad" element={<Salad />} />
          <Route path="/rolls" element={<Rolls />} />
          <Route path="/Deserts" element={<Deserts />} />
          <Route path="/Sandwich" element={<Sandwich />} />
          <Route path="/Cakes" element={<Cakes />} />
          <Route path="/Pureveg" element={<Pureveg />} />
          <Route path="/Pasta" element={<Pasta />} />
          <Route path="/Noodles" element={<Noodles />} />
          <Route path="/Beverage" element={<Beverage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sechome" element={<Sechome />} />
          <Route path="/carts" element={<Cart />} />
          <Route path="/Buy" element={<Buy/>} />
          <Route path="/PaymentPage" element={<PaymentPage/>} />
          {/* <Route path="/CartContext" element={<CartContext />} /> */}
        </Routes>
      </Router>

    </div>
  )
}

export default App