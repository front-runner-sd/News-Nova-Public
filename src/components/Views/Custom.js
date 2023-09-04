import React from 'react'
import styles from'./Home.module.css';
import LeftNav from '../LeftNav/LeftNav';
import MidCustom from '../MidCustom/MidCustom';
import Right from '../Right/Right';

function Custom(props) {

  return (
        <div className={styles.body}>
            <LeftNav/>
            <MidCustom query={props.query}/>
            <Right apiKey={props.apiKey}/>
        </div>
  )
}

export default Custom;