import { useState, useEffect } from "react";
import "./App.css";
import "./styles/global.css";
import Profil from "./pages/profil/Profil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import VerticalMenu from "./components/layouts/VerticalMenu/VerticalMenu";

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

  console.log(data.data);

  if (data.data === undefined || data.data === null) {
    return;
  }

  return (
    <Router>
      <Header />
      <VerticalMenu />
      <div className="App">
        <Routes>
          <Route path="/user/:id" element={<Profil data={data.data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
