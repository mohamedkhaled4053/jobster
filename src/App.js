import Landing from "./pages/Landing";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Dashbaord, Error, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbaord/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
