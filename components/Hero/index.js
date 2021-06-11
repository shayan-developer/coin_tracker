import { Button, Col, Image, Row } from 'antd'
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import { useRouter } from 'next/router';
import React from 'react'
import styles from "./hero.module.css"
export default function index() {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : fa
    const scroll=()=>{
        window.scroll({
            top: 3000,
            behavior: 'smooth'
        });
    }
    return (
        <Row className={styles.row}>
            <Col xs={24} sm={24} md={12} className={styles.col}>
                <Image src='./1.png' preview={false} alt="image" className={styles.img} />
            </Col>
            <Col xs={24} sm={24} md={12} className={styles.col}>
                <div className={styles.txt}>
                    {t.heroTxt}
                </div>
                <Button 
                shape='round'
                size='large'
                className={styles.btn}
                type="primary" 
                onClick={scroll}>{t.view}</Button>
            </Col>
        </Row>
    )
}
