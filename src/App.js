
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Routes} from 'react-router-dom';

///82
import Header from "./components/header/header.component";
const HatsPage = (props) => {
  console.log(props);
  return(
  <div> 
    <h1> Hats Page </h1>
  </div>)
}


const SneakersPage = () => (
  <div>
    <h1> Sneakers Page </h1>
  </div>
)


const MenPage = () => (
  <div>
    <h1> Men Page </h1>
  </div>
)


const WomenPage = () => (
  <div>
    <h1> Women Page </h1>
  </div>
)


const JacketsPage = () => (
  <div>
    <h1> Hats Page </h1>
  </div>
)

function App() {
  return (
    <div >
        <Header />
      <Routes>
        
      <Route path='/' element={<HomePage />} />
      <Route path='/shop/hats' element={<HatsPage />} />
      <Route path='/shop/sneakers' element={<SneakersPage />} />
      <Route path='/shop/jackets' element={<JacketsPage />} />
      <Route path='/shop/mens' element={<MenPage />} />
      <Route path='/shop/womens' element={<WomenPage />} />
      <Route path='/shop' element={<ShopPage />} />

      </Routes>
     
    </div>
  );
}

export default App;
