import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Styles from './navbar.module.css'


const Navbar = () => {
  return (
    <section className={Styles.navBlock}>
        <article>
            <Logo/>
            <Menu/>
        </article>
    </section>
  )
}

export default Navbar
