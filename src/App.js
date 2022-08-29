import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import VerticalMenu from "./components/layouts/VerticalMenu";
import Page from "./components/Page";

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
  console.log(data.data);

  return (
    <Router>
      <div className="App">
        <Header />
        <VerticalMenu />
        <Routes>
          <Route path="/" element={<Page>{<Home data={data.data} />}</Page>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
