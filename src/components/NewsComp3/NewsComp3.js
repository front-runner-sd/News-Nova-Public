import React from 'react';
import styles from './NewsComp3.module.css';

function NewsComp3(props) {
  const propHeadline = props.title;
  let headline = "";
  let count = 0;
  for(var i=0;i<60;i++){
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
    desc+=propDesc[i];
  }
  if(i<110){
    desc+=" Click on read more to read the complete article ";
  }
  desc+="...";
  const propAuth = props.author;
  let author = "";
  for(i=0;i<propAuth.length;i++){
    if (propAuth[i]==',')
    {
      break;
    }
    if(i<25)
      author+=propAuth[i];
  }
  return (
    <div className={styles.card}>
       <img src={props.img} className={styles.img} alt=''/>
       <div className={styles.text}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.desc}>{desc}</p>
       </div>
       <div className={styles.author}>
            <p className={styles.a1}> Author : </p>
            <p className={styles.a2}> {author} </p>
            <a className={styles.btn} href={props.link} target="_blank" rel="noreferrer"><button className={styles.readMore}>Read More</button></a>
       </div>
    </div>
  )
}

export default NewsComp3;