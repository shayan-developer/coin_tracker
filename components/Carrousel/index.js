import React from 'react'
import styles from './carrousel.module.css'
import { Button, Col, Image, Row } from 'antd'
export default function Carrousel() {
    return (
        <Row style={{width:'100%'}}>
            <Col span={24}>
            <section className={styles.slideshow}>
                <div className={styles.entire_content}>
                    <div className={styles.content_carrousel}>
                        <figure className={styles.shadow}><img src='./teth.webp' /></figure>
                        <figure className={styles.shadow}><img src='./xrp.png'/></figure>
                        <figure className={styles.shadow}><img src='./eth.png' /></figure>
                        <figure className={styles.shadow}><img src='./dog.png' /></figure>
                        <figure className={styles.shadow}><img src='./bit.png' /></figure>
                    </div>
                </div>
            </section>
            </Col>
        </Row>
    )
}
