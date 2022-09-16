import './App.css';
import './styles/global.css';
import Profil from './pages/profil/Profil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header/Header';
import VerticalMenu from './components/layouts/VerticalMenu/VerticalMenu';

function App() {
  return (
    <Router>
      <Header />
      <VerticalMenu />
      <div className="App">
        <Routes>
          <Route path="/profil" element={<Profil />} />
        </Routes>
        <Routes>
          <Route path="/profil/:id" element={<Profil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
