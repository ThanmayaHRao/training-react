import React from 'react'
import Styles from "./menu.module.css"

const Menu = () => {
  return (
    <div className={Styles.menuBlock}>
        <a href="#">Flipcart</a>
        <a href="#">cart</a>
        <a href="#">favourate</a>
        <a href="#">signup</a>
        <a href="#">orders</a>
      
    </div>
  )
}

export default Menu
