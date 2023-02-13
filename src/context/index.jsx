import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter === 0 ? 0 : counter - 1);
  const reset = () => setCounter(0);
  return (
    <Context.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
