import { Col, Row } from 'antd'
import React from 'react'
import styles from "./Layout.module.css"
export const Layout = ({ children }) => {
    return (
        
        <Row className={styles.root} justify='center'>
            <Col span={22} >
                {children}
            </Col>
        </Row>
        
    )
}
