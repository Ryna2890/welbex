import styles from "./advantage_styles.module.css";
import Button from "../button/button";

export const Advantage = () => {
  return (
    <div className={styles.advantage}>
      <div className={styles.advantage_title}>
        Вместе с <span className={styles.advantage_gradient}> бесплатной</span>
        <br />
        <span className={styles.advantage_gradient}>консультацией</span> мы
        дарим:
      </div>

      <div className={styles.types_wrapper}>
        <div className={styles.types}>
          <div className={styles.kinds}>
            <div>ВИДЖЕТЫ</div>
            <div className={styles.kinds_text}>
              30 готовых <br /> решений
            </div>
          </div>

          <div className={styles.kinds}>
            <div className={styles.title}>DASHBOARD</div>
            <div className={styles.kinds_text}>
              с показателями
              <br /> вашего бизнеса
            </div>
          </div>
        </div>

        <div className={styles.types}>
          <div className={styles.kinds}>
            <div>SKYPE АУДИТ</div>
            <div className={styles.kinds_text}>
              отдела продаж <br /> и CRM системы
            </div>
          </div>

          <div className={styles.kinds}>
            <div className={styles.title}>35 ДНЕЙ</div>
            <div className={styles.kinds_text}>
              использования
              <br /> CRM
            </div>
          </div>
        </div>
        <Button />
      </div>
      <div className={styles.types_mobile}>
        <div className={styles.kinds}>
          <div className={styles.title}>SKYPE АУДИТ</div>

          <div className={styles.title}>DASHBOARD</div>
        </div>
        <div className={styles.kinds}>
          <div className={styles.title}>30 ВИДЖЕТОВ</div>
          <div className={styles.title}>МЕСЯЦ AMOCRM</div>
        </div>
      </div>
    </div>
  );
};
export default Advantage;
