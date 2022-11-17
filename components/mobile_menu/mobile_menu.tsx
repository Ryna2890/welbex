import styles from "./mobile_menu_styles.module.css";
import Link from "next/link";

export const MobileMenu = () => {
  return (
    <div className={styles.menu}>
      <Link className={styles.menu_link} href={"/"}>
        УСЛУГИ
      </Link>
      <Link className={styles.menu_link} href={"/"}>
        ВИДЖЕТЫ
      </Link>
      <Link className={styles.menu_link} href={"/"}>
        ИНТЕГРАЦИИ
      </Link>
      <Link className={styles.menu_link} href={"/"}>
        КЕЙСЫ
      </Link>
      <Link className={styles.menu_link} href={"/"}>
        СЕРТИФИКАТЫ
      </Link>
    </div>
  );
};
