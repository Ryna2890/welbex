import styles from "./foter_menu_styles.module.css";
import Link from "next/link";

export const FooterMenu = () => {
  return (
    <div className={styles.menu}>
      <span className={styles.menu_title}>Меню</span>
      <div className={styles.types_wrapper}>
        <div className={styles.types}>
          <Link href={""}>Расчёт стоимости</Link>
          <Link href={""}>Услуги</Link>
          <Link href={""}>Виджеты</Link>
          <Link href={""}>Интеграции</Link>
          <Link href={""}>Наши клиенты</Link>
        </div>
        <div className={styles.types}>
          <Link href={""}>Кейсы</Link>
          <Link href={""}>Благодарственные письма</Link>
          <Link href={""}>Сертификаты</Link>
          <Link href={""}>Блог на Youtube</Link>
          <Link href={""}>Вопрос / Ответ</Link>
        </div>
      </div>
    </div>
  );
};
export default FooterMenu;
