import React from 'react';
import styles from './NewsComp1.module.css';

function NewsComp1(props) {
  const propHeadline = props.title;
  let headline = "";
  let count = 0;
  for(var i=0;i<50;i++){
    if(propHeadline[i]==='-'&&propHeadline[i+1]===' ')
    break;
    if(!propHeadline[i])
  break;
    if(propHeadline[i]===' ')
    count++;
    if(count<12)
    headline+=propHeadline[i];
  }
  headline+="...";

  const propDesc = props.desc;
  let desc = "";
  count = 0;
  for(i=0;i<150;i++){
    if(!propDesc[i])
    break;
    if(propDesc[i]===' ')
    count++;
    if(count<35)
    desc+=propDesc[i];
  }
  desc+="...";

  const propImg= props.img;
  const propSource = props.link;
  return (
    <div className={styles.newsCard}>
        <div className={styles.cardLeft}>
            <h1 className={styles.headline}>{headline}</h1>
            <p className={styles.desc}>{desc}</p>
            <a href={propSource} target="_blank" rel="noreferrer"><button className={styles.btn1}>Read More</button></a>
        </div>
        <img src={propImg} className={styles.img} alt=''/>
    </div>
  )
}

export default NewsComp1;