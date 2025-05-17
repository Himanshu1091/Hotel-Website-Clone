import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Project1/Home';
import About from './Project1/About';
import Contact from './Project1/Contact';
import Footer from './Project1/Footer';
import HeaderNav from './Project1/HeaderNav';

function App() {
  return (
    <div>
      <HeaderNav></HeaderNav>
   <Home></Home>
   <About></About>
   <Contact></Contact>
   <Footer></Footer>
    </div>
  );
}

export default App;
