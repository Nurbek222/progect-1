import React from "react";
import './future.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Future() {
    return (
        <div className="container_bird">
            <div className="foto_bird">
                <img className="foto_bird_item" src="img\img 46.png" alt="" srcset="" />
                <div className="creator_item_bird">
                    {/* <div className="creator_foto"> */}
                        <img className="creator_foto_item_bird" src="img\austin.png" alt="" srcset="" />

                    {/* </div> */}
                    <div className="creator_text_bird">
                        <div><img src="img\The Future of ETH®.png"width='80%' alt="" srcset="" /></div>
                        <div>18 in stock</div>
                    </div>
                    <div className="creator_text_right">
                        <div>Highest bid</div>
                        <div className="creator_text_eth">1.125 ETH</div>
                    </div>
                </div>
            </div>
            <div className="foto_bird_midle">
                <div className="foto_bird_left">
                    <div className="left">
                        {/* <div> */}
                        <img className="left_foto" src="\img\img lib\img 56.png" alt="" srcset="" />
                        {/* </div> */}
                        <div className="left_item">
                            <div className="left_item_eth">ETH never die</div>

                            <div className="left_avtor">
                                <img className="left_creator_foto" src="img\austin.png" alt="" srcset="" />
                                <p className="creator_text_eth">0.27 ETH</p>
                                <p>1 of 12</p>
                            </div>
                            <div>
                                <button className="btn_left">Place a bad</button>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        {/* <div> */}
                        <img className="left_foto" src="\img\img lib\img.png" alt="" srcset="" />
                        {/* </div> */}
                        <div className="left_item">
                            <div className="left_item_future">Future coming soon</div>

                            <div className="left_avtor">
                                <img className="left_creator_foto" src="img\austin.png" alt="" srcset="" />
                                <p className="creator_text_eth">0.27 ETH</p>
                                <p>1 of 3</p>
                            </div>
                            <div>
                                <button className="btn_left_future">Place a bad</button>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        {/* <div> */}
                        <img className="left_foto" src="\img\img lib\img 41.png" alt="" srcset="" />
                        {/* </div> */}
                        <div className="left_item">
                            <div className="left_item_elon">Elon Musk silver coin 3d print</div>

                            <div className="left_avtor">
                                <img className="left_creator_foto" src="img\austin.png" alt="" srcset="" />
                                <p className="creator_text_eth">0.27 ETH</p>
                                <p>1 of 4</p>
                            </div>
                            <div>
                                <button className="btn_left_elon">Place a bad</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="foto_bird_right">
                    <div className="foto_left_avtor">
                        <div className="like">6</div>
                        <img className="foto_bird_creator" src="img\austin.png" alt="" srcset="" />
                        

                        <div className="left_avtor_text">
                            <p className="left_text">Payton Harris</p>
                            <p>2.456 ETH</p>
                        </div>
                    </div>
                    <div className="foto_left_avtor">
                        <div className="like">2</div>
                        <img className="foto_bird_creator_2" src="img\austin.png" alt="" srcset="" />

                        <div className="left_avtor_text">
                            <p className="left_text">Anita Bins</p>
                            <p>2.456 ETH</p>
                        </div>
                    </div>
                    <div className="foto_left_avtor">
                        <div className="like">3</div>
                        <img className="foto_bird_creator" src="img\austin.png" alt="" srcset="" />

                        <div className="left_avtor_text">
                            <p className="left_text">Joana Wuckert</p>
                            <p>2.456 ETH</p>
                        </div>
                    </div>
                    <div className="foto_left_avtor">
                        <div className="like">4</div>
                        <img className="foto_bird_creator_2" src="img\austin.png" alt="" srcset="" />

                        <div className="left_avtor_text">
                            <p className="left_text">Payton Harris</p>
                            <p>2.456 ETH</p>
                        </div>
                    </div>
                    <button className="foto_arrow_r">Discover more<FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>


        </div>
    )
}

export default Future;