import React from 'react'
import BuyPopup from '../Components/BuyPopup'
import { useState } from 'react'
import Draggable from "react-draggable";
import {DraggablrCore} from "react-draggable"

export default function AboutPage() {
    const [description,change] = useState({
        name : "Wipro",
        price : "423.70",
        bal : "8,52,144"
    })
  return (
    // <Draggable>
    <>
        <BuyPopup {...description}/>
        </>
    // </Draggable>
  )
}
