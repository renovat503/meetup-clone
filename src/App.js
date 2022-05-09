import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import HowWorks from './components/HowWorks';
import Upcoming from './components/Upcoming';
import Popular from './components/Popular';
import Connected from './components/Connected';
import Stories from './components/Stories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <HowWorks />
      <Upcoming />
      <Popular/>
      <Connected/>
      <Stories/>
      <Footer/>
    </div>
  );
}

export default App;
