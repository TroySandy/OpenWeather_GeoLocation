import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import FetchChallenge from './components/TS_React_Challenge'
import Extra from './components/AdditionalWay'
let testProp: string = "Am I getting passed to the Clock component?";
let optionalProp: string = "You sure are!";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="verticalCenter">
        <Clock testProp={testProp} optionalProp={optionalProp} />
        <hr/>
        <FetchChallenge />
        <hr/>
        <Extra label={'Here is another way that I found'}/>
      </div>
    </div>
  );
};

export default App;
