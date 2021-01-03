import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css'



const User = ( { name, CURP, url }  ) => {
   return (
  <div className={styles.container}>
    <main className={styles.main}>
      <div>
        <h1>useEffect {name}</h1>
        <h2> {CURP} </h2> 
      </div>            
    </main>
  </div>
  )
}
export default User;
