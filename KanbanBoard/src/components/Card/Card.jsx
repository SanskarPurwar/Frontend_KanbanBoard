import { useState } from "react";
import Done from "../../assets/Done.svg"
import Display from "../../assets/Display.svg"
import Nopriority from "../../assets/No-priority.svg"
import './card.css'


function Card(){
    return (
        <>
         <div className="ticket_card">
            <div className="flex_between">
                <p className="dis_inline">id : COM-1</p>
                <img src={Display} alt="" />
            </div>

            <div className="flex_gap">
               <img src={Done} alt="" />
               <p className="dis_inline text_wrap">title : Add title to this here and it should wrap</p>
            </div>

            <div className="flex_gap">
               <img src={Nopriority} alt="" />
               <p className="dis_inline">Feature Request</p>
            </div>
         </div>
        </>
    ) ;
}

export default Card