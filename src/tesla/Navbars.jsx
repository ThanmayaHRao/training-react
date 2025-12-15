import React from 'react'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'
import Styles from './navbars.module.css'


const Navbars = () => {
  return (
    <div className={Styles.navBlock}>
        <article>
             <Left/>
              <Middle/>
              <Right/>
        </article>
                    
     
    </div>
  )
}

export default Navbars
