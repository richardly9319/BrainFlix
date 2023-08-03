import './App.scss';
import Navbar from './components/Navbar/Navbar';

import HomePage from './pages/HomePage/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoUpload from './pages/VideoUpload/VideoUpload';

function App() {


  return (
    
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/HomePage/:videoID" element={<HomePage />}></Route>
        <Route path="/VideoUpload" element={<VideoUpload />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;