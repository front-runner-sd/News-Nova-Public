import styles from "./Middle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../NewsComp1/MyCarousel";
import Carousel2 from "../NewsComp2/MyCarousel2";
import { useState } from "react";
import PopUp from "../PopUp/popUp";
const Middle = (props) => {
    const dateObj = new Date();
    const dayNum = dateObj.getDay();
    const dayNumMapping = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = dayNumMapping[dayNum];
    const monthNum = dateObj.getMonth();
    const monthMapping = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const month = monthMapping[monthNum];
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();

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
           <div className={styles.topHeadlines}>
              <h1>Top Headlines of the Week</h1>
              <div>
                <Carousel TopHeadlines={props.TopHeadlines} Trending={props.Trending}/>
              </div>
           </div>
           <div className={styles.trending}>
                <h1>Trending Now</h1>
                <Carousel2 Trending={props.Trending}/>
           </div>
        </div>
        </>
  );
};

export default Middle;