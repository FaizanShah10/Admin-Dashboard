import { useContext, useState, createContext } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(true)
  const [currentColor, setCurrentColor] = useState("#03C9D7")
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const setMode = (mode) => {
    setCurrentMode(mode)
    localStorage.setItem('themeMode', mode)
  }

  const setColor = (color) => {
    setCurrentColor(color)
    localStorage.setItem('themeColor' ,color)
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setMode,
        setColor,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
    