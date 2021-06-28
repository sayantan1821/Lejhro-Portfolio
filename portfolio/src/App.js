import React from "react"
import './App.css';
import Testimonials from "./components/Testimonials";
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
<Portfolio/>
     <Testimonials/>
    </div>
  );
}

export default App;
