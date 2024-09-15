import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Data from './components/Data';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/searchQuery/:userName' element={<Data/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
