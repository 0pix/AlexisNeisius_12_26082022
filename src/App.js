import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/user/12/")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        setData(data);
      })
      .catch(function (err) {
        console.log(err, " error");
      });
  }, [setData]);

  if (data.length === 0) {
    return;
  }
  console.log(data.data.keyData.calorieCount);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
