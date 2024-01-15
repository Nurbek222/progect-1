import React from "react";
import './menu.css'
import { library } from "@fortawesome/fontawesome-svg-core";

const Menu = ({header,items,active,setActive})=>{
    return(
        <div className={active ? 'mennu active': 'mennu'}>
            <div className="blur"/>
            <div className="menu_content">
                <div className="mennu_header">{header}</div>
                <ul>
                    {items.map(item=>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    )
}

export default Menu;