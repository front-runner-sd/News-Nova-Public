import styles from'./Home.module.css';
import LeftNav from '../LeftNav/LeftNav';
import Middle from '../Mid/Middle';
import Right from '../Right/Right';
function Home(props) {
  return (
        <div className={styles.body}>
            <LeftNav/>
            <Middle/>
            <Right apiKey={props.apiKey}/>
        </div>
  );
}

export default Home;
