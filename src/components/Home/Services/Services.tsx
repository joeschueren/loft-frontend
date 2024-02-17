import "./Services.css";

const Services: React.FC = () => {
    return(
    <div className="services-container">
        <h1 className="services-title">Services</h1>
        <div className="services-row">
            <div className="services-box-img">
                <img src="connie-hair.png" className="services-img" alt="Hair"></img>
            </div>
            <div className="services-box">
                <span className="section-title">Hair</span>
                <div className="section-items">
                    <div className="section-item">
                        <span className="item-name">Haircut & Style Women</span>
                        <span className="item-desc">$55.00  &middot;  1 Hour</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Express Haircut Women</span>
                        <span className="item-desc">$45.00  &middot;  45 Minutes</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Haircut Men</span>
                        <span className="item-desc">$30.00  &middot;  30 Minutes</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Haircut Girls 12-15</span>
                        <span className="item-desc">$42.00  &middot;  1 Hour</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Bang Trim</span>
                        <span className="item-desc">Price Varies  &middot;  15 Minutes</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Haircut Kids 12 & Under</span>
                        <span className="item-desc">$20.00  &middot;  30 Minutes</span>
                    </div>
                </div>
                <a className="cta-anchor services-anchor" target="_blank" rel="noreferrer noopener" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">Book Now</a>
            </div>
        </div>
        <div className="services-row">
            <div className="services-box-img">
                <img src="connie-hair.png" className="services-img" alt="Hair"></img>
            </div>
            <div className="services-box">
                <span className="section-title">Hair Color</span>
                <div className="section-items">
                    <div className="section-item">
                        <span className="item-name">Root Touch Up & Haircut</span>
                        <span className="item-desc">$120.00  &middot;  2 Hours</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Root Touch Up & Style</span>
                        <span className="item-desc">$90.00  &middot;  2 Hours</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Root Touch Up with Custom Partial Foil & Cut</span>
                        <span className="item-desc">$155.00  &middot;  2 Hours</span>
                    </div>
                    <div className="section-item">
                    <span className="item-name">Root Touch Up with Custom Partial Foil & Style</span>
                        <span className="item-desc">$125.00  &middot;  2 Hours</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Partial Highlight & Haircut</span>
                        <span className="item-desc">$135.00  &middot;  2 Hours</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">5+ More Options</span>
                        <a className="item-desc view-more" target="_blank" rel="noopener noreferrer" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">View All Options</a>
                    </div>
                </div>
                <a className="cta-anchor services-anchor" target="_blank" rel="noreferrer noopener" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">Book Now</a>
            </div>
        </div>
        <div className="services-row">
            <div className="services-box-img">
                <img src="connie-nails.png" className="services-img" alt="Nails"></img>
            </div>
            <div className="services-box">
                <span className="section-title">Nails</span>
                <div className="section-items">
                    <div className="section-item">
                        <span className="item-name">Shellac Gel Mani & Gel Polish</span>
                        <span className="item-desc">$45.00  &middot;  1 Hour</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Shellac Gel Mani with Removal</span>
                        <span className="item-desc">$50.00  &middot;  1 Hour</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Gel Overlay with Shellac Polish</span>
                        <span className="item-desc">$55.00  &middot;  1 Hour</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Basic Dry Mani</span>
                        <span className="item-desc">$35.00  &middot;  45 Minutes</span>
                    </div>
                </div>
                <a className="cta-anchor services-anchor" target="_blank" rel="noreferrer noopener" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">Book Now</a>
            </div>
        </div>
        <div className="services-row">
            <div className="services-box-img">
                <img src="connie-brow.png" className="services-img" alt="Hair"></img>
            </div>
            <div className="services-box">
                <span className="section-title">Brows & Lashes</span>
                <div className="section-items">
                    <div className="section-item">
                        <span className="item-name">Brow Shape</span>
                        <span className="item-desc">$20.00  &middot;  30 Minutes</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Brow Shape & Tint</span>
                        <span className="item-desc">$35.00  &middot;  30 Minutes</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Wax Lip</span>
                        <span className="item-desc">$20.00  &middot;  30 Minutes</span>
                    </div>
                    <div className="section-item">
                    <span className="item-name">Henna Brow</span>
                        <span className="item-desc">$55.00  &middot;  1 Hours</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Brow Shape & Face Wax</span>
                        <span className="item-desc">$35.00  &middot;  30 Minutes</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">2+ More Options</span>
                        <a className="item-desc view-more" target="_blank" rel="noopener noreferrer" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">View All Options</a>
                    </div>
                </div>
                <a className="cta-anchor services-anchor" target="_blank" rel="noreferrer noopener" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">Book Now</a>
            </div>
        </div>
        <div className="services-row">
            <div className="services-box-img">
                <img src="connie-hair.png" className="services-img" alt="Hair"></img>
            </div>
            <div className="services-box">
                <span className="section-title">Hair Styling</span>
                <div className="section-items">
                    <div className="section-item">
                        <span className="item-name">Special Occasions & Dances</span>
                        <span className="item-desc">Price Varies  &middot;  1 Hour</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Wedding Day</span>
                        <span className="item-desc">$75.00  &middot;  1 Hour</span>
                    </div>
                    <div className="section-item">
                        <span className="item-name">Shampoo/Blowout</span>
                        <span className="item-desc">$35.00  &middot;  45 Minutes</span>
                    </div>
                    <div className="section-item">
                    <span className="item-name">Bridal Trial</span>
                        <span className="item-desc">$55.00  &middot;  1 Hour</span>
                    </div>
                </div>
                <a className="cta-anchor services-anchor" target="_blank" rel="noreferrer noopener" href="https://squareup.com/appointments/book/1777575f-8e5d-4fd8-a8c1-9090c96a8e93/QBQKMCHE0AJXV/services">Book Now</a>
            </div>
        </div>
    </div>);
}

export default Services;