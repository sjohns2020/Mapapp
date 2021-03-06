import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Popup } from 'react-leaflet'
import { Marker } from 'react-leaflet'
import './Map.css';
import { useEffect, useState } from 'react'

const Map = () => {

    const [mountains, setMountains] = useState([]);
    const [selectedMountain, setSelectedMountain] = useState([]);
    
    useEffect(() => {
        getMountains();
    }, [])
 
    const getMountains = () => {

        fetch("https://munroapi.herokuapp.com/munros")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setMountains(data);
        })
    }

    
    function HandleClick (position) {
        console.log('clicked',position);
        const map = useMap()
        console.log('map center:', map.getCenter())
        return null
        // map.setView([position.latlng_lat,position.latlng_lng])
        
    }




    const mountainPins = mountains.map((position) => (
            <Marker 
            position={[position.latlng_lat,position.latlng_lng]}
               eventHandlers={{
                click: () => {
                    HandleClick(position)
                },
              }}
               >
            <Popup>
            {position.name} <br /> {position.height}m<br /> {position.meaning}
            </Popup>
            </Marker>
    ))


    return ( 

        <MapContainer id="map" center={[56,-5]} zoom={8} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mountainPins}
        </MapContainer>
     );
}
 
export default Map;