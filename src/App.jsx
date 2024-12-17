import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip'
import './App.css'

const App = () => {

  const activeMenu = true
  

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Setting button */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <div
              content="Settings"
              position="Top"
            >
              <button
                style={{ background: "Blue", borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </div>
          </div>

          {/* SideBar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <h1>Sidebar</h1>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <h1>Sidebar Close</h1>
            </div>  
          )}

          {/* Navbar */}

          <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
          >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
               <h1>Navbar</h1>
            </div>
          </div>
          
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App