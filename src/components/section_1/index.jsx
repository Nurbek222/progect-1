import React from "react";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Section_1() {
    return (
        <div className="container_section">
            <div className="painting">
                <img className="painting_item" src="img\first_picture.png" width='80%' alt="" srcset="" />
            </div>
            <div className="section_right">
                <div className="creator">
                    <img className="creator" src="img\Marco carrillo®.png" alt="" srcset="" />
                </div>
                <div className="creator_item">
                    <div className="creator_foto">
                        <img className="creator_foto_item" src="img\austin.png" alt="" srcset="" />
                        <div className="creator_text">
                            <div>Creator</div>
                            <div>Enrico Cole</div>
                        </div>
                    </div>


                    <div className="creator_price_2">
                        <div className="creator_price">
                           < img className="creator_price_item" src="img\Shape.png" alt="" srcset="" />
                        </div>
                        
                        <div className="creator_text">
                             <div>Instant price</div>
                             <div>3.5 ETH</div>
                        </div>
                    </div>
                   
                </div>
                <div className="current">
                    <div>
                        <div className="current_bind">Current Bid</div>
                        <p className="current_eth">1.00 ETH</p>
                        <p>$3,618.36</p>
                    </div>
                    <div className="table">
                        <p>Auction ending in</p>
                        <table className="table_item">
                            <tr className="tr">
                                <td>19</td>
                                <td>24</td>
                                <td>19</td>
                            </tr>
                            <tr className="tr">
                                <td>Hrs</td>
                                <td>mins</td>
                                <td>secs</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className="btn_place">
                    <button className="btn_place_item">Place a bid</button>
                </div>
                <div className="btn_place">
                    <button className="btn_view">View item.</button>
                </div>
                <div className="arrow">
                    <button className="arrow_l"><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button className="arrow_r"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>





            </div>
        </div>
    )
}
export default Section_1;
