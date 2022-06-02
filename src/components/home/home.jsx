import './home.css';
import img from '../props/Findme.gif';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          {/* <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span> */}
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About FindMe Application</span> <br />
        <p>
          "FindMe" is the indoor navigation mobile application that users are
          use to find their exact destination. This mobile application is 
          build for Android users and there are steps mentioned in the "Steps"
          section in this web application. ENJOY WITH "FindMe".
      
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
