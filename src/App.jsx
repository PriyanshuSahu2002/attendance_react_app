
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Attendence from './Pages/Attendence';

function App() {
  return (
    <div style={{ backgroundColor: "#F0F4F7", height: "100vh" }}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attendance" element={<Attendence />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

