
import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
     <StarRating limit={10} rating={3}/>
    </div>
  );
}

export default App;
