import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

let name = "Soumya";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us"></Navbar>
      <div className="container">
        <TextForm heading="Enter the text to analyze"></TextForm>
      </div>
      <div className="container">
        <About></About>
      </div>
    </>
  );
}

export default App;
