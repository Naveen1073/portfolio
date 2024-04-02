
import './App.css';
import Navbar from './component/navbar/Navbar';
import Hero from './component/content/content';
import AboutMe from './component/about/about';
import MyProject from './component/projects/projects';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <AboutMe/>
     <MyProject/>
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
