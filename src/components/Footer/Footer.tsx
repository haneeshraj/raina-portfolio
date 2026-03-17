import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__notch} aria-hidden="true" />
      <div className={styles.footer__inner}>
        <div className={styles.footer__left}>
          <Link href="/" className={styles.footer__logoLink} aria-label="Raina home">
            <Image
              src="/logo-white.svg"
              alt="Raina logo"
              width={84}
              height={52}
              className={styles.footer__logo}
              priority={false}
            />
          </Link>
          <nav aria-label="Footer navigation">
            <ul className={styles.footer__navList}>
              <li>
                <Link href="/" className={styles.footer__navLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className={styles.footer__navLink}>
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/work" className={styles.footer__navLink}>
                  Work
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.footer__center}>
          <div className={styles.footer__heading}>
            <p className={styles.footer__titleSmall}>let us</p>
            <h2 className={styles.footer__titleBig}>connect</h2>
            <span className={styles.footer__burst} aria-hidden="true">
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 2L27.5 15.5L38.5 7.5L33 20L46 24L33 28L38.5 40.5L27.5 32.5L24 46L20.5 32.5L9.5 40.5L15 28L2 24L15 20L9.5 7.5L20.5 15.5L24 2Z" />
              </svg>
            </span>
          </div>
          <a className={styles.footer__infoLink} href="mailto:rainamotihar14@gmail.com">
            rainamotihar14@gmail.com
          </a>
          <a
            className={styles.footer__infoLink}
            href="https://www.linkedin.com/in/raina-motihar-a75672198"
            target="_blank"
            rel="noreferrer"
          >
            www.linkedin.com/in/raina-motihar-a75672198
          </a>
          <p className={styles.footer__location}>📍 Toronto</p>
        </div>

        <div className={styles.footer__right}>
          <p className={styles.footer__hello}>say hello!</p>
          <Link href="/contact" className={styles.footer__contactButton}>
            contact form
            <span className={styles.footer__contactIcon} aria-hidden="true">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 5L14 10L6 15V5Z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
