import React, { useEffect, useState } from 'react';

export const SideNavContext = React.createContext();

const SideNavProvider = ({ children }) => {
  const [showNav,ShowNavFun] = useState(false);
  const [extendNav,extendNavFun] = useState(false);
  const [LessThan1000, setLessThan1000] = useState(false);
  const [LessThan800, setLessThan800] = useState(false);

  useEffect(() => {
    const handleResize = (ev) => {
      if (ev < 1000) {
        setLessThan1000(true);
      } else {
        setLessThan1000(false);
      }
    };

    window.addEventListener('resize', handleResize(window.innerWidth));

    return () => {
      window.removeEventListener('resize', handleResize(window.innerWidth));
    };
  }, []);

  useEffect(() => {
    const handleResize = (ev) => {
      if (ev < 700) {
        setLessThan800(true);
      } else {
        setLessThan800(false);
      }
    };

    window.addEventListener('resize', handleResize(window.innerWidth));

    return () => {
      window.removeEventListener('resize', handleResize(window.innerWidth));
    };
  }, []);

  const setShowNav=(c)=>{
    ShowNavFun(c)
  }

  const setExtendNav=(c)=>{
    extendNavFun(c)
  }

  return (
    <SideNavContext.Provider value={{ showNav,setShowNav,extendNav,setExtendNav,LessThan1000,LessThan800 }}>
      {children}
    </SideNavContext.Provider>
  );
};

export default SideNavProvider;