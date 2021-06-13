import { Col, Row } from 'antd'
import React from 'react'
import styles from "./Parallelogram.module.css"
export default function Parallelogram({children}) {
    return (
        <Row style={{margin:"1rem 0"}}>
            <Col className={styles.col}>
                <div className={styles.Parallelogram}>
                    <div className={styles.text}> {children}</div>
                </div>
            </Col>
        </Row>
    )
}
