// import logo from './logo.svg';
import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironhack from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';




function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src={ironhack} alt='IronHack'/>
        <img src={menu} alt='Menu'/>
      </div>
    
      <div className='body1'>
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
        <p>You will learn how to use the most popular frontend library and become a super Ninja developer</p>
        <button className='body1Btn'>Awesome!</button>
      </div>

      <div className='body2'>

        <div className='box'>
          <img src={icon1} alt='icon1'/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className='box'>
          <img src={icon2} alt='icon2'/>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state</p>
        </div>

        <div className='box'>
          <img src={icon3} alt='icon3'/>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className='box'>
          <img src={icon4} alt='icon4'/>
          <h2>JSX</h2>
          <p>Staticallu.typed, designed to run on modern brouwsers.</p>
        </div>

      </div>
      
    </div>
  );
}

export default App;
