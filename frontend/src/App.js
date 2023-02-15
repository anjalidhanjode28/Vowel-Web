import logo from './logo.svg';
import './App.css';
import  Navbar  from './components/Navbar';
import { AllRoutes } from './components/AllRoutes';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
     <AllRoutes />
     
    </div>
  );
}

export default App;
