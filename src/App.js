import './App.css';
import Discover from './components/discover/discover';
import Earn from './components/earn_free/earn';
import Future from './components/future/future';
import Head from './components/header';
import HotBid from './components/hot_bid/hot_bid';
import Hot_collection from './components/hot_collection/h_collection';
import Maine from './components/main';
import Section_1 from './components/section_1';
import Sellers from './components/sellers/sellers';
import Footer from './components/footer/footer';


function App() {
  return (
    
    <div className="App">
      <Head/>
      <Maine/>
      <Section_1/>
      <Future/>
      <Sellers/>
      <HotBid/>
      <Hot_collection/>
      <Discover/>
      <Earn/>
      <Footer/>
      
    </div>
  );
}

export default App;
