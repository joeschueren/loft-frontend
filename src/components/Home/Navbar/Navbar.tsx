import "./Navbar.css";
import { useState } from "react";

const Navbar: React.FC = () => {

    const [isToggled, setIsToggled] : [Boolean, any] = useState(false);

    const handleToggle = (e: any) => {
        setIsToggled(!isToggled);
    }

    return(
        <div id="navbar" className="navbar">
            <div className="mobile-div">
                <img className="nav-title" src="connie-logo.png"></img>
                <div className="mobile">
                    <i className="fa-solid fa-bars fa-2xl" onClick={handleToggle}></i>
                </div>
            </div>
            <div className={isToggled ? "link-div": "link-div hidden"}>
                <div className="nav-item">
                    <a className="nav-anchor highlight" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">Book Now</a>
                </div>
                <div className="nav-item">
                    <a className="nav-anchor" href="https://shop.saloninteractive.com/store/ConniesLoft">Products</a>
                </div>
                <div className="nav-item">
                    <a className="nav-anchor" href="/pricing">Pricing</a>
                </div>
                <div className="nav-item">
                    <a className="nav-anchor" href="/blog">Blog</a>
                </div>
                <div className="nav-item">
                    <a className="nav-anchor" href="https://www.facebook.com/conniesloft3">
                        <i className="fa-brands fa-facebook fa-xl"></i>
                    </a>
                    <a className="nav-anchor" href="https://www.pinterest.com/conniekov25/">
                        <i className="fa-brands fa-pinterest fa-xl"></i>
                    </a>
                    <a className="nav-anchor" href="mailto:conniek319@gmail.com">
                        <i className="fa-solid fa-envelope fa-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;