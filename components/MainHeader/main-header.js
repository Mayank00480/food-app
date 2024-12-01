import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import LogoImage from '../../assets/logo.png'
import styles from './header.module.css'
import MainHeaderBackground from './main-header-background';
import Navlink from './nav-link';

const MainHeader = () => {
  return (
    <>
       <MainHeaderBackground />
        <header className={styles.header}>
      <Link href = "/" className = {styles.logo}>
        <Image src = {LogoImage} priority />
        Next Level Food
      </Link>
      <nav className={styles.nav}>
        <ul>
            <li>
                <Navlink href = "/meals">Meals</Navlink>
                
            </li>
            <li>
            <Navlink href = "/community">Community</Navlink>
            </li>
        </ul>
      </nav>
    </header>


    </>
  )
}

export default MainHeader;
