import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'

export default function Container({children}) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}
