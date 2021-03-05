import React, { createContext, useState } from 'react';

export const NavContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
});

const NavState = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <NavContext.Provider value={{ isMenuOpen, toggleMenuMode }}>{children}</NavContext.Provider>
  );
};

export default NavState;