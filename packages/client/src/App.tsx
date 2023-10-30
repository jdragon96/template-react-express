import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SharedUtils, Model } from "@proj/shared";

export const App = () => {
  const clickMsgTester = () => {
    SharedUtils.print("test");
  };

  const clickSaveBoox = (page: number, name: string) => {
    var newBook: Model.Book = {
      page: page,
      name: name
    };
    SharedUtils.print(newBook.name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={clickMsgTester}>테스트 버튼</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
