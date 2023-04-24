import React from 'react'
import Nav from './Nav'
import Profile from './Profile'
import Launcher from './Launcher'
import './Styles/Header.css'
export default function Header() {
  return (
    <div className='Header'>
        <div>
        <Nav title={<a href='https://mail.google.com/mail/&ogbl'>Gmail</a>}/>
        </div>
        <div>
        <Nav title={<a href='https://www.google.com.ng/imghp?hl=en&ogbl'>Images</a>}/>
        </div>
        <div>
        <Launcher/>
        </div>
        <div>
        <Profile/>
        </div>
 </div>
  )
}
