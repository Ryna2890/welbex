import styles from "../styles/wibex.module.css";
import Image from "next/image";
import Menu from "../components/menu/menu";
import Contacts from "../components/contacts/contacts";
import Slogan from "../components/slogan/slogan";
import Advantage from "../components/advantage/advantage";
import Footer_menu from "../components/footer_menu/footer_menu";
import Link from "next/link";
import { MobileMenu } from "../components/mobile_menu/mobile_menu";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_redBlure}></div>
      <div className={styles.wrapper_blueBlyre}></div>
      <div className={styles.wrapper_blueCircle}></div>
      <div className={styles.wrapper_redCircle}></div>
      <div className={styles.wrapper_littleCircle}></div>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.logo_wrapper}>
            <Image src={"/logo_welbex.png"} alt={""} width={140} height={24} />
            <div className={styles.logo_text}>
              крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
          </div>
          <Menu />
          <MobileMenu />
          <Contacts isFooter={false} />
        </div>
        <div className={styles.content}>
          <Slogan />
          <Advantage />
        </div>
        <div className={styles.footer}>
          <div className={styles.about}>
            <div className={styles.footer_title}>О КОМПАНИИ</div>
            <div className={styles.footer_text}>
              <Link href={""}>Партнёрская программа</Link>
              <Link href={""}>Вакансии</Link>
            </div>
          </div>
          <Footer_menu />
          <div className={styles.footer_contacts}>
            <div className={styles.footer_title}>КОНТАКТЫ</div>
            <Contacts isFooter={true} />
            <div className={styles.footer_text}>
              Москва, Путевой проезд 3с1, к 902
            </div>
            <div className={styles.politics}>
              ©WELBEX 2022. Все права защищены.
              <Link className={styles.politics_link} href={""}>
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
