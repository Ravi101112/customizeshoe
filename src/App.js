
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from './Navbar'
import {Thejourney} from './Thejourney'
import {Team} from "./Team"
import {Store} from "./Store"
import {Contact} from "./Contact"
function App() {
  return (
    <Router>
      <Navbar />
  
      <Routes>
          <Route exact path="/" element={<Thejourney/>}/>
          <Route exact path="/Team" element={<Team/>}/>
          <Route exact path="/Store" element={<Store/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
        </Routes>
     
    </Router>
  );
}

export default App;