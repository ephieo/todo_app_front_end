import pic1 from './images/pic1.jpeg'
import pic2 from './images/pic2.jpeg'
import pic3 from './images/pic3.gif'
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={pic1} className="App-logo" alt="logo" />
        <img src={pic3} className="App-logo" alt="logo" />
        <img src={pic2} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
