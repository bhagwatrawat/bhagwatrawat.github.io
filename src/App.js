
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import About from './components/about/about';
import Content from './components/content/content';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <div className="__gradients">
        <Navbar/>
      </div>
      <div className="__Header" id="home">
        <Header/>
      </div>
      <About />
      <Content/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
