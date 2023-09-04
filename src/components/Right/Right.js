import React from 'react'
import styles from './Right.module.css';
import dpimg from './dpimg.png';
import { useState,useEffect } from 'react';
import AuthCard from './AuthCard';
import { auth } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { ScaleLoader } from 'react-spinners';
import MyCarousel3 from '../NewsComp4/MyCarousel3';
import axios from 'axios';
function Right(props) {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = props.apiKey;
  const article = [
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "The Oppo Reno 10 Pro + 5G Unboxing, Specs overview - ITWeb",
      "description": "The Oppo Reno 10 Pro + 5G Unboxing, Specs and overview by ITWeb. Join us as we unbox, explore, and appreciate the Oppo's remarkable features, giving you all ...",
      "url": "https://www.youtube.com/watch?v=VOgGgFsC-Go",
      "urlToImage": "https://i.ytimg.com/vi/VOgGgFsC-Go/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVihIMA8=&rs=AOn4CLDql-gjYJMEQw08L5auBNMVjQszqg",
      "publishedAt": "2023-08-24T07:44:18Z",
      "content": null
    },
  ];

  const [articles,setArticles] = useState(article) ;
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if(user){
          setUserName(user.displayName);
        }else{
          setUserName("");
        }
    });
  });
  useEffect(()=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=8&apiKey=${apiKey}`) 
    .then((response) => {
      setArticles(response.data.articles); 
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[]);


  const handleSignOut = ()=>{
    setTimeout(setIsLoading,2500);
    setIsLoading(true);
    // console.log(isLoading);
    const auth = getAuth();
    signOut(auth).then(() => {

    // Sign-out successful.

    }).catch((error) => {

    // An error happened.

});
  }

  const [toggel8,setToggel8] = useState(false);
  const [toggel1,setToggel1] = useState(false);
  const [toggel2,setToggel2] = useState(false);
  const [toggel3,setToggel3] = useState(false);
  const [toggel4,setToggel4] = useState(false);
  const [toggel5,setToggel5] = useState(false);
  const [toggel6,setToggel6] = useState(false);
  const [toggel7,setToggel7] = useState(false);
  const toggelBtn1 = ()=>{
    
      axios.get(`https://newsapi.org/v2/top-headlines?sources=the-times-of-india&pageSize=8&apiKey=${apiKey}`) 
      .then((response) => {
        setArticles(response.data.articles); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    setToggel1(!toggel1);
    setToggel2(false);
    setToggel3(false);
    setToggel4(false);
    setToggel5(false);
    setToggel6(false);
    setToggel7(false);
    setToggel8(false);
}
const toggelBtn2 = ()=>{
  setToggel2(!toggel2);
  setToggel1(false);
  setToggel3(false);
  setToggel4(false);
  setToggel5(false);
  setToggel6(false);
  setToggel7(false);
  setToggel8(false);
}
const toggelBtn3 = ()=>{
  setToggel3(!toggel3);
  setToggel2(false);
  setToggel1(false);
  setToggel4(false);
  setToggel5(false);
  setToggel6(false);
  setToggel7(false);
  setToggel8(false);
  axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=8&apiKey=${apiKey}`) 
      .then((response) => {
        setArticles(response.data.articles); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

}
const toggelBtn4 = ()=>{
  axios.get(`https://newsapi.org/v2/top-headlines?sources=the-hindu&pageSize=8&apiKey=${apiKey}`) 
      .then((response) => {
        setArticles(response.data.articles); // Update state with the fetched data
        // console.log(response);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  setToggel4(!toggel4);
  setToggel2(false);
  setToggel3(false);
  setToggel1(false);
  setToggel5(false);
  setToggel6(false);
  setToggel7(false);
  setToggel8(false);
}
const toggelBtn5 = ()=>{
  axios.get(`https://newsapi.org/v2/top-headlines?sources=cnn&pageSize=8&apiKey=${apiKey}`) 
      .then((response) => {
        setArticles(response.data.articles); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  setToggel5(!toggel5);
  setToggel2(false);
  setToggel3(false);
  setToggel4(false);
  setToggel1(false);
  setToggel6(false);
  setToggel7(false);
  setToggel8(false);
}
const toggelBtn6 = ()=>{
  axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=8&apiKey=${apiKey}`) 
  .then((response) => {
    setArticles(response.data.articles); 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  setToggel6(!toggel6);
  setToggel2(false);
  setToggel3(false);
  setToggel4(false);
  setToggel5(false);
  setToggel1(false);
  setToggel7(false);
  setToggel8(false);
}
const toggelBtn7 = ()=>{
  axios.get(`https://newsapi.org/v2/top-headlines?sources=cbs-news&pageSize=8&apiKey=${apiKey}`) 
  .then((response) => {
    setArticles(response.data.articles); 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  setToggel7(!toggel7);
  setToggel2(false);
  setToggel3(false);
  setToggel4(false);
  setToggel5(false);
  setToggel6(false);
  setToggel1(false);
  setToggel8(false);
}
const toggelBtn8 = ()=>{
  axios.get(`https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&pageSize=8&apiKey=${apiKey}`) 
  .then((response) => {
    setArticles(response.data.articles);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  setToggel8(!toggel8);
  setToggel2(false);
  setToggel3(false);
  setToggel4(false);
  setToggel5(false);
  setToggel6(false);
  setToggel7(false);
  setToggel1(false);
}
  return (
    <>
    <div className={styles.fullScreen} style={{display:!isLoading?"none":"flex"}}>
      <ScaleLoader className={styles.loader}/>
    </div>
    <div className={styles.right}>
           {auth.currentUser?
                      <nav className={styles.nav}>
                        <div className={styles.inner}>
                      <img src={auth.currentUser.photoURL} className={styles.dp}/>
                      <div>
                          <h2 className={styles.userName}>{userName}</h2>
                          <p className={styles.userMem}>Member</p>
                      </div>
                      </div>
                      <FontAwesomeIcon className={styles.icon} onClick={handleSignOut} icon={faRightToBracket}/>
                   </nav>
           :
           <nav className={styles.nav}>
            <div className={styles.inner}>
              <img src={dpimg} className={styles.dp}/>
              <div>
                  <h2 className={styles.userName}>Guest Account</h2>
                  <p className={styles.userMem}>Guest</p>
              </div>
              </div>
              <Link to="/signup"><button className={styles.login}>Signup</button></Link>
           </nav>
           }
      <div>
        <h1 className={styles.topicHeader}>Explore Source Stories</h1>
        <div className={styles.homeTriggers}>
            <button onClick={toggelBtn1} className={toggel1?styles.toggeled:''} disabled={toggel1?true:false}> Times of India </button>

            <button onClick={toggelBtn4} className={toggel4?styles.toggeled:''} disabled={toggel4?true:false}> The Hindu </button>
            <button onClick={toggelBtn5} className={toggel5?styles.toggeled:''} disabled={toggel5?true:false}> CNN News</button>
            
            <button onClick={toggelBtn6} className={toggel6?styles.toggeled:''} disabled={toggel6?true:false}> Tech Crunch </button>
            <button onClick={toggelBtn7} className={toggel7?styles.toggeled:''} disabled={toggel7?true:false}>  CBS </button>
            <button onClick={toggelBtn3} className={toggel3?styles.toggeled:''} disabled={toggel3?true:false}> BBC </button>
            <button onClick={toggelBtn8} className={toggel8?styles.toggeled:''} disabled={toggel8?true:false}> Wall Street </button>
        </div>
        <MyCarousel3 articles={articles}/>
        <AuthCard loggedin={userName?userName:false} setIsLoading={setIsLoading}/>
      </div>
    </div>
    </>
  )
}

export default Right;