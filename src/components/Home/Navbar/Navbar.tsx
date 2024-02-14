import "./Navbar.css";

const Navbar: React.FC = () => {
    return(
        <div className="navbar">
            <div className="nav-item">
                <a className="nav-anchor" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">Book Online</a>
            </div>
            <div className="nav-item">
                <a className="nav-anchor" href="https://shop.saloninteractive.com/store/ConniesLoft">Products</a>
            </div>
            <div className="nav-title">Connie's Loft</div>
            <div className="nav-item">
                <a className="nav-anchor" href="/pricing">Pricing</a>
            </div>
            <div className="nav-item">
                <a className="nav-anchor" href="/blog">Blog</a>
            </div>
        </div>
    )
}

export default Navbar;