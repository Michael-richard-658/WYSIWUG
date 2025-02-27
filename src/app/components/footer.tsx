import React from 'react'
import './header-components/header.css'

function Footer({words}:any) {
    console.log(words)
  return (
    <div className='footer-div' >
    <p> {words} Words</p>
    </div>
  )
}

export default Footer
