import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import { MessengerChat } from "react-messenger-chat-plugin"

export default function Container({children}) {
  
  return (
    <>
        <Navbar />
        {children}
        <Footer />
        <MessengerChat
        pageId="100563029485021"
        language="fr_FR"
      />
    </>
  )
}
