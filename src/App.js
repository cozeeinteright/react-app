import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './page/Home'
import About from './page/About'
import ShowCalender from './components/ShowCalender'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to My page</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>  
      </BrowserRouter>  
      <ShowCalender />
    </div>
  );
}

export default App;
