import Link from "next/link";
import Image from "next/image";
import styles from "./contacts_styles.module.css";
import { FC } from "react";

interface CProps {
  isFooter: boolean;
}

export const Contacts: FC<CProps> = ({ isFooter }) => {
  return (
    <div className={isFooter ? styles.contacts_footer : styles.contacts}>
      <Link href={"tel:+75555555555"}>+7 555 555-55-55</Link>
      <div
        className={
          isFooter ? styles.contacts_social__footer : styles.contacts_social
        }
      >
        <Link href={"https://t.me/name"}>
          <Image src={"/telegram.svg"} alt={""} width={17} height={14} />
        </Link>
        <Link href={"tel:+75555555555"}>
          <Image src={"/phone.svg"} alt={""} width={16} height={16} />
        </Link>
        <Link href={"https://wa.me/+75555555555"}>
          <Image src={"/wa.svg"} alt={""} width={16} height={15} />
        </Link>
      </div>
    </div>
  );
};
export default Contacts;
