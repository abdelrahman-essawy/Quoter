import './App.css';
import Navbar from './Navbar/Navbar';
import Api from './Quotes/Api';
import { InfinitySpin } from 'react-loader-spinner'
import $ from 'jquery';
import { useEffect } from 'react';


function App() {
  // window.addEventListener('load', () => {
  // })
  // $('spinner').hide()
  useEffect(() => {
    $(document).ready(function () {
      $(".Page").show()

    });

    return () => {
    }
  }, [])

  return (
    <>

      <div className='Page'>
        <div className='landing'>
        </div>

          <div className='spinner'>
            <h1>Quoter App</h1>
            <InfinitySpin
              width='200'
              color="#4fa94d"
            />
        </div>
        <Navbar />
        <div className="App container d-flex justify-content-center ">
          <Api />
        </div>
      </div>
    </>
  );
}

export default App;
