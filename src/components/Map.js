import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Popup } from 'react-leaflet'
import { Marker } from 'react-leaflet'
import './Map.css';

const Map = () => {
    
    const position = [55.94, -3.20]
    const position2 = [55.86, -4.25]
    const listofPosition = [position, position2]
    const markerNodes = listofPosition.map((position) => (
            <Marker position={position}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
    ))
    
    return ( 

        <MapContainer id="map" center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerNodes}
        </MapContainer>
     );
}
 
export default Map;