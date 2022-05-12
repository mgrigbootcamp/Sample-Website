import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './home';
import About from './About';
import Store from './Store'

export default function Header() {
  return (
    <div>
         <div id="like_button_container"></div>
    <h1>Welcome To The Sample hello Store!</h1>
    <div class="pic-div"><a href="greek pic">
        <img src="https://wallpapercave.com/wp/7l4Jmqt.jpg"alt="greek"height="250px" width="1250px" />
    </a>
    </div>
    
    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
    
    <nav>
        
        <div class="nav-menu">
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li><Link to="/store">Store</Link></li>
                <li><Link to="/contact">Contact </Link></li>
                <li><Link to="/about">About</Link></li>
                
            </ul>
        </div>
    </nav>
    {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<Store/>} />
      </Routes> */}
    </div>
  )
}
