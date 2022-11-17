import styles from "./menu_styles.module.css";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link href={""}>Услуги</Link>
      <Link href={""}>Виджеты</Link>
      <Link href={""}>Интеграции</Link>
      <Link href={""}>Кейсы</Link>
      <Link href={""}>Сертификаты</Link>
    </div>
  );
};
export default Menu;
