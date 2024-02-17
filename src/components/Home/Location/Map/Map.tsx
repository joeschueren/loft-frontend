import "./Map.css";
import { MapContainer,  TileLayer, Marker } from "react-leaflet";

const Map: React.FC = () => {

    const mapContainerProps: any = {
        center:[41.67862, -81.30479],
        zoom: 17,
        style: {
            width: "100%",
            height: "400px"
        }
    }

    return(
        <div className="map-container">
            <MapContainer {...mapContainerProps}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;https://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[41.67862, -81.30479]}/>
            </MapContainer>
        </div>)
}

export default Map;