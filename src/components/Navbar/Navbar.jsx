import React from 'react'
import styles from './Navbar.module.css'

const Navbar = ({fondo, setFondo}) => {

  return (
    <div className={styles.navbar}>
      <h4>My Calculator 🦸‍♂️</h4>
      <button>Button</button>
    </div>
  )
}

export default Navbar
