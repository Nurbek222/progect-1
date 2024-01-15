import React from "react";
import './earn.css'

function Earn(){
    return(
        <div className="footer_earn">
            <div className="earn">
                <p className="earn_item">SAVE YOUR TIME WITH STACKS</p>
                <p className="earn_earn">Earn free crypto <br />
                   with Crypter
                </p>
                <p className="earn_creat">A creative agensy that lead and inspire</p>
                <span><button className="earn_btn1">Earn now</button>
                <button className="earn_btn2">Discover more</button>
                </span>
            </div>
            <img className="earn_img" src="img\img lib\cubes.png" alt="" srcset="" />
        </div>
    )
}

export default Earn;