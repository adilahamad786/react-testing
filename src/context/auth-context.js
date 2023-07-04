import { createContext, useState } from "react";

const AuthContext = createContext({
  data: "This is data from react context store!",
  counter: 0,
  updateCounter: (value) => {},
});

export const AuthContextProvider = (props) => {
  const [counter, setConunter] = useState(0);

  const updateCounter = (value) => {
    if (value)
        setConunter(pre => pre+value);
    else
        setConunter(pre => pre+1);
  };

  return (
    <AuthContext.Provider
      value={{
        data: "This is data from react context store!",
        counter: counter,
        updateCounter: updateCounter,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
