import { Col, Image, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import styles from "./Layout.module.css"
import { useTranslation } from 'next-i18next'
export const Layout = ({ children }) => {
    const { t } = useTranslation('common')
    console.log(t);
    return (
        <Row justify='center' className={styles.root}>
            <Col span={24} style={{height:'100%'}}>
                <Row justify='center' style={{marginTop:".5rem"}}>
                    <Col span={24} className={styles.logo_col}>
                        <Link href="/">
                            <a>
                                <Image
                                    src='/logo.png'
                                    alt="logo "
                                    width={200}
                                    preview={false}
                                />
                            </a>
                        </Link>
                        <h1>{t('appName')}</h1>
                    </Col>
                </Row>
                <Row  justify='center' style={{height:'100%'}}>
                    <Col span={22} className={styles.col}>
                        {children}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
