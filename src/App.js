import logo from './logo.svg';
import './App.css';
import CreateBread from './Components/Admin/CreateBread';
import Bar from './Components/Admin/Bar/Bar';
import Admin from './Components/Admin/Content/Admin';
import Products from './Components/Admin/Content/Products';
import Dashboard from './Components/Admin/Content/Dashboard';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Admin />} >
              <Route path='/Products' element={<Products />} />
            </Route>
            
        </Routes>
      </BrowserRouter>
  );
}

export default App;
