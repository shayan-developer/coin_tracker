import { Table } from 'antd';
import React from 'react';
import { sortedData } from '../../lib/sortedData';
import styles from "./coins.module.css"
import { columns } from './columns';
import { useRouter } from 'next/router'

export const CoinsList = ({datalist}) => {
    const router = useRouter()
    return (
        <Table
         columns={columns}
          dataSource={sortedData(datalist)}
          pagination={false}
          rowClassName={styles.row}
          className={styles.table}
          scroll={{x:true}}
          onRow={(record) => {
              return{
                onClick: () =>router.push(`/coin/${record.name.id}`)
              }
          }}
          style={{backgroundColor:"#0c4271"}}
           />
    )
}
