import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { Routes,Route } from 'react-router-dom';
import Home from './containers/Home/index';
function App() {
  return (
   <Routes>
      <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
      </Route>
   </Routes>
  );
}

export default App;
