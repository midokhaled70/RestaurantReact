
import './App.css';
import FooterOverlay from './components/Footer/FooterOverlay';
import Navbar from './components/Navbar/Navbar';
import { Chef, FindUs, Footer, Gallery, Intro, Laurels } from './container';
import AboutUs from './container/AboutUs/AboutUs';
import Header from './container/Header/Header';
import SpecialMenu from './container/Menu/SpecialMenu';

function App() {
  return (
    <div className="App">
<Navbar/>
<Header/>
<AboutUs/>
<SpecialMenu/>
<Chef/>
<Intro/>
<Laurels/>
<Gallery/>
<FindUs/>

<Footer/>
    </div>
  );
}

export default App;
