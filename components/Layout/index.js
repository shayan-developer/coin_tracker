import { Col, Image, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import styles from "./Layout.module.css"
import { useRouter } from "next/router"
import Nav from '../Nav'
import  Footer  from "../Footer"
export default function Layout({ children, hero }) {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : fa
    return (
        <Row justify='center' className={styles.root}>
            <Col span={24} style={{ height: '100%' }}>
                <Row justify='center'>
                    <Col span={24} className={styles.logo_col}>
                        <Nav />
                    </Col>
                </Row>
                {hero}
                <Row justify='center' style={{ height: '100%' }}>
                    <Col span={22} className={styles.col}>
                        {children}
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Footer />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
