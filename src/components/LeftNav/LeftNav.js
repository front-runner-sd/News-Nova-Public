import React from 'react'
import styles from './LeftNav.module.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from "../../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconbig from './logo192.png';
import iconSmall from './small.png';
import { faCheck, faFlask, faHome, faMasksTheater, faRightToBracket, faRobot, faSearch, faSquareXmark, faSuitcase, faVolleyball } from '@fortawesome/free-solid-svg-icons';

const LeftNav = () => {
  const [expanded, setExpanded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if(user){
          setLoggedIn(true);
        }else{
          setLoggedIn(false);
        }
    });
  });

  const toggleExpand = () => {
    if(!expanded){
      setExpanded(true);
    }

  };

  const toggleShrink = () => {
    if(expanded){
      setExpanded(false);
    }

  };

  const gotoHome = ()=>{
      navigate('/');
  }
  const gotoSearch = ()=>{
    navigate('/search');
}
const gotoScience = ()=>{
  navigate('/science');
}
const gotoBusiness = ()=>{
  navigate('/business');
}
const gotoLifeStyle = ()=>{
  navigate('/LifeStyle');
}
const gotoTech = ()=>{
  navigate('/tech');
}

const gotoSports = ()=>{
  navigate('/sports');
}

  const gotoLogin = ()=>{
    if(!loggedIn)
      navigate('/login');
  }
  const goBack = ()=>{
    window.opener = null;
    window.history.go(-1);

  }
  return (
      <div className={`${styles.left} ${expanded ? styles.expanded : ''}`}onMouseEnter={toggleExpand} onMouseLeave={toggleShrink} >
        <div className={styles.logo}>{expanded ? <img className={styles.logoBig} src={iconbig} key={1}></img> :  <img className={styles.logoSmall} src={iconSmall} key={2} ></img> }</div>
        {!expanded?
            <div className={styles.items} >
                <button className={styles.navAnchor}><FontAwesomeIcon className={styles.navIcons} icon={faHome}/></button>
                <button className={styles.navAnchor}><FontAwesomeIcon className={styles.navIcons} icon={faSearch}/></button>
                <button className={styles.navAnchor}><FontAwesomeIcon className={styles.navIcons} icon={faFlask}/></button>
                <button className={styles.navAnchor}><FontAwesomeIcon className={styles.navIcons} icon={faSuitcase}/></button>
                <button className={styles.navAnchor}><FontAwesomeIcon className={styles.navIcons} icon={faVolleyball}/></button>
                <button className={styles.navAnchor}><FontAwesomeIcon className={styles.navIcons} icon={faMasksTheater}/></button>
                <button className={styles.navAnchor}><FontAwesomeIcon className={styles.navIcons} icon={faRobot}/></button>
                <button   className={styles.navAnchor}><FontAwesomeIcon className={styles.navIcons} icon={loggedIn?faCheck:faRightToBracket}/></button>
                <button   className={styles.navAnchor}><FontAwesomeIcon className={styles.navIcons} icon={faSquareXmark}/></button>
            </div>
        :
        <div className={styles.itemsBig} >
                <button onClick={gotoHome}  className={styles.navAnchor}>
                  <FontAwesomeIcon className={styles.navIcons} icon={faHome}/>
                  <p className={styles.navP} key={3}>Home</p>
                </button>
                <button onClick={gotoSearch} className={styles.navAnchor}>
                  <FontAwesomeIcon className={styles.navIcons} icon={faSearch}/>
                  <p className={styles.navP} key={3}>Search</p>
                </button>
                <button onClick={gotoScience} className={styles.navAnchor}>
                  <FontAwesomeIcon className={styles.navIcons} icon={faFlask}/>
                  <p className={styles.navP} key={3}>Science</p>
                  </button>
                <button onClick={gotoBusiness} className={styles.navAnchor}>
                  <FontAwesomeIcon className={styles.navIcons} icon={faSuitcase}/>
                  <p className={styles.navP} key={3}>Business</p>
                  </button>
                <button onClick={gotoSports} className={styles.navAnchor}>
                  <FontAwesomeIcon className={styles.navIcons} icon={faVolleyball}/>
                  <p className={styles.navP} key={3}>Sports</p>
                  </button>
                <button onClick={gotoLifeStyle} className={styles.navAnchor}>
                  <FontAwesomeIcon className={styles.navIcons} icon={faMasksTheater}/>
                  <p className={styles.navP} key={3}>LifeStyle</p>
                  </button>
                <button onClick={gotoTech} className={styles.navAnchor}>
                  <FontAwesomeIcon className={styles.navIcons} icon={faRobot}/>
                  <p className={styles.navP} key={3}>Tech</p>
                </button>
                <button   onClick={gotoLogin} className={styles.navAnchor}>
                  <FontAwesomeIcon className={styles.navIcons} icon={loggedIn?faCheck:faRightToBracket}/>
                  <p className={styles.navP}>{loggedIn?"Login Done":"Login"}</p>
                  </button>
                <button   onClick={goBack} className={styles.navAnchor}>
                  <FontAwesomeIcon className={styles.navIcons} icon={faSquareXmark}/>
                  <p className={styles.navP}>Back</p>
                  </button>
      </div>
      }
    </div>
  );
};


export default LeftNav;