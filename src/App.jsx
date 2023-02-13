// context api
// import { useState, useContext } from "react";
// import "./App.css";
// import { Context } from "./context";

// function App() {
//   // const { counter, increment, decrement, reset } = useContext(Context);
//   // console.log(store);
//   return (
//     <div className="App">
//       {/* <h1>{counter}</h1>
//       <button onClick={increment}>inc</button>
//       <button onClick={decrement}>dec</button>
//       <button onClick={reset}>reset</button> */}
//     </div>
//   );
// }

// export default App;
import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  descrement,
  getAllUsers,
  increment,
  login,
  logout,
  reset,
} from "./app/slices/general";
const App = () => {
  const { counter, loginState, isLoading, users } = useSelector(
    (state) => state.general
  );

  // dispatch
  const dispatch = useDispatch();
  // con  sole.log(state);

  const incrementFn = () => {
    dispatch(increment());
  };
  const decrementFn = () => {
    dispatch(descrement());
  };
  const resetFn = () => {
    dispatch(reset({ resetValue: 10, name: "ahmed" }));
  };

  // api call
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div className="App">
      {/* /asasiyat */}
      {/* <h1>Hello {counter}</h1>
      <button onClick={incrementFn}>increment</button>
      <button onClick={decrementFn}>decrement</button>
      <button onClick={resetFn}>reset</button>
      <br />
      <br />
      <br />

      <h2>{loginState ? "Welcome Ahmed" : "Logout is successfully!"}</h2>
      {loginState ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login())}>LogIn</button>
      )} */}

      {/* api */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : users && users.length ? (
        <>
          <ul>
            {users.map((user) => {
              return (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default App;
