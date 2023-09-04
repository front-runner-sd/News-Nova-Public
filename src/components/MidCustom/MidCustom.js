import React from 'react'
import styles from './MidCustom.module.css';

import axios from "axios";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NewsComp3 from '../NewsComp3/NewsComp3';
import { ScaleLoader } from 'react-spinners';
import PopUp from '../PopUp/popUp';

const MidCustom = (props) => {
    const dateObj = new Date();
    const dayNum = dateObj.getDay();
    const dayNumMapping = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = dayNumMapping[dayNum];
    const monthNum = dateObj.getMonth();
    const monthMapping = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const month = monthMapping[monthNum];
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();

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
      const [page,setPage] = useState(1);
      const [isLoading,setIsLoading] = useState(false);
      useEffect(()=>{

        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.query}&pageSize=4&page=${page}&apiKey=a783ae5695704dd4ba5ea79f95c0c8b3`) 
        .then((response) => {
          setArticles(response.data.articles);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

        setIsLoading(true);
        const notLoading = ()=> setIsLoading(false);
        setTimeout(notLoading,1500);
      },[props,page]);


    const doSearch = (event)=>{
        if(event.key==='Enter'){
            search();
            event.currentTarget.blur();
        }
    }
    
    const [err,setErr] = useState(false);
    const [errmsg,setErrmsg] = useState('');
    const search = ()=>{
      setErr(true);
      setErrmsg("Due to Limitations of the API , This feature is prohibited in the production environment! Sorry for inconvenience")
    }


    const handleNext = ()=>{
      
      setPage((page)=>{return page+1});

      setIsLoading(true);
      const notLoading = ()=> setIsLoading(false);
      setTimeout(notLoading,1500);
    }

    const handlePrev = ()=>{
      setPage((page)=>{return page-1});


      setIsLoading(true);
      const notLoading = ()=> setIsLoading(false);
      setTimeout(notLoading,1500);
    }
    

  return (
    <>
    <div>
      <PopUp trigger={err} setTrigger={setErr} errorMessage={errmsg}/>
    </div>
        <div className={styles.Middle}>
              <div className={styles.dateAndSearch}>
                <div className={styles.date}>
                    <div className={styles.upperDate}>{day}</div>
                    <div className={styles.lowerDate}>{`${month} ${date}, ${year}`}</div>
                </div>
                <div className={styles.test}>
                <FontAwesomeIcon className={styles.i_ele} icon={faSearch} />
                <input type="text" id="input" className={styles.input} placeholder="search a topic" onKeyDown={doSearch}></input>
                </div>
                <button className={styles.searchButton} onClick={search}><FontAwesomeIcon icon={faSearch} /></button>
                          </div>
          {
            isLoading? 
            <div className={styles.fullScreen} style={{display:!isLoading?"none":"flex"}}>
              <ScaleLoader className={styles.loader}/>
            </div>
            :
            <div>
           <div className={styles.topHeadlines}>
              <h1>Top {props.query} news of the Week</h1>
              <div className={styles.customContainer}>
              {articles.map((ele)=>{
                    return <NewsComp3 title={ele.title?ele.title:"You won't Belive this ! Breaking News!"} desc={ele.description?ele.description:"Description Unavailable ! Press Read more button to read the full article"} img={ele.urlToImage?ele.urlToImage:"https://source.unsplash.com/720x930/?news"} key={ele.url?ele.url:Math.random(1,10000)} link={ele.url?ele.url:'#'} author={ele.author?ele.author:"Unknown"}/>
                    })}
              </div>
           </div>
           <div className={styles.btns}>
                <button disabled={page==1?true:false} onClick={handlePrev}>←  Prev Page</button>
                <button disabled={page==6?true:false} onClick={handleNext}> Next Page  →</button>
           </div>
            </div>
          }

        </div>
        </>
  );
};

export default MidCustom;