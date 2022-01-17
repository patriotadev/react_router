import './App.css';
import Home from './components/Home';
import Data from './components/Data'
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import DataDetail from './components/DataDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
        <Routes>
            <Route path={'/'} exact element={<Home/>}></Route>
            <Route path={'/data'} element={<Data/>}></Route>
            <Route path={'/data/:id'} element={<DataDetail/>}></Route>
            <Route path={'/about'} element={<About/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
