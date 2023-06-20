import React from "react";
import styles from "../styles/Nav.module.css"
import Link from "next/link";


export default function Nav(){

  return(
    <>
      <input type="checkbox" id={styles.menu} />
      <label for={styles.menu} className={styles.menu}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className={styles.nav}> 
        <ul>
          <li><Link className={styles.a} href="/"> Home </Link></li>
          {/* <li><Link className={styles.a} href="/"> Information </Link></li> */}
          <li><Link className={styles.a} href="/"> Gallery </Link></li>
          <li><Link className={styles.a} href="/"> Location </Link></li>
          <li><Link className={styles.a} href="/"> Contact </Link></li>
        </ul>
      </nav>
    </>
      
  );
}
