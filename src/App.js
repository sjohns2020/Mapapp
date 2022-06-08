import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import Map from './components/Map';
import './App.css';





function App() {
  return (
    <div id="App">
    <Map id="mainMap" />
    </div>
  );
}

export default App;
