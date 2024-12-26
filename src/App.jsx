import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import ECommerce from './Dashboard/ECommerce';
import Orders from './Pages/Orders';
import Employees from './Pages/Employees';
import Customers from './Pages/Customers';
import Kanban from './Apps/Kanban'
import Calender from './Apps/Calender'
import ColorPicker from './Apps/ColorPicker'
import Editor from './Apps/Editor'

import { useStateContext } from './Context/ContextProvider'

const App = () => {

  const { activeMenu } = useStateContext()

  
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
              <h1><Sidebar/></h1>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <h1><Sidebar/></h1>
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
               <h1><Navbar/></h1>
            </div>
          

          {/* Routes */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<ECommerce/>} />
              <Route path="/ecommerce" element={<ECommerce/>} />

              {/* Pages */}
              <Route path="/orders" element={<Orders/>} />
              <Route path="/employees" element={<Employees/>} />
              <Route path="/customers" element={<Customers/>} />


              {/* Apps */}
              <Route path="/kanban" element={<Kanban/>} />
              <Route path="/editor" element={<Editor/>} />
              <Route path="/calendar" element={<Calender/>} />
              <Route path="/color-picker" element={<ColorPicker/>} />

              {/* charts  */}
              <Route path="/line" element={"Line"} />
              <Route path="/area" element={"Area"} />
              <Route path="/bar" element={"bar"} />
              <Route path="/pie" element={"pie"} />
              <Route path="/financial" element={"Financial"} />
              <Route path="/color-mapping" element={"color Mapping"} />
              <Route path="/pyramid" element={"pyramid"} />
              <Route path="/stacked" element={"stacked"} />

            </Routes>
          </div>
          {/* <Footer/> */}
          </div>

          {/* Footer */}
          <div>
            
          </div>
          
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App