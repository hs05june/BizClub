import React from 'react'
import BuyPopup from '../Components/BuyPopup'
import { useState } from 'react'

export default function AboutPage() {
    const [description,change] = useState({
        name : "Wipro",
        price : "423.70",
        bal : "8,52,144"
    })
  return (
        <>
        <BuyPopup {...description}/>
        </>
  )
}
