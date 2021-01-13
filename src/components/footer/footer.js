import React from 'react';
import './footer.css';
import Logo from '../../logo.jpg';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className = 'Footer'>

            <div>
                <div id = 'upper-footer'>
                    <div id = 'footer-left'>
                        <img src = { Logo } id = 'footer-logo' alt = 'logo' />
                        <p>No 1 CRM Solution in Africa</p>
                        <p>Terms of use | Privacy Policy</p>
                        <h5>Get in touch</h5>
                        <p>+234-80-000-0000</p>
                    </div>
                    <div id = 'footer-right'>
                        <input type = 'text' id = 'footer-input' />
                        <div>
                            <div className = 'Footer-links'>
                                <h4>PRODUCT</h4>
                                    <li><Link className = 'Linked' to = '#'>Features</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Enterprise</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Security</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Trust</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Customer stories</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Pricing</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Integration</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Oneburner partners</Link></li>
                              
                            </div>
                            <div className = 'Footer-links'>
                                <h4>COMPANY</h4>
                                    <li><Link className = 'Linked' to = '#'>About Us</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Contatc Us</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Careers</Link></li>
                                    <li><Link className = 'Linked' to = '#'>In the news</Link></li>
                            
                            </div>
                            <div className = 'Footer-links'>
                                <h4>ONEBURNER FOR TEAMS</h4>
                                
                                    <li><Link className = 'Linked' to = '#'>Engineering</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Financial services</Link></li>
                                    <li><Link className = 'Linked' to = '#'>CRM and sales</Link></li>
                                    <li><Link className = 'Linked' to = '#'>IT</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Marketing</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Customer support</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Human resources</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Project management</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Remote work</Link></li>
                                
                            </div>
                            <div className = 'Footer-links'>
                                <h4>RESOURCES</h4>
                             
                                    <li><Link className = 'Linked' to = '#'>Community</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Guides</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Template</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Video tutorials</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Professional services</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Knowledge base</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Blog</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Webinars</Link></li>
                                    <li><Link className = 'Linked' to = '#'>Find a partner</Link></li>
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div id = 'lower-footer'>
                    <div id = 'hr'></div>
                    <p  id = 'rights'>©2020 Oneburner.com All rights reserved.</p>
                </div>

            </div>
            
        </div>
    )
}

export default Footer;
