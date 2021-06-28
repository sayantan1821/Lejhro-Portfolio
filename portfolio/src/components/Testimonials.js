import React from 'react'
import pic1 from "../images/pic1.jpg"
import "../styles/Testimonials.css"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"

function Testimonials() {

    return (
        <section className="testimonials">
           <h1>Testimonials</h1> 
    <div className="testimonial_container">
    <div className="card">
    <div className="top">
        <img src={pic1} alt="profile" className="left"/>
    </div>
    <div className="social">
      <a href="https://www.flaticon.com/search?word=twitter&type=icon" alt="social link">  <img src={facebook} alt="icon" width="30px" height="30px"/></a>
      <a href="https://www.flaticon.com/search?word=twitter&type=icon" alt="social link">  <img src={instagram} alt="icon" width="30px" height="30px"/></a>
      <a href="https://www.flaticon.com/search?word=twitter&type=icon" alt="social link">  <img src={twitter} alt="icon" width="30px" height="30px" /></a>
    </div>
    <div className="center">
    We provide react-bootstrap.js and react-bootstrap.min.js bundles with all components exported on the window.ReactBootstrap object.
     These bundles are available on unpkg, as well as in the npm package.
    </div>
    <div className="bottom"><h3>Sairambalu</h3><h4>CEO</h4></div>
    </div>
    <div className="card">
    <div className="top">
        <img src={pic1} alt="profile" className="left"/>
    </div>
    <div className="social">
      <a href="https://www.flaticon.com/search?word=twitter&type=icon" alt="social link">  <img src={facebook} alt="icon" width="30px" height="30px"/></a>
      <a href="https://www.flaticon.com/search?word=twitter&type=icon" alt="social link">  <img src={instagram} alt="icon" width="30px" height="30px"/></a>
      <a href="https://www.flaticon.com/search?word=twitter&type=icon" alt="social link">  <img src={twitter} alt="icon" width="30px" height="30px" /></a>
    </div>
    <div className="center">
    We provide react-bootstrap.js and react-bootstrap.min.js bundles with all components exported on the window.ReactBootstrap object.
     These bundles are available on unpkg, as well as in the npm package.
    </div>
    <div className="bottom"><h3>Sairambalu</h3><h4>CEO</h4></div>
    </div>
    <div className="card">
    <div className="top">
        <img src={pic1} alt="profile" className="left"/>
    </div>
    <div className="social">
      <a href="https://www.flaticon.com/search?word=twitter&type=icon" alt="social link">  <img src={facebook} alt="icon" width="30px" height="30px"/></a>
      <a href="https://www.flaticon.com/search?word=twitter&type=icon" alt="social link">  <img src={instagram} alt="icon" width="30px" height="30px"/></a>
      <a href="https://www.flaticon.com/search?word=twitter&type=icon" alt="social link">  <img src={twitter} alt="icon" width="30px" height="30px" /></a>
    </div>
    <div className="center">
    We provide react-bootstrap.js and react-bootstrap.min.js bundles with all components exported on the window.ReactBootstrap object.
     These bundles are available on unpkg, as well as in the npm package.
    </div>
    <div className="bottom"><h3>Sairambalu</h3><h4>CEO</h4></div>
    </div>
    </div>
        </section>
    )
}

export default Testimonials
