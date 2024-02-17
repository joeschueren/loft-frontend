import "./Location.css";
import Map from "./Map/Map";

const Location: React.FC = () => {
    return(
    <div className="location-container">
        <div className="location-row">
            <div className="location-map">
                <Map/>
            </div>
            <div className="location-text">
                <span className="location-bold">Location & Hours<br/><br/></span>
                <span className="location-title">Connie's Loft<br/><br/></span>
                <div className="location-info">
                    <span className="location-address">
                        9354 Mentor Avenue<br/>
                        Mentor, OH 44060, US <br/>
                        Floor 2 | Loft 25 <br/><br/>
                        440-525-3238 <br/><br/>
                        conniek319@gmail.com
                    </span>
                    <span className="location-hours">
                        Tuesday 11am - 7pm<br/><br/>
                        Thursday 11am - 8pm<br/><br/>
                        Friday 12pm - 6pm<br/><br/>
                        Saturday 8am - 1pm<br/>
                    </span>
                </div>
                <a className="directions" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir//9354+Mentor+Ave,+Mentor,+OH+44060/@41.6784031,-81.3872,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8831a5d04881ebbd:0x72dbded505b3f2be!2m2!1d-81.304798!2d41.6783043?entry=ttu">Get Directions</a>
            </div>
            <div>
            </div>
        </div>
    </div>)
}

export default Location;