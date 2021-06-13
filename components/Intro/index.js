import { Col, Image, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import React from 'react'
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import styles from "./intro.module.css"
export default function index() {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : fa;
    const { Paragraph } = Typography
    return (
        <Row justify='space-between' className={styles.row} >
            <Col xs={22} sm={22} md={22} xl={7} style={{margin:"0 auto"}}>
                <div className={styles.box}>
                    <Image src="./c1.png"
                        preview={false}
                        className={styles.img}
                    />
                    <Paragraph className={styles.txt}>{t.intro_txt1}</Paragraph>
                </div>
            </Col>

            <Col xs={22} sm={22} md={22} xl={7} style={{margin:"0 auto"}}>
                <div className={styles.box}>
                    <Image src="./c2.png"
                        preview={false}
                        className={styles.img}
                    />
                    <Paragraph className={styles.txt}>{t.intro_txt2}</Paragraph>
                </div>
            </Col>
            <Col xs={22} sm={22} md={22} xl={7} style={{margin:"0 auto"}}>
                <div className={styles.box}>
                    <Image
                        src="./c3.png"
                        preview={false}
                        className={styles.img}
                    />
                    <Paragraph className={styles.txt}>{t.intro_txt3}</Paragraph>
                </div>
            </Col>
        </Row>
    )
}
