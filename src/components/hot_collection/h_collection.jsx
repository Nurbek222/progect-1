import React from "react";
import './h_collection.css'

function Hot_collection(){
    return(
        <div className="container_hot">
            <h2>Hot collections</h2>
            <div className="hot_collection">
                <div className="hot_collection_cart">
                    <img className="hot_collection_foto" src="\img\img 46.png" alt="" srcset="" />
                    <div className="hot-collection_item">
                        <img className="hot_collection_foto_item" src="\img\img lib\img 12.png" alt="" srcset="" />
                        <img className="hot_collection_foto_item"src="\img\img lib\img 31.png" alt="" srcset="" />
                        <img className="hot_collection_foto_item" src="\img\img lib\img 06.png" alt="" srcset="" />
                    </div>
                    <h3>Awesome collection</h3>
                    <div className="hot_collection_footer">
                        <div className="hot_collection_footer_item">
                            <img className="hot_collection_footer_avtor" src="\img\austin.png" alt="" />
                            <p>By Kennith Olson</p>
                        </div>
                        
                        <div className="hot_collection_items">28 items</div>
                    </div>
                </div>
                <div className="hot_collection_cart">
                    <img className="hot_collection_foto" src="\img\img lib\shar 1.png" alt="" srcset="" />
                    <div className="hot-collection_item">
                        <img className="hot_collection_foto_item" src="\img\img lib\img 131.png" alt="" srcset="" />
                        <img className="hot_collection_foto_item"src="\img\img lib\img 21.png" alt="" srcset="" />
                        <img className="hot_collection_foto_item" src="\img\img lib\img 119.png" alt="" srcset="" />
                    </div>
                    <h3>Awesome collection</h3>
                    <div className="hot_collection_footer">
                        <div className="hot_collection_footer_item">
                            <img className="hot_collection_footer_avtor" src="\img\austin.png" alt="" />
                            <p>By Willie Barton</p>
                        </div>
                        
                        <div className="hot_collection_items">28 items</div>
                    </div>
                </div>
                <div className="hot_collection_cart">
                    
                    <img className="hot_collection_foto" src="\img\first_picture.png" alt="" srcset="" />
                    <div className="hot-collection_item">
                        <img className="hot_collection_foto_item" src="\img\img lib\img 114.png" alt="" srcset="" />
                        <img className="hot_collection_foto_item"src="\img\img lib\img 121.png" alt="" srcset="" />
                        <img className="hot_collection_foto_item" src="\img\img lib\img 126.png" alt="" srcset="" />
                    </div>
                    <h3>Awesome collection</h3>
                    <div className="hot_collection_footer">
                        <div className="hot_collection_footer_item">
                            <img className="hot_collection_footer_avtor" src="\img\austin.png" alt="" />
                            <p>By Halle Jakubowski</p>
                        </div>
                        
                        <div className="hot_collection_items">28 items</div>
                    </div>
                </div>
            </div>


        </div>
        
    )
}

export default Hot_collection;