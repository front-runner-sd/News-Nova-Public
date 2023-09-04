import React from 'react'
import NewsComp4 from './NewsComp4';
import styles from './Carousel3.module.css';
import styles2 from './NewsComp4.module.css';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
var page=1;

const MyCarousel3 = (props) => {

      const [disableBtnforShortTime,setDisableBtnforShortTime] = useState(false) ;

    const btnpressprev = () => {
      if(page>1)
      page--;
      setDisableBtnforShortTime(true);
      setTimeout(() => {
        setDisableBtnforShortTime(false);
      }, 1000);
      try{
        const slider = document.querySelector(`.${styles.productContainer}`);
        const ele = document.querySelector(`.${styles2.card}`);
        const width = ele.offsetWidth+50;
        slider.scrollLeft -= width;
      }
      catch(err){

      }
    }

    const btnpressnext = () => {
      
      if(page<7){
        page++;
        setDisableBtnforShortTime(true);
        setTimeout(() => {
          setDisableBtnforShortTime(false);
        }, 1000);
        try{
          const slider = document.querySelector(`.${styles.productContainer}`);
          const ele = document.querySelector(`.${styles2.card}`);
          const width = ele.offsetWidth+50;
          slider.scrollLeft += width;
        }
        catch(err){
  
        }
      }
      else{
          page=1;
          setDisableBtnforShortTime(true);
          setTimeout(() => {
            setDisableBtnforShortTime(false);
          }, 1000);
          try{
            const slider = document.querySelector(`.${styles.productContainer}`);
            const ele = document.querySelector(`.${styles2.card}`);
            const width = ele.offsetWidth+50;
            slider.scrollLeft -= width*8;
          }
          catch(err){
    
          }
      }
      
    }
 
    return (
        <div className={styles.productCarousel}>
            <button className={styles.preBtn} onClick={btnpressprev} disabled={disableBtnforShortTime} ><FontAwesomeIcon className={styles.left} icon={faAngleLeft}/></button>
            <button className={styles.nextBtn} onClick={btnpressnext}  disabled={disableBtnforShortTime} ><FontAwesomeIcon className={styles.right} icon={faAngleRight}/></button>


            <div className={styles.productContainer}>
                {props.articles.map((ele)=>{
                    if(ele.url)
                    return <NewsComp4 title={ele.title?ele.title:"You won't Belive this ! Breaking News!"} desc={ele.description?ele.description:"Description Unavailable ! Press Read more button to read the full article"} img={ele.urlToImage?ele.urlToImage:"https://source.unsplash.com/720x930/?news"} key={ele.url?ele.url:Math.random(1,10000)} link={ele.url?ele.url:'#'} author={ele.author?ele.author:"Unknown"}/>
                    })}
            </div>
        </div>
    )
}

export default MyCarousel3;