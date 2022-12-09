import React, {useState} from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
// import { MessengerChat } from "react-messenger-chat-plugin"

export default function Container({children}) {

  const [toggleDesk, setToggleDesk] = useState(false);
  const closeNavDesk = () => {
    if (toggleDesk) setToggleDesk(false);
  }
  
  return (
    <>
      <div onClick={closeNavDesk}>
          <Navbar toggleDesk={toggleDesk} setToggleDesk={setToggleDesk} />
          {children}
          <Footer />
          {/* <MessengerChat
            pageId="100563029485021"
            language="fr_FR"
          /> */}
      </div>
    </>
  )
}
