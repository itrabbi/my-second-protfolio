import './App.css';
import Navbar from './commponents/Navbar/Navbar';
import Header from './commponents/Header/Header';
import About from './commponents/Aboutme/About';
import Myskills from './commponents/Myskills/Myskills';
import Service from './commponents/Service/Service.jsx';

// import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Myskills></Myskills>
      <Service></Service>
    </div>
  );
}

export default App;
