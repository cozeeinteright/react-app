import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import ShowCalendar from './components/ShowCalender';
import Home from './page/Home'
import About from './page/About'

function App() {
  return (
    <div className="App">
      /learn react/1
      <Header />
      <ShowCalendar />
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>      
    </div>
  );
}

export default App;
