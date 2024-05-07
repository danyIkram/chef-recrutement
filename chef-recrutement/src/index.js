import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Navbar, Footer} from './pages/layout';
import { Profil } from './pages/profil';
import { Vacataires } from './pages/vacataires';
import { WeeklySchedule } from './pages/emploiDuTemps';
import { Recrutement } from './pages/recrutement';
import { Conventions } from './pages/conventions';
import { Annonces } from './pages/annonces';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return(
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Profil />} />
          <Route path="/" element={<Profil />} />
          <Route path="/vacataires" element={<Vacataires />} />
          <Route path="/emploiDuTemps" element={<WeeklySchedule />} />
          <Route path="/recrutement" element={<Recrutement />} />
          <Route path="/conventions" element={<Conventions />} />
          <Route path="/annonces" element={<Annonces />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



