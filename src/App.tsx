import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Users from "./components/Users";
import store from "./redux/redux-store";

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;
