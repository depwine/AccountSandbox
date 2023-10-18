import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({});

    /* fetch if needed ?
  useEffect(() => {
    if (!ingredientsMaster) {
      fetch("https://feed-me.herokuapp.com/api/ingredients")
        .then((res) => res.json())
        .then((data) => {
          setIngredientsMaster(data.data);
        })
        .catch((err) => {
          console.log("Error, ", err);
        });
    }
  }, []); 
  */

  return (
    <UserContext.Provider
      value={{
        user, setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};