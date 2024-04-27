import './home.css';
// import Navbar from '../navbar/navbar';
import Carousel from '../navbar/background';
import Video from '../navbar/add';
import Title1 from '../navbar/title';
import Card1 from '../navbar/card';
import Row1 from '../navbar/row';
import Head1 from '../navbar/head';
import Video1 from '../navbar/adds1';
import Foot1 from '../navbar/foot1';
// import Footer from '../navbar/footer/footer';

function home() {
  return (
    <div className="App">
    {/* <Navbar/> */}
    <Carousel/>
    <Video/>
    <Title1/>
    <Card1/>
    <Row1/>
    <Head1/>
    <Video1/>
    <Foot1/>
   
    {/* <Footer/> */}

    </div>
  );
}

export default home;
