import React from 'react'
import pic1 from "../images/pic1.jpg"
import "../styles/Testimonials.css"

function Testimonials() {

    return (
        <section className="testimonials">
           <h1>Testimonials</h1> 
    <div className="container">
    <div className="card">
    <div className="top">
        <img src={pic1} alt="profile" className="left"/>
    </div>
    <div className="social"></div>
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
