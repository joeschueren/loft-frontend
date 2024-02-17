import "./Footer.css";

const Footer: React.FC = () => {
    return(
    <div className="footer-container">
        <div className="footer-logo">
            <img src="connie-logo-white.png" alt="connie's loft"></img>
        </div>
        <div className="footer-content">
            <div className="content-col">
                <span className="col-title">Appointment</span>
                <a className="col-link" target="_blank" rel="noopener noreferrer" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services"><span className="cta-footer">Book Now</span></a>
                <a className="col-link" target="_blank" rel="noopener noreferrer" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">View Services</a>
                <a className="col-link" href="mailto:conniek390@gmail.com">Message</a>
            </div>
            <div className="content-col">
                <span className="col-title">Services</span>
                <a className="col-link" href="#hair">Hair</a>
                <a className="col-link" href="#hair-color">Hair Color</a>
                <a className="col-link" href="#nails">Nails</a>
                <a className="col-link" href="#brows">Brows & Lashes</a>
                <a className="col-link" href="#styling">Hair Styling</a>
            </div>
            <div className="content-col social-col">
                <span className="col-title">Connect</span>
                <a className="col-link" href="/blog">Blog</a>
                <a className="col-link" target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/conniesloft3">
                    <i className="footer-icon fa-brands fa-facebook fa-xl"></i>
                </a>
                <a className="col-link" target="_blank" rel="noreferrer noopener" href="https://www.pinterest.com/conniekov25/">
                    <i className="footer-icon fa-brands fa-pinterest fa-xl"></i>
                </a>
                <a className="col-link" href="mailto:conniek319@gmail.com">
                    <i className="footer-icon fa-solid fa-envelope fa-xl"></i>
                </a>
            </div>
        </div>
    </div>)
}

export default Footer;