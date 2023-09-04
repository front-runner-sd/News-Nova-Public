import { useState,useEffect } from 'react';
import style from './Signup.module.css';
import { Link,useNavigate } from 'react-router-dom';
import PopUp from '../PopUp/popUp';
import { ScaleLoader } from 'react-spinners';
import {createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth,gProvider,signInWithPopup} from "../../firebase";

function Signup() {
  const [isLoading,setIsLoading]=useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0);
    setTimeout(setIsLoading,3500);
    setIsLoading(true);
  },[]);

  const navigate = useNavigate();
  const [values,setValues]=useState({
        name : "",
        email: "",
        pass:  ""
  });
  const [err,setErr] = useState(false);
  const [errmsg,setErrmsg] = useState('');
  const [submitDisable,setSubmitDisable]=useState(false); 

  const handleSubmisson=(e)=>{
    e.preventDefault();
    if(!values.name || !values.email || !values.pass){
      setErr(true);
      setErrmsg("No field should be empty ! Please fill all the fields !" );
      return;
    }
    
    setSubmitDisable(true);
    createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then(async (res)=>{ 
      setSubmitDisable(false);
        const user = res.user;
        await updateProfile(user,{displayName:values.name});
        navigate('/');
    })
    .catch((err)=>{
      setSubmitDisable(false);
      setErr(true);
      setErrmsg(err.message );
      console.log(err.message)});
    
  }

  const handleSubmisson2=(e)=>{
    e.preventDefault();
    setSubmitDisable(true);
    signInWithPopup(auth, gProvider)
    .then(()=>{ 
      setSubmitDisable(false);
        navigate('/');
    })
    .catch((err)=>{
      setSubmitDisable(false);
      setErr(true);
      setErrmsg(err.message );
      });
    
  }
  return ( 
    <div>
      <div className={style.fullScreen} style={{display:!isLoading?"none":"flex"}}>
        <ScaleLoader className={style.loader}/>
      </div>
      <div>
          <PopUp trigger={err} setTrigger={setErr} errorMessage={errmsg}/>
      </div>
      <section className={style.sec}>
        <div className={style.card}>
           <div className={style.left}>
              <img className={style.image} src="https://source.unsplash.com/720x930/?color"  alt="Error! Problem with server!"/>
           </div>
           <div className={style.right}>
               <h1 className={style.appName}>News Nova</h1>
               <h2 className={style.h2}>Create an Account</h2>
               <form>
                <div>
                  <input type="text" className={style.input} placeholder="Your Name" 
                  onChange={(event)=>setValues((prev)=>({...prev, name:event.target.value}))}/>
                </div>
               <div>
                    <input type="email" className={style.input} placeholder="Email Address"
                    onChange={(event)=>setValues((prev)=>({...prev, email:event.target.value}))}/>
                </div>
                <div>
                    <input type="password" className={style.input} placeholder="Password"
                    onChange={(event)=>setValues((prev)=>({...prev, pass:event.target.value}))}/>
                </div>
                <div>
                      <button className={style.submit} onClick={handleSubmisson} disabled={submitDisable}> Sign up </button>
                </div>
               </form>
               <div className={style.extras}>
               <p>Already have an account?<Link to="/login" >Login here </Link> </p>
               </div>
               <h1 className={style.or}>Or</h1>
               <div>
                    <button className={style.continue} onClick={handleSubmisson2} disabled={submitDisable}> Continue with Google </button>
               </div>
           </div>
        </div>
      </section>
    </div>
   );
}

export default Signup;