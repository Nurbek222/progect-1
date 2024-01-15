import React from "react";
import './hot_bid.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

function HotBid() {
    return (
        <div className="container_hot">
            <div className="hot_bid">
                <div className="hot_bid_text">Hot Bid</div>
                <div>
                    <button className="hot_arrow"><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button className="hot_arrow"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>

            </div>
            <div className="container_hot_cart">
                <div className="hot_cart">
                    <div className="hot_card_box">
                      <img className="hot_cart_img" src="\img\first_picture.png" alt="" srcset="" />
                    </div>
                    <div className="hot_cart_text">
                        <div>Amazing digital art</div>
                        <p className="creator_text_eth">0.27 ETH</p>
                    </div>
                    <div className="hot_cart_foto">
                        <div>
                            <img className="hot_foto_austin" src="\img\austin.png" alt="" srcset="" />
                            <img className="hot_foto_austin_2" src="\img\austin.png" alt="" srcset="" />
                            <img className="hot_foto_austin_2" src="\img\austin.png" alt="" srcset="" />
                        </div>

                        <div>3 in stock</div>

                    </div>
                    <div className="hot_bottom">
                        <img src="\img\img lib\Shape.png" width='20px' alt="" srcset="" />
                        <div className="hot_bottom_text">Highest bid</div>
                        <div className="hot_bottom_text_eth">0.001 ETH</div>
                        <div>
                            <img src="\img\img lib\New bid 🔥.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="hot_cart">
                    <div className="hot_card_box">
                        <img className="hot_cart_img" src="\img\img lib\img 22.png" alt="" srcset="" />
                    </div>
                    
                    <div className="hot_cart_text">
                        <div>Amazing digital art</div>
                        <p className="creator_text_eth">0.27 ETH</p>
                    </div>
                    <div className="hot_cart_foto">
                        <div>
                            <img className="hot_foto_austin" src="\img\austin.png" alt="" srcset="" />
                            <img className="hot_foto_austin_2" src="\img\austin.png" alt="" srcset="" />
                            <img className="hot_foto_austin_2" src="\img\austin.png" alt="" srcset="" />
                        </div>

                        <div>3 in stock</div>

                    </div>
                    <div className="hot_bottom">
                        <img src="\img\img lib\Shape.png" width='20px' alt="" srcset="" />
                        <div className="hot_bottom_text">Highest bid</div>
                        <div className="hot_bottom_text_eth">0.001 ETH</div>
                        <div>
                            <img src="\img\img lib\New bid 🔥.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="hot_cart">
                    <div className="hot_card_box">
                      <img className="hot_cart_img" src="\img\img lib\img 34444.png" alt="" srcset="" />
                    </div>
                    <div className="hot_cart_text">
                        <div>Amazing digital art</div>
                        <p className="creator_text_eth">0.27 ETH</p>
                    </div>
                    <div className="hot_cart_foto">
                        <div>
                            <img className="hot_foto_austin" src="\img\austin.png" alt="" srcset="" />
                            <img className="hot_foto_austin_2" src="\img\austin.png" alt="" srcset="" />
                            <img className="hot_foto_austin_2" src="\img\austin.png" alt="" srcset="" />
                        </div>

                        <div>3 in stock</div>

                    </div>
                    <div className="hot_bottom">
                        <img src="\img\img lib\Shape.png" width='20px' alt="" srcset="" />
                        <div className="hot_bottom_text">Highest bid</div>
                        <div className="hot_bottom_text_eth">0.001 ETH</div>
                        <div>
                            <img src="\img\img lib\New bid 🔥.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="hot_cart">
                    <div className="hot_card_box">
                       <img className="hot_cart_img" src="\img\img lib\shar 1.png" alt="" srcset="" />
                    </div>
                    <div className="hot_cart_text">
                        <div>Amazing digital art</div>
                        <p className="creator_text_eth">0.27 ETH</p>
                    </div>
                    <div className="hot_cart_foto">
                        <div>
                            <img className="hot_foto_austin" src="\img\austin.png" alt="" srcset="" />
                            <img className="hot_foto_austin_2" src="\img\austin.png" alt="" srcset="" />
                            <img className="hot_foto_austin_2" src="\img\austin.png" alt="" srcset="" />
                        </div>

                        <div>3 in stock</div>

                    </div>
                    <div className="hot_bottom">
                        <img src="\img\img lib\Shape.png" width='20px' alt="" srcset="" />
                        <div className="hot_bottom_text">Highest bid</div>
                        <div className="hot_bottom_text_eth">0.001 ETH</div>
                        <div>
                            <img src="\img\img lib\New bid 🔥.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default HotBid;