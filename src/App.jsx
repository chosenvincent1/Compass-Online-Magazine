import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home';
import Technology from './pages/Technology';
import Science from './pages/Science';
import Business from './pages/Business';
import Travel from './pages/Travel';
import Sports from './pages/Sports';
import Health from './pages/Health';
import Food from './pages/Food';
import World from './pages/World';
import Fashion from './pages/Fashion';
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage /> } />
          <Route path='/technology' element={<Technology /> } />
          <Route path='/science' element={<Science /> } />
          <Route path='/business' element={<Business /> } />
          <Route path='/travel' element={<Travel /> } />
          <Route path='/food' element={<Food /> } />
          <Route path='/health' element={<Health /> } />
          <Route path='/world' element={<World /> } />
          <Route path='/sports' element={<Sports /> } />
          <Route path='/fashion' element={<Fashion /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
