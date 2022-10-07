import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Resorts from './components/Resorts';
import Resortdetail from './components/Resortdetail';
import { useEffect, useState } from 'react';

function App() {


 
 


  return (
    <div className="">
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container px-4 px-lg-5'>
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><a className="dropdown-divider"></a></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Resorts />
          </Route>
          <Route path='/resorts/:type'>
            <Resortdetail />
          </Route>
        </Switch>
      </BrowserRouter>
      <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2022</p></div>
      </footer>
    </div>

  );
}

export default App;
