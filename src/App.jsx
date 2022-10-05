import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Quote from './Quotes/Quote';
import Api from './Quotes/Api';

function App() {
  return (
    <>

    <div className='Page'>
      <Navbar />
        
      <div className="App container d-flex justify-content-center ">

        <Api />

      </div>

    </div>
      
    </>
  );
}

export default App;
