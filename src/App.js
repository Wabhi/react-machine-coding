
import './App.css';
import ImageCrousal from './components/ImageCrousal';
import SeachItemFromList from './components/SeachItemFromList';
import ShowDataInTable from './components/ShowDataInTable';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
     {/* <StarRating limit={10} rating={3}/> */}
     {/* <SeachItemFromList/> */}
     {/*<ImageCrousal/>*/}
     <ShowDataInTable/>
    </div>
  );
}

export default App;
