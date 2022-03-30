import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/pages/Layout";
import Home from "./component/pages/Home";
import Contact from "./component/pages/Contact";
import LoginReg from "./component/pages/Auth/LoginReg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index  element={<Home />} />
            <Route path='contact' element={<Contact/>}/> 
            <Route path='loginreg' element={<LoginReg/>}/> 

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
