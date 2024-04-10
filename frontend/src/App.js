import './App.css';
import Middle from './content/Middle';
import Navbar from './components/Navbar';
import Cont from './content/Cont';
import Swipe from './content/Swipe';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cont/>
      <Middle/>
      <Swipe/>
    </div>
  );
}

export default App;
