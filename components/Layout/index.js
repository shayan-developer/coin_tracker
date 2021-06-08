import { Col, Image, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import styles from "./Layout.module.css"
export const Layout = ({ children }) => {
    return (

        <Row className={styles.root} justify='center'>
            <Col span={22} className={styles.col}>
                <Link href="/">
                    <a>
                        <Image
                            src='./logo.png'
                            alt="logo "
                            width={200}
                            preview={false} />
                    </a>
                </Link>
                {children}
            </Col>
        </Row>

    )
}
