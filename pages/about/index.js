import { Col, ConfigProvider, Divider, Row, Typography } from 'antd'
import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import Layout from '../../components/Layout'
import styles from "../../styles/about.module.css"
export default function About() {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : fa;
    const dir = locale === "en" ? "ltr" : "rtl"
    const { Paragraph } = Typography
    return (
        <>
            <Head>
                <title> {t.about_callme} </title>
            </Head>
            <Layout>
                <ConfigProvider direction={dir}>
                    <Row className={styles.row} justify='center'>
                        <Col className={styles.col}>
                            <div className={styles.box}>
                                <Typography className={styles.info}>
                                    <Paragraph className={styles.head}>
                                        {t.about_header1}
                                    </Paragraph>
                                    <Paragraph className={styles.txt}>
                                        {t.about_text1}
                                    </Paragraph>

                                </Typography>
                                <Divider style={{ backgroundColor: "#fff" }} />
                                <Typography>
                                    <Paragraph className={styles.head}>
                                        {t.about_callme}
                                    </Paragraph>
                                    <Paragraph className={styles.txt}>
                                        {t.about_callme_num}
                                    </Paragraph>
                                </Typography>
                                <Divider style={{ backgroundColor: "#fff" }} />
                                <Typography className={styles.info}>
                                    <Paragraph className={styles.head}>
                                        {t.about_header2}
                                    </Paragraph>
                                    <Paragraph className={styles.txt}>
                                        {t.about_text2}
                                        <Typography className={styles.pro}>
                                            <div>
                                                <Paragraph className={styles.head}>
                                                    {t.about_prj1}
                                                </Paragraph>
                                                <a href="https://birth-day-counter.vercel.app/"
                                                    target="_blank"
                                                    rel='noreferrer'
                                                    className={styles.txt}>
                                                    {t.about_view}
                                                </a>
                                            </div>
                                            <div>
                                                <Paragraph className={styles.head}>
                                                    {t.about_prj2}
                                                </Paragraph>
                                                <a href="http://weather.gigfa.com"
                                                    target="_blank"
                                                    rel='noreferrer'
                                                    className={styles.txt}>
                                                    {t.about_view}
                                                </a>
                                            </div>
                                        </Typography>
                                    </Paragraph>
                                </Typography>
                            </div>
                        </Col>
                    </Row>
                </ConfigProvider>
            </Layout>
        </>
    )
}
