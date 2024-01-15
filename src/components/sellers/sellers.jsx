import React from "react";
import './sel_style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight, faHashtag, faTrophy, faSquarePlus, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

function Sellers() {
    return (
        <div className="container_2">
            <div className="container_3">
                <div className="seller">
                    <div className="sell_text">
                        Popular
                    </div>
                    <div className="sell_option">
                        <select className="sellers" name="" id="">
                            <option value="">Sellers</option>
                        </select>
                    </div>

                </div>
                <div className="day_">
                    <select className="day" name="day" id="">
                        <option value="">Monday</option>
                        <option value="">Tuesday</option>
                        <option value="">Wednesday</option>
                        <option value="">Thursday</option>

                    </select>
                </div>
            </div>
            <div className="container_4">
                <div className="cart_arrow"><FontAwesomeIcon icon={faArrowLeft} /></div>

                <div className="cart">
                    <div className="cart_head">
                        <div className="cart_head_left">
                            <FontAwesomeIcon icon={faTrophy} />
                            <FontAwesomeIcon icon={faHashtag} />
                            1
                        </div>
                        <div className="cart_head_right">
                            <FontAwesomeIcon icon={faSquarePlus} />
                            <FontAwesomeIcon icon={faArrowTrendUp} />
                        </div>
                    </div>
                    <img className="cart_foto" src="\img\austin.png" alt="" srcset="" />
                     <img className="cart_poligon" src="\img\img lib\Polygon 2.png" alt="" srcset="" />
                    <img className="cart_file" src="\img\img lib\Filled.png" alt="" srcset="" />
                    <div>Edd Harris</div>
                    <div>2.456 ETH</div>
                </div>
                <div className="cart">
                    <div className="cart_head">
                        <div className="cart_head_left_f">
                            <FontAwesomeIcon icon={faTrophy} />
                            <FontAwesomeIcon icon={faHashtag} />
                            2
                        </div>
                        <div className="cart_head_right">
                            <FontAwesomeIcon icon={faSquarePlus} />
                            <FontAwesomeIcon icon={faArrowTrendUp} />
                        </div>
                    </div>
                    <img className="cart_foto" src="\img\img lib\odel.png" alt="" srcset="" />
                     <img className="cart_poligon" src="\img\img lib\Polygon 2.png" alt="" srcset="" />
                    <img className="cart_file" src="\img\img lib\Filled.png" alt="" srcset="" />
                    <div>Odel Hane</div>
                    <div>2.456 ETH</div>
                </div>
                <div className="cart">
                    <div className="cart_head">
                        <div className="cart_head_left_g">
                            <FontAwesomeIcon icon={faTrophy} />
                            <FontAwesomeIcon icon={faHashtag} />
                            3
                        </div>
                        <div className="cart_head_right">
                            <FontAwesomeIcon icon={faSquarePlus} />
                            <FontAwesomeIcon icon={faArrowTrendUp} />
                        </div>
                    </div>
                    <img className="cart_foto" src="\img\img lib\foto_payton1.png" alt="" srcset="" />
                     <img className="cart_poligon" src="\img\img lib\Polygon 2.png" alt="" srcset="" />
                    <img className="cart_file" src="\img\img lib\Filled.png" alt="" srcset="" />
                    <div>Marlee Kuphai</div>
                    <div>2.456 ETH</div>
                </div>
                <div className="cart">
                    <div className="cart_head">
                        <div className="cart_head_left_d">
                            <FontAwesomeIcon icon={faTrophy} />
                            <FontAwesomeIcon icon={faHashtag} />
                            4
                        </div>
                        <div className="cart_head_right">
                            <FontAwesomeIcon icon={faSquarePlus} />
                            <FontAwesomeIcon icon={faArrowTrendUp} />
                        </div>
                    </div>
                    <img className="cart_foto" src="\img\img lib\foto_kunda.png" alt="" srcset="" />
                     <img className="cart_poligon" src="\img\img lib\Polygon 2.png" alt="" srcset="" />
                    <img className="cart_file" src="\img\img lib\Filled.png" alt="" srcset="" />
                    <div>Payton Kunde</div>
                    <div>2.456 ETH</div>
                </div>
                <div className="cart">
                    <div className="cart_head">
                        <div className="cart_head_left_b">
                            <FontAwesomeIcon icon={faTrophy} />
                            <FontAwesomeIcon icon={faHashtag} />
                            5
                        </div>
                        <div className="cart_head_right">
                            <FontAwesomeIcon icon={faSquarePlus} />
                            <FontAwesomeIcon icon={faArrowTrendUp} />
                        </div>
                    </div>
                    <img className="cart_foto" src="\img\austin.png" alt="" srcset="" />
                     <img className="cart_poligon" src="\img\img lib\Polygon 2.png" alt="" srcset="" />
                    <img className="cart_file" src="\img\img lib\Filled.png" alt="" srcset="" />
                    <div>Payton Buckridge</div>
                    <div>2.456 ETH</div>
                </div>
                <div className="cart_arrow"><FontAwesomeIcon icon={faArrowRight} /></div>
            </div>

        </div>
    )
}
// 
export default Sellers;