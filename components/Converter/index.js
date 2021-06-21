import React, { useState, useEffect } from 'react'
import { Row, Col, Input, Select } from 'antd'
import { SwapOutlined } from '@ant-design/icons'
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import styles from "./converter.module.css"
import { fetcher } from '../../lib/fetcher'
import { dollarEx } from '../../lib/dollarEx'
import { rialEx } from '../../lib/rialEx'
import { useRouter } from 'next/router'
const { Option } = Select
export default function Converter({ coins }) {
    const [dollar, setdollar] = useState(0)
    const [inp, setInp] = useState('1')
    const [select, setSelect] = useState('bitcoin')
    const router = useRouter()
    const {locale}=router;
    const t = locale==="en"?en:fa;
    const coinPrice = {
        bitcoin: coins[0].current_price,
        ethereum: coins[1].current_price,
        tether: coins[2].current_price,
    }
    const selectCoin=coinPrice[select]
    const num=inp||1
    const selectChange = (e) => {
        setSelect(e)
    }
    const inpChange = (e) => {
        setInp(e.target.value)
    }
    useEffect(() => {
        async function fetching() {
            const res = await fetcher('https://api.accessban.com/v1/data/sana/json')
            setdollar(res.sana.data[16].p);
        }
        fetching()
    }, [])
    return (
        <Row justify='center' className={styles.row}>
            <Col span={22} className={styles.col}>
                <div className={styles.box}>
                    <Input  
                    onChange={inpChange}
                    placeholder={t.placeholder}
                    value={inp}
                     className={styles.input} />
                    <span className={styles.icon}><SwapOutlined rotate={90} /></span>
                    <Select defaultValue="bitcoin"
                        onChange={selectChange} 
                        className={styles.select}
                         >
                        <Option value="bitcoin">{t.bitcoin}</Option>
                        <Option value="ethereum">{t.ethereum}</Option>
                        <Option value="tether">{t.tether}</Option>
                    </Select>
                </div>
                <div className={styles.res}>
                        <p className={styles.txt}>{t.us_dollar} : {dollarEx(num,selectCoin)}</p>
    
                        <p className={styles.txt}> {t.iranian_rial} : {rialEx(num,selectCoin,dollar)}</p>
                </div>
            </Col>
        </Row>
    )
}
