import { useRouter } from 'next/router';
import React from 'react'
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import styles from './Footer.module.css'
export default function Footer() {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : fa
    return (
        <div className={styles.box}>
            <div className={styles.txt}>
                <p>ssssssssss</p>
            </div>
            <div className={styles.icon_contain}>
                icon
            </div>
        </div>
    )
}
