import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ECommerce from './Dashboard/ECommerce';
import Orders from './Pages/Orders';
import Employees from './Pages/Employees';
import Customers from './Pages/Customers';
import Kanban from './Apps/Kanban';
import Calender from './Apps/Calender';
import ColorPicker from './Apps/ColorPicker';
import Editor from './Apps/Editor/Editor';

import Line from './Charts/Line';
import Area from './Charts/Area';
import Pie from './Charts/Pie';
import Bar from './Charts/Bar';

import { useStateContext } from './Context/ContextProvider';
import ThemeSetting from './Components/ThemeSetting';

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex h-screen">
          {/* Settings Button */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white overflow-y-auto">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* Main Content */}
          <div
            className={`flex-1 ${
              activeMenu ? 'md:ml-72' : 'ml-0'
            } dark:bg-main-dark-bg bg-main-bg`}
          >
            {/* Navbar */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* Theme Settings */}
            {themeSettings && <ThemeSetting />}

            {/* Page Content */}
            <div className="overflow-y-auto h-full p-4">
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<ECommerce />} />
                <Route path="/ecommerce" element={<ECommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calender />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
              </Routes>

              
              
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
