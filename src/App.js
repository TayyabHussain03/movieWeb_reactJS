import './App.css';
import SingleMovie from './SingleMovie'
import Home from './Home';
import Error from './Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<SingleMovie />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
