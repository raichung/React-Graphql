import './App.css';
import Characters from './pages/Characters';
import { Route, Routes } from 'react-router';
import { EachCharacter } from './pages/EachCharacter';
import { Search } from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path='/' Component={Characters} />
        <Route strict exact path='/search' Component={Search} />
        <Route strict exact path='/:id' Component={EachCharacter} />
      </Routes>
    </div>
  );
}

export default App;
