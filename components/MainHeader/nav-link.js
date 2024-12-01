"use client"
import { usePathname } from "next/navigation"
import styles from './nav-link.module.css'
import Link from "next/link";


export default function Navlink({href , children}){

    const path = usePathname();
    console.log(path)
    return  <Link href = {href} className = {path.startsWith(href) ? `${styles.active} ${styles.link}` : `${styles.link}`}  >{children}</Link>
}