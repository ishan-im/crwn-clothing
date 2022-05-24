import HomePage from "./pages/HomePage/HomePage";
import ShopComponent from "./pages/shop/ShopComponent";

import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={HomePage} />
            <Route path="/shop" element={ShopComponent}/>
        </Routes>
    </div>
  );
}

export default App;
