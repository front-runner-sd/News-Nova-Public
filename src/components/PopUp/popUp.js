import style from "./popUp.module.css";

function PopUp(props) {
  return (props.trigger)?(
    <div>
        <div className={style.cardBg}>
        <div className={style.card}>
        <div className={style.poptxt}>{props.errorMessage}</div>
        <button className={style.popbtn} onClick={()=>props.setTrigger(false)}> OK </button>
      </div>
    </div>
    </div>
  ):"";
}

export default PopUp;
