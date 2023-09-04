import React from 'react'
import NewsComp2 from './NewsComp2';
import styles from './Carousel2.module.css';
import styles2 from './NewsComp2.module.css';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect,useState } from 'react';
import axios from 'axios';
const MyCarousel2 = () => {


    const article = [
        {
          "source": { "id": null, "name": "Devdiscourse" },
          "author": "ANI",
          "title": "Solar mission ‘Aditya’ will be ready for launch in September: ISRO chief Somanath sets next goal - Devdiscourse",
          "description": "As the country rejoiced the successful placement of the ISRO lander — Vikram — on the moon's uncharted South Pole, the agency's chairman S Somanath on Thursday confirmed that its maiden solar mission 'Aditya' is in the works and will be ready for launch in Se…",
          "url": "https://www.devdiscourse.com/article/headlines/2569155-solar-mission-aditya-will-be-ready-for-launch-in-september-isro-chief-somanath-sets-next-goal",
          "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/24_08_2023_08_18_49_9421029.jpg?width=920&format=jpeg",
          "publishedAt": "2023-08-24T08:18:52Z",
          "content": "As the country rejoiced the successful placement of the ISRO lander Vikram on the moon's uncharted South Pole, the agency's chairman S Somanath on Thursday confirmed that its maiden solar mission 'Ad… [+3862 chars]"
        },
        {
          "source": { "id": null, "name": "NDTV News" },
          "author": null,
          "title": "6 Countries To Join BRICS From January 1 Next Year. They Are... - NDTV",
          "description": "Egypt, Ethiopia, Iran, Argentina, the United Arab Emirates and Saudi Arabia, and will join Brazil, Russia, China, India and South Africa as full members of the BRICS bloc from January 1, 2024.",
          "url": "https://www.ndtv.com/world-news/6-countries-to-join-brics-from-january-1-next-year-they-are-4324996",
          "urlToImage": "https://c.ndtvimg.com/2023-08/a87certg_brics-2023_625x300_23_August_23.jpg",
          "publishedAt": "2023-08-24T07:56:28Z",
          "content": "This is the first in-person BRICS meet since 2019, the start of the Covid pandemic.\r\nNew Delhi: The BRICS grouping will invite six nations to become full members, South Africa President Cyril Ramapho… [+2735 chars]"
        }
      ]
      const [articles,setArticles] = useState(article) ;
      const [disableBtnforShortTime,setDisableBtnforShortTime] = useState(false) ;

      useEffect(()=>{
        axios.get(`https://newsapi.org/v2/everything?q=trending&apiKey=a783ae5695704dd4ba5ea79f95c0c8b3`) 
        .then((response) => {
          setArticles(response.data.articles); // Update state with the fetched data
          setTimeout(btnpressnext, 3000);
          setTimeout(btnpressnext, 4000);
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
    try{const slider = document.querySelector(`.${styles.productContainer}`);
        const ele = document.querySelector(`.${styles2.card}`);
        const width = ele.offsetWidth;
        slider.scrollLeft -= width;
    }catch(err){

        }

    }

    const btnpressnext = () => {
      setDisableBtnforShortTime(true);
      setTimeout(() => {
        setDisableBtnforShortTime(false);
      }, 1000);
      try{
        const slider = document.querySelector(`.${styles.productContainer}`);
        const ele = document.querySelector(`.${styles2.card}`);
        const width = ele.offsetWidth;
        // console.log(width);
        slider.scrollLeft += width;
      }
      catch(err){

      }
    }
    return (
        <div className={styles.productCarousel}>
            <button className={styles.preBtn} onClick={btnpressprev} disabled={disableBtnforShortTime} ><FontAwesomeIcon className={styles.left} icon={faAngleLeft}/></button>
            <button className={styles.nextBtn} onClick={btnpressnext}  disabled={disableBtnforShortTime} ><FontAwesomeIcon className={styles.right} icon={faAngleRight}/></button>


            <div className={styles.productContainer}>
                {articles.map((ele)=>{
                    return <NewsComp2 title={ele.title?ele.title:"You won't Belive this ! Breaking News!"} desc={ele.description?ele.description:"Description Unavailable ! Press Read more button to read the full article"} img={ele.urlToImage?ele.urlToImage:"https://source.unsplash.com/720x930/?news"} key={ele.url?ele.url:Math.random(1,10000)} link={ele.url?ele.url:'#'} author={ele.author?ele.author:"Unknown"}/>
                    })}
            </div>
        </div>
    )
}

export default MyCarousel2;