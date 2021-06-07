import { Col, Input, Row } from 'antd'
import React from 'react'
import styles from "./search.module.css"
export const Search = ({ ...props }) => {
    return (
        <Row justify='center' style={{marginTop:'1rem'}}>
            <Col span={12}>
                <Input  {...props} />
            </Col>
        </Row>
    )
}
