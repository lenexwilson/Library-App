import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import OverAll from './components/OverAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddBook/>}/>
      <Route path='/SearchBook' element={<SearchBook/>}/>
      <Route path='/DeleteBook' element={<DeleteBook/>}/>
      <Route path='/OverAll' element={<OverAll/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
