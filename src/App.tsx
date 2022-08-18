import React from "react";
import "./App.css";
import HeadScreen from "./components/HeadScreen/HeadScreen";
import BenefitsScreen from "./components/BenefitsScreen/BenefitsScreen";
import FormScreen from "./components/FormScreen/FormScreen";
import PointScreen from "./components/PointScreen/PointScreen";
import CosmolacIsScreen from "./components/CosmolacIsScreen/CosmolacIsScreen";
import InNumbersScreen from "./components/InNumbersScreen/InNumbersScreen";
import AccordionScreen from "./components/AccordionScreen/AccordionScreen";
import MailingScreen from "./components/MailingScreen/MailingScreen";
import BuyScreen from "./components/BuyScreen/BuyScreen";
import ConnectScreen from "./components/ConnectScreen/ConnectScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cookie from "./components/common/Cookie/Cookie";

function App() {
  return (
    <div className="app">
      <Cookie mobile={false}></Cookie>
      <Header></Header>
      <HeadScreen></HeadScreen>
      <BenefitsScreen></BenefitsScreen>
      <PointScreen></PointScreen>
      <CosmolacIsScreen></CosmolacIsScreen>
      <InNumbersScreen></InNumbersScreen>
      <AccordionScreen></AccordionScreen>
      <FormScreen></FormScreen>
      <MailingScreen></MailingScreen>
      <BuyScreen></BuyScreen>
      <ConnectScreen></ConnectScreen>
      <Footer></Footer>
    </div>
  );
}

export default App;
