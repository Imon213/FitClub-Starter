import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Program from './Components/Program/Program';
import Reasons from './Components/Reasons/Reasons';
import Join from './Components/Testimonials/Join/Join';
import Testimonials from './Components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
         <Hero />
         <Program />
         <Reasons />
         <Plans />
         <Testimonials />
         <Join />
         <Footer />
    </div>
  );
}

export default App;
