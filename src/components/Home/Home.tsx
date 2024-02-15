import { useEffect } from "react";
import "./home.css";
import Navbar from "./Navbar/Navbar";

const Home: React.FC = () => {

    useEffect(()=>{
        document.title = "Connie's Loft | Mentor, OH"
    })
    return(<div className="home-container">
        <div className="landing">
            <Navbar/>
            <div className="cta">
                <div className="cta-div">
                    <p className="cta-title">Connie Kovach</p>
                    <p className="cta-body">Stylist, Barber, Nail Tech, Brow Artist, Writer...</p>
                    <a className="cta-anchor" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">Book Now</a>
                </div>
            </div>
        </div>
    </div>)
}

export default Home;