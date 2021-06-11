import { useRouter } from 'next/router';
import React from 'react'
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import styles from './Footer.module.css'
import {
    InstagramFilled,
    LinkedinFilled,
    WhatsAppOutlined
} from "@ant-design/icons"
export default function Footer() {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : fa
    return (
        <footer className={styles.box}>
            <div className={styles.txt_box}>
                <p className={styles.txt}>{t.footer_txt}</p>
            </div>
            <div className={styles.icon_contain}>
                <a href='https://www.instagram.com/shayan.shadanpour'
                    target="_blank"
                    rel='noreferrer'
                    className={styles.insta}>
                    <InstagramFilled />
                </a>
                <a href='https://www.linkedin.com/in/shayan-shadanpoor-912aa720b'
                    target="_blank"
                    rel='noreferrer'
                    className={styles.linke}>
                    <LinkedinFilled />
                </a>
                <a href="https://api.whatsapp.com/send?phone=989305241553"
                    target="_blank"
                    rel='noreferrer'
                    className={styles.whats}>
                    <WhatsAppOutlined />
                </a>
            </div>
        </footer>
    )
}
