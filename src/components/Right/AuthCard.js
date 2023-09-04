import React from 'react'
import styles from './AuthCard.module.css';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function AuthCard(props) {
  const handleSignOut = ()=>{

    const Loading = ()=> props.setIsLoading(true);
    setTimeout(Loading,0);
    window.scrollTo(0, 0);
    
    const notLoading = ()=> props.setIsLoading(false);
    setTimeout(notLoading,2500);
    
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
});
  }

  const load = ()=>{
    props.setIsLoading(true);
  }


  return (
  <>
    { 
      props.loggedin?
      <div className={styles.flexCard}>
          <p className={styles.content}>{`Welcome ${props.loggedin} ! Feel free to explore more!`}</p>
            <div className={styles.btns}>
              <button className={styles.btn} onClick={handleSignOut}> Sign out </button>
            </div>
      </div>     
      :
      <div className={styles.flexCard}>
          <p className={styles.content}>Want to be a member ? Create an account hastle free !</p>
            <div className={styles.btns}>
              <Link to="/signUp"><button className={styles.btn} onClick={load}> Sign up </button></Link>
              <Link to="/login"><button className={styles.btn} onClick={load} > Log in </button></Link>
            </div>
      </div>
    }
  </>

  )
}

export default AuthCard;