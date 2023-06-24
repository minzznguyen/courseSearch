import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import LoginPage from './pages/login';
import DetailsPage from './pages/details';
import ProgressPage from './pages/progress';
import FinderPage from './pages/finder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<LoginPage/>}></Route>
        <Route path="/details" element = {<DetailsPage/>}></Route>
        <Route path="/find" element = {<FinderPage/>}></Route>
        <Route path="/progress" element = {<ProgressPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;


