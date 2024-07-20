import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DartsGame from './pages/DartsGame';
import NumbersPage from './pages/NumbersPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>  
        <Route path='/darts' element={<DartsGame/>}/> 
        <Route path='/numbers' element={<NumbersPage/>}/> 
        {/* <Route path='*' element={<NotFoundPage/>}/>  */}
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
