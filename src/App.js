import './App.css';
import {Routes , Route} from "react-router-dom"
import Navs from './componet/Navs';
import Login from './componet/Login';
import Signup from './componet/Signup';
import Home from "./componet/Home"
import Cardss from './componet/Cardss'
import Footer from './componet/Footer'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Navs/>
            <Home/>
            <Cardss/>
            <Footer/>
          </>
        }/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
