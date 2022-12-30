import './App.css';
import Favorites from './Components/Favorites';
import Meals from './Components/Meals';
import Search from './Components/Search';
import Modals from './Components/Modals';
import Header from './Components/Header';
function App() {
  return (
    <div>
      <Header/>
      <Search/>
    <Favorites/>
    <Modals/>
     <Meals/>
    
    </div>
  );
}

export default App;
