import { Col, Row } from 'antd'
import React from 'react'
import styles from "./Parallelogram.module.css"
export default function Parallelogram({children}) {
    return (
        <Row style={{margin:"1rem 0"}}>
            <Col className={styles.col}>
                <div className={styles.Parallelogram}>
                    <span className={styles.text}> {children}</span>
                </div>
            </Col>
        </Row>
    )
}
