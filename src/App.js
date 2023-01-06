import { Route, Routes } from 'react-router-dom';
import './App.css';
import Glavniy from './pages/Glavniy';
import PageUslugi from './pages/PageUslugi';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <Glavniy />}/>
        <Route path='/pageUslugi' element={ <PageUslugi /> } />
      </Routes>
    </div>
  );
}

export default App;
