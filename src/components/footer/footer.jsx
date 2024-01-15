import React from "react";
import './footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="footer_item">
                <div className="footer_item_log">
                    <img className="footer_item_img" src="img\symbol 2.png" alt="" srcset="" />
                     <p className="footer_item_cryp">crypter</p>
                </div>
                
               
                <p className="footer_item_the">The New Creative <br />Economy.</p>
            </div>
            <div className="footer_second">
                <p className="footer_head">Crypter.</p>
                <p>Discover</p>
                <p>Connect wallet</p>
                <p>Create item</p>
            </div>
            <div className="footer_info">
                <p className="footer_head">Info</p>
                <p>Download</p>
                <p>Demos</p>
                <p>Support</p>
            </div>
            <div className="footer_join">
                <p className="footer_head">Join Newsletter</p>
                <p>Subcribe our newsletter to get mmore free desing <br />course and resource</p>
                <div className="footer_btn">
                    <input className="footer_btn" type="maile" placeholder="Enter your email" />
                </div>
            </div>
            
        </div>
        
    )
}

export default Footer;