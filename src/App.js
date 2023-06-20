import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import FooterLine from "./components/FooterLine";
import Students from "./components/Students";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return <div>
    <Navbar/>
    <Slider/>
    <Services/>
    <Students/>
    <About/>
    <Footer/>
    <FooterLine/>
  </div>;
}

export default App;
