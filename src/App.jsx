import './App.scss';
import Navbar from './components/Navbar/Navbar';

import HomePage from './pages/HomePage/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoUpload from './pages/VideoUpload/VideoUpload';

function App() {


  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage selectedVideo={0}/>}></Route>
        <Route path="/HomePage" element={<HomePage selectedVideo={0}/>}></Route>
        <Route path="/VideoUpload" element={<VideoUpload />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;