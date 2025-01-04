import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { signOut } from 'firebase/auth'; // Import Firebase signOut
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { themeColors } from '../data/dummy';
import { useStateContext } from '../Context/ContextProvider';
import { auth } from '../firebase'; // Import your Firebase auth object

const ThemeSetting = () => {
  const {
    setColor,
    setMode,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="bg-black bg-opacity-50 fixed top-0 right-0 w-screen nav-items z-[9]">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-zinc-900 w-96 z-[100]">
        <div className="flex items-center justify-between p-4">
          <p className="text-lg font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Logout Button */}
        

        {/* Theme Options */}
        <div className="flex flex-col border-t-[1px] border-black p-4">
          <p className="font-semibold text-xl">Theme Options</p>
          <div className="flex gap-8 mt-4">
            <div>
              <input
                type="radio"
                id="light"
                name="theme"
                value="Light"
                onChange={(e) => setMode(e.target.value)}
                checked={currentMode === 'Light'}
                className="cursor-pointer"
              />
              <label className="ml-2 cursor-pointer" htmlFor="light">
                Light
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="dark"
                name="theme"
                value="Dark"
                onChange={(e) => setMode(e.target.value)}
                checked={currentMode === 'Dark'}
                className="cursor-pointer"
              />
              <label className="ml-2 cursor-pointer" htmlFor="dark">
                Dark
              </label>
            </div>
          </div>
        </div>

        {/* Theme Colors */}
        <div className="flex flex-col border-t-[1px] border-black p-4">
          <p className="font-semibold text-xl">Theme Colors</p>
          <div className="flex gap-2 mt-3">
            {themeColors.map((color, index) => (
              <div key={index}>
                <button
                  className="w-9 h-9 rounded-full cursor-pointer"
                  style={{ backgroundColor: color.color }}
                  onClick={() => setColor(color.color)}
                >
                  <BsCheck
                    className={`ml-2 text-2xl text-white ${
                      color.color === currentColor ? 'block' : 'hidden'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-startd px-4 mb-4">
          <button
            onClick={handleLogout}
            className=" text-white font-medium px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            style={{background: currentColor}}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetting;
