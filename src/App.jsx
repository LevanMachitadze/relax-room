import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './assets/R.png';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import light from './assets/light.webp';
import dark from './assets/darkIcon.jpg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Router>
        <div
          className={`min-h-screen flex flex-col ${
            darkMode ? 'bg-black text-yellow-500' : 'bg-white text-black'
          }`}
        >
          <header className='max-w-[1600px] w-full flex items-center p-4 justify-between'>
            <div>
              <Link to='/Main'>
                <img
                  src={Logo}
                  alt='Logo'
                  className='sm:w-40 sm:h-40 w-20 h-20'
                />
              </Link>
            </div>

            <nav className='w-[70%] mr-28 hidden md:flex'>
              <ul className='w-full flex justify-between list-none'>
                <li className='hover:text-yellow-300'>
                  <Link to='/Main'>მთავარი</Link>
                </li>
                <li className='hover:text-yellow-300'>
                  <Link to='/AboutUs'>ჩვენს შესახებ</Link>
                </li>
                <li className='hover:text-yellow-300'>
                  <Link to='/Services'>პაკეტები</Link>
                </li>
                <li className='hover:text-yellow-300'>
                  <Link to='/Gallery'>გალერეა</Link>
                </li>
              </ul>
            </nav>

            <div className='flex items-center space-x-4'>
              <button
                onClick={toggleTheme}
                className='text-sm md:text-base mr-8 w-20 h-20'
              >
                <img src={darkMode ? light : dark} alt='lightDark' />
              </button>

              <button
                onClick={toggleMenu}
                className='md:hidden text-yellow-500'
              >
                {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>
          </header>

          <div
            className={`md:hidden ${menuOpen ? 'block' : 'hidden'} ${
              darkMode ? 'bg-black text-yellow-500' : 'bg-white text-black'
            } p-4 text-center`}
          >
            <ul>
              <li className='hover:text-yellow-300'>
                <Link to='/Main' onClick={toggleMenu}>
                  მთავარი
                </Link>
              </li>
              <li className='hover:text-yellow-300'>
                <Link to='/AboutUs' onClick={toggleMenu}>
                  ჩვენს შესახებ
                </Link>
              </li>
              <li className='hover:text-yellow-300'>
                <Link to='/Services' onClick={toggleMenu}>
                  პაკეტები
                </Link>
              </li>
              <li className='hover:text-yellow-300'>
                <Link to='/Gallery' onClick={toggleMenu}>
                  გალერეა
                </Link>
              </li>
            </ul>
          </div>

          <main className='flex-grow flex items-center justify-center border-solid border-yellow-400 border-[2px] rounded-[30px]'>
            <Routes>
              <Route path='/Main' element={<Main />} />
              <Route path='/AboutUs' element={<AboutUs />} />
              <Route path='/Services' element={<Services />} />
              <Route path='/Gallery' element={<Gallery />} />
            </Routes>
          </main>

          <footer
            className={`w-full flex justify-center items-center p-4 ${
              darkMode ? 'bg-black text-yellow-500' : 'bg-white text-black'
            }`}
          >
            <div className='w-[450px] text-center flex flex-col'>
              <span>
                Number:{' '}
                <span
                  className={`${
                    darkMode
                      ? 'text-white hover:text-yellow-100'
                      : ' text-red-700 hover:text-red-300'
                  }`}
                >
                  {' '}
                  555 555 555
                </span>
              </span>
              <span>
                Mail:{' '}
                <span
                  className={`${
                    darkMode
                      ? 'text-white hover:text-yellow-100'
                      : ' text-red-700 hover:text-red-300'
                  }`}
                >
                  relaxRoom@Gmail.com
                </span>
              </span>
              <span>
                Address:{' '}
                <span
                  className={`${
                    darkMode
                      ? 'text-white hover:text-yellow-100'
                      : ' text-red-700 hover:text-red-300'
                  }`}
                >
                  Marjanishvili street
                </span>
              </span>
              <span>
                <a
                  href='https://www.facebook.com/people/%E1%83%A0%E1%83%94%E1%83%9A%E1%83%90%E1%83%A5%E1%83%A1-%E1%83%A0%E1%83%A3%E1%83%9B%E1%83%98-Relax-Room/100095126013059/'
                  className='underline text-blue-600 hover:text-blue-400'
                  target='_blank'
                >
                  CLICK HERE FOR FACEBOOK PAGE
                </a>
              </span>
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
