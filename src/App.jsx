
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Attendence from './Pages/Attendence';
import Student from './Pages/Students';

function App() {
  return (
    <div style={{ backgroundColor: "#F0F4F7", height: "100vh" }}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attendance/:year/:stream/:subject" element={<Attendence />} />
            <Route path="/attendance/:year/:stream/:subject/:student" element={<Student />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

