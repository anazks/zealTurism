
import Banner from './components/Banner/Banner';
import Custom from './components/customNow/Custom';
import Header from './components/Header/Header';
import Hotel from './components/HotelRecom/Hotel';
import MidCard from './components/MidCards/MidCard';
import Widget from './components/widget/Widget';
import './App.css'
import Global from './components/Global/Global';
import TravelTips from './components/Travel_Tips/TravelTips';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Widget/>
        <MidCard/>
        <Hotel/>
        <MidCard holiday={true} /> 
     {/* <Custom/> */}
     <Global/>
     <TravelTips/>
    <br>
    </br>
    <br>
    </br>
     <Footer/>
    </div>
  );
}

export default App;
