import React from "react";
import "./App.css";
import HeadScreen from "./components/HeadScreen/HeadScreen";
import FormScreen from "./components/FormScreen/FormScreen";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <HeadScreen></HeadScreen>
      <FormScreen></FormScreen>
    </div>
  );
}

export default App;
