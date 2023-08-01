import './App.scss';
import Navbar from './components/Navbar/Navbar';

import HomePage from './pages/HomePage/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage selectedVideo={0}/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;