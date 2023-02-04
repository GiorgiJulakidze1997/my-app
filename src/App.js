
import './App.css';
import equilibrium from './images/image-equilibrium.jpg';
import etheriumImg from './images/icon-ethereum.svg';
import clockImg from './images/icon-clock.svg';
import avatarImg from './images/image-avatar.png';
import viewImg from './images/icon-view.svg';

function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="images-box">
          <img src={equilibrium} className="equilibrium-img" alt="image of equilibrium"/>
          <img src={viewImg} className="view-img" alt="image of view logo"/>
        </div>
        <h2 className="title blue-hover">Equilibrium #3429</h2>
        <p className="text">Our Equilibrium collection promotes balance and calm.</p>

        <div className="numbers-box">
          <div className="etherium-box">
            <img src={etheriumImg} alt="image of etherium"/>
            <p className="text-etherium">0.041 ETH</p>
          </div>
          <div className="clock-box">
            <img src={clockImg} alt="image of clock"/>
            <p className="clock-text">3 days left</p>
          </div>
        </div>    

        <hr style={{backgroundColor: '#2E405A',}}/>

        <div className='avatar-box'>
          <img src={avatarImg} className="avatarImg" alt="image of avatar"/>
          <div className="avatar-texts-box">
            <p className="founder-index">Creation of</p>
            <p className="founder-name blue-hover">Jules Wyvern</p>
          </div>
        </div>

      </div>
    </div>
  );
};













export default App;
