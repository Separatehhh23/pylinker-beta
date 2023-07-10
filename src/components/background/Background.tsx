import styles from './Background.module.scss'

const Background = () => {
  return(
    <div className={styles.gradient}>
      <div className={styles.tiles}>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
        <div className={styles.tile}></div>
      </div>
    </div>
  );
}

export default Background;
