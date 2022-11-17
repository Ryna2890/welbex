import styles from "./slogan_styles.module.css";

export const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <div className={styles.slogan_title}>
        <span>
          Зарабатывайте <br /> больше
        </span>
        <span className={styles.slogan_title__gradient}>с WELBEX</span>
      </div>
      <span className={styles.slogan_subtitle}>
        Развиваем и контролируем <br /> продажи за вас
      </span>
    </div>
  );
};
export default Slogan;
