import "./App.css";
import About from "./components/landing/About";
import Contact from "./components/landing/Contact";
import Footer from "./components/landing/Footer";
import Home from "./components/landing/Home";
import Testimonial from "./components/landing/Testimonial";
import Work from "./components/landing/Work";



function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

