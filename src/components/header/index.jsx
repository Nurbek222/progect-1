import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import Menu from "../menu/mennu";


function Head() {
   const[menuActive,setMenuActive]=useState(true)
   const items= [{value:'Discover', href:'/main'},{value:'How it work', href:'/main'},{value:'Upload', href:'/main'}]
   return (
      <div className="head">
         <div className="head_item">
            <div className="head_logo">
            <img className="logo" src="img\symbol 2.png" alt="logo" />
            <div className="crypter">crypter</div>
         </div>
         <ul className="head_href">
            <li ><a className="head_discover" href="#">Discover</a> </li>
            <li ><a className="head_how" href="#">How it work</a></li>
         </ul>
         </div>
         
         
         <nav className="nav">
            <form action="">
               <span className="seach">
                  <input className="seach_item" type="text" placeholder="search" />
                  <button className="seach_item" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
               </span>


            </form>
            <img className="bell" src="img\Vector.png" alt="" srcset="" />
            <img className="bell_item" src="img\New.png" alt="" srcset="" />
            <button className="btn_blu">Upload</button>
            <button className="btn_connect">Connect Wallet</button>
         </nav>
         <div className="burger_btn" onClick={()=>setMenuActive(!menuActive)}>
            <span/>
         </div>
         <Menu  active={menuActive} setactive={setMenuActive} header={'Burger menu'} items={items}/>
      </div>
      
   )
}

export default Head;