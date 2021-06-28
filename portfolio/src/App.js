import React from "react"
import './App.css';
import Testimonials from "./components/Testimonials";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Projects/>
     <Testimonials/>
    </div>
  );
}

export default App;
