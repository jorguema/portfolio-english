import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter, Link, useLocation } from "react-router-dom"
import Home from './Home';
import About from './About';
import { useEffect } from 'react';
import Navbar from './Navbar';

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   console.log('Location changed');
  //   debugger;
  // }, [location]);

  return (
    <div className="App">
      {/* <header className="App-header">
        hello react
      </header> */}



        <BrowserRouter>

        <Navbar></Navbar>
          <Routes>
            {/* <Route element={<Layout />} > */}

            <Route >
              <Route exact path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
