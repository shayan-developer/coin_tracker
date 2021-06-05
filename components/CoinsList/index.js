import { Col, Row } from 'antd'
import React from 'react'
import { Coin } from '../Coin'

export const CoinsList = ({ dataList }) => {
    return (
        <Row justify='center'>
            <Col span={20}>
                {dataList.map((coin) => {
                   return <Coin key={coin.id} {...coin} />
                })}
            </Col>
        </Row>
    )
}
