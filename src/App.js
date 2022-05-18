import "./App.css";
import Header from "./Components/header";
import TextUtils from "./Components/TextUtils";
import Alert from "./Components/Alert";
import About from "./Components/About";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleDarkMode = (cls) => {
    if(cls) {
      console.log(cls);
    } else {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#042743";
        showAlert("Dark mode has been enabled!", "success");
        document.title = "Text Utils - Dark Mode";
      } else {
        setMode("light");
        document.body.style.backgroundColor = "White";
        showAlert("Light mode has been enabled!", "success");
        document.title = "Text Utils - Light Mode";
      }
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header siteTitle="Text Util" searchBar={false} mode={mode} toggleMode={toggleDarkMode} />
        <Alert alert={alert} />
        <Routes>
          <Route index element={<TextUtils showAlert={showAlert} mode={mode} />} />
          <Route extact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;
