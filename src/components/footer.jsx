import './footer.css';
import line from '../assets/Vector 2518.png';
import line1 from '../assets/Vector 2518.png';
import vector from '../assets/Ellipse 739.png';

function footer() {
    return (
        <>
            <footer id="contact">
                {/* Newsletter Section */}
                <section className="newsletter-section">
                    <img src={line} alt="customer" className="line" />
                    <img src={line1} alt="customer" className="line1" />
                    <img src={vector} alt="customer" className="vector" />
                    <div className="newsletter-content">
                        <div className="newsletter-text">
                            <h1>Subscribe to our newsletter</h1>
                            <p>To make your stay special and even more memorable</p>
                        </div>
                        <div className="newsletter-form">
                            
                            <button>Subscribe Now</button>
                        </div>
                    </div>
                </section>

                {/* Footer Columns */}
                <section className="footer-columns">
                    <div className="footer-column">
                        <h3>Company</h3>
                        <ul>
                            <li>Home</li>
                            <li>Studio</li>
                            <li>Service</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Terms & Policies</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Explore</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Youtube</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <ul>
                            <li>1498w Fluton ste, STE 2D Chicgo, IL 63867</li>
                            <li>(123) 456789000</li>
                            <li>info@elementum.com</li>
                        </ul>
                    </div>
                </section>

                {/* Footer Bottom */}
                <section className="footer-bottom">
                    <p>&copy; 2025 Elementum. All rights reserved.</p>
                </section>
            </footer>
        </>
    )
}
export default footer
