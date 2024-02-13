
import './App.css';
import ImageCrousal from './components/ImageCrousal';
import SeachItemFromList from './components/SeachItemFromList';
import ShowDataInTable from './components/ShowDataInTable';
import StarRating from './components/StarRating';
import StopWatch from './components/StopWatch';

function App() {
  return (
    <div className="App">
     {/* <StarRating limit={10} rating={3}/> */}
     {/* <SeachItemFromList/> */}
     {/*<ImageCrousal/>*/}
     {/* <ShowDataInTable/> */}
     <StopWatch/>
    </div>
  );
}

export default App;
