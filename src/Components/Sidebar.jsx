import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/dummy.jsx';
import { useStateContext } from '../Context/ContextProvider.jsx';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2`;
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:text-black hover:bg-gray-100 dark:hover:text-black m-2';

  return (
    <div
      className={`h-screen bg-gray-50 dark:bg-zinc-700 md:overflow-hidden overflow-auto pb-10 transform transition-all duration-300 ${
        activeMenu ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              className="font-extrabold text-xl flex gap-3 ml-4 mt-4 items-center text-gray-700 dark:text-gray-200"
              to="/"
              onClick={() => handleCloseSideBar()}
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <div>
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl mt-4 p-3 hover:bg-light-gray block"
              >
                <MdOutlineCancel />
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-700 dark:text-gray-200 font-medium m-3 mt-4">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    onClick={() => handleCloseSideBar()}
                    key={link.name}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    style={({isActive}) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
