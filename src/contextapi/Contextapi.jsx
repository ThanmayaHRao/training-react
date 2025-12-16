import React, { useEffect, useState, createContext } from "react";

export const GlobalDataContext = createContext();

const ContextAPI = ( props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <GlobalDataContext.Provider value={{ users }}>
      {props.children}
    </GlobalDataContext.Provider>
  );
};

export default ContextAPI;
