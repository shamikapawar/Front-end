import Login from "./pages/Login";
import './Style.scss'
import Home from "./pages/Home";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Company from "./pages/Company";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="company" element={<Company/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
