import { EthProvider } from "./contexts/EthContext";
import Footer from "./components/Footer";
import Seracher from "./components/searcher";
import Home from "./pages/home";
import Shop from "./pages/shop";

import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';
import Goods from "./pages/goods";

function App() {
  return (
    <EthProvider>
       <Router>
      <div id="App">
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/shop/1" element={<Goods/>}/>

          </Routes>
         
      
      </div>
      </Router>
    </EthProvider>
  );
}

export default App;
//    
//       <div className='App'>
//       <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/shop" element={<Shop/>}/>
//           <Route path="/login" element={<Login/>}/>   
//           <Route path="/shop/item1" element={<Goods/>}/>  
//           <Route path="/shop/:id" element={<Goods/>} />
//         </Routes>
        
//     </div>
//     </Router>
