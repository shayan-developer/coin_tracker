import { Col, Image, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import styles from "./Layout.module.css"
export const Layout = ({ children }) => {
    return (
        <Row justify='center' className={styles.root}>
            <Col span={24}>
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
                    </Col>
                </Row>
                <Row  justify='center'>
                    <Col span={22} className={styles.col}>
                        {children}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
