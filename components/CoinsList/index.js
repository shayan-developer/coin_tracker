import { Table ,Typography} from 'antd';
import React, { useState, useEffect } from 'react';
import { sortedData } from '../../lib/sortedData';
import styles from "./coins.module.css"
import { columns } from './columns';

export const CoinsList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchdata = async () => {
            const res = await sortedData()
            setData(res)
            setLoading(false)
        }
        fetchdata()
    }, [])
    return (
        <Table
         columns={columns}
          dataSource={data}
          loading={loading}
          pagination={false}
          rowClassName={styles.row}
          className={styles.table}
          scroll={{x:true}}
          style={{backgroundColor:"#0c4271"}}
           />
    )
}
