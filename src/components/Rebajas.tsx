import styles from './Rebajas.module.css';
import down from '../assets/down-arrow.png'
export default function Rebajas() {
    const goDown = () => {
        window.scrollTo({
          top: 900, 
          behavior: 'smooth'
        });
      };
    return(
        <div className={styles.main}>
            <h1 className={styles.title}>Rebajas <br /><br /> Hasta -50% <br /> Online</h1>
            <p className={styles.desc}>Desplázate hacia abajo para más contenido</p>
            <button onClick={goDown} className={styles.descIcon}> <img className={styles.descIconImg} alt="Scroll down icon" src={down}></img></button>  
        </div>



    )
}