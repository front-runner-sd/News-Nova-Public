import React from 'react'
import NewsComp1 from './NewsComp1';
import styles from './Carousel.module.css';
import styles2 from './NewsComp1.module.css';
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowRight, faBackward, faForward, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect,useState } from 'react';
import axios from 'axios';
const Imagecarousel = () => {


    const article = [
        {
          "source": { "id": null, "name": "Moneycontrol" },
          "author": "Moneycontrol News",
          "title": "Mumbai reports first Zika case, 79-year-old patient recovered completely - Moneycontrol",
          "description": "Sudhakar Shinde, Additional Municipal Commissioner said that health teams from the BMC carried out a survey of households within the neighbourhood of the aforementioned patient but found no more suspected Zika cases",
          "url": "https://www.moneycontrol.com/news/trends/health/mumbai-reports-first-zika-case-79-year-old-patient-recovered-completely-11249811.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2017/07/INSECTS-LIVE-ZIKA0116-696x435.jpg",
          "publishedAt": "2023-08-24T08:22:32Z",
          "content": "Mumbai has recorded the first case of Zika virus infection in a 79-year-old man, who has now fully recovered, the Brinhanmumbai Municipal Corporation (BMC) said on August 23.\r\nThe BMC stated in a rel… [+1198 chars]"
        },
      ]
      const [articles,setArticles] = useState(article) ;
      const [disableBtnforShortTime,setDisableBtnforShortTime] = useState(false) ;

      useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=a783ae5695704dd4ba5ea79f95c0c8b3`) 
        .then((response) => {
          console.log(response);
          setArticles(response.data.articles); // Update state with the fetched data
          setTimeout(btnpressnext, 2000);
          setTimeout(btnpressnext, 3000);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      },[]);


    const btnpressprev = () => {
      setDisableBtnforShortTime(true);
      setTimeout(() => {
        setDisableBtnforShortTime(false);
      }, 1000);
      try{
        const slider = document.querySelector(`.${styles.productContainer}`);
        const ele = document.querySelector(`.${styles2.newsCard}`);
        const width = ele.offsetWidth;
        slider.scrollLeft -= width;
      }
      catch(err){

      }
    }

    const btnpressnext = () => {
      setDisableBtnforShortTime(true);
      setTimeout(() => {
        setDisableBtnforShortTime(false);
      }, 1000);
      try{
        const slider = document.querySelector(`.${styles.productContainer}`);
        const ele = document.querySelector(`.${styles2.newsCard}`);
        const width = ele.offsetWidth;
        // console.log(width);
        slider.scrollLeft += width;
      }
      catch(err){

      }
    }
 
    return (
        <div className={styles.productCarousel}>
            <button className={styles.preBtn} onClick={btnpressprev} disabled={disableBtnforShortTime} ><FontAwesomeIcon className={styles.left} icon={!disableBtnforShortTime?faArrowLeft:faAngleLeft}/></button>
            <button className={styles.nextBtn} onClick={btnpressnext}  disabled={disableBtnforShortTime} ><FontAwesomeIcon className={styles.right} icon={!disableBtnforShortTime?faArrowRight:faAngleRight}/></button>


            <div className={styles.productContainer}>
                {articles.map((ele)=>{
                    return <NewsComp1 title={ele.title?ele.title:"You won't Belive this ! Breaking News!"} desc={ele.description?ele.description:"Description Unavailable ! Press Read more button to read the full article"} img={ele.urlToImage?ele.urlToImage:"https://source.unsplash.com/720x930/?news"} key={ele.url?ele.url:Math.random(1,10000)} link={ele.url?ele.url:'#'}/>
                    })}
            </div>
        </div>
    )
}

export default Imagecarousel