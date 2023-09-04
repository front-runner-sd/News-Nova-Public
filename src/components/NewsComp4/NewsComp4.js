import React from 'react'
import styles from './NewsComp4.module.css';

function NewsComp4(props) {
    const propHeadline = props.title+". Breaking News ";
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
  
    const propDesc = props.desc+" Click on read more to read the complete article ";;
    let desc = "";
    count = 0;
    for(i=0;i<150;i++){
      if(!propDesc[i])
      break;
      desc+=propDesc[i];
    }
    desc+="...";
    const propAuth = props.author;
    let author = "";
    for(i=0;i<propAuth.length;i++){
      if (propAuth[i]===',')
      {
        break;
      }
      if(i<25)
        author+=propAuth[i];
    }
  return (
    <>
        <div className={styles.card}>
            <img className={styles.img} src={props.img}/>
            <h1 className={styles.heading}>{headline}</h1>
            <p className={styles.content}>{desc}</p>
            <a href={props.link} target="_blank" rel="noreferrer"><button className={styles.button} >Read Article</button></a>
        </div>
    </>
  )
}

export default NewsComp4