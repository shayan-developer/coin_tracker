import { Table } from 'antd';
import React from 'react';
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import { sortedData } from '../../lib/sortedData';
import styles from "./coins.module.css"
import { useRouter } from 'next/router'
import {Avatar} from "antd";
export const CoinsList = ({datalist}) => {
    const router = useRouter()
    const {locale}=router;
    const t = locale==="en"?en:fa
    //==========================columns ======================
    const columns = [
        {
            title: '',
            dataIndex: 'icon',
            key: 'icon',
            render: ic => <Avatar src={ic} size={{
                xs:20,
                sm:25,
                md:35,
                lg:40,
                xl:45,
                xxl:50
            }} />,
        },
        {
            title: t.name,
            dataIndex: 'name',
            key: 'name',
            render:item=>{
              return <span>
                   {item.name} 
                </span>
            }
        },
        {
            title: t.price,
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '24h',
            dataIndex: 'price_change',
            key: 'price_change',
            render: num => {
                    if(num<0){
                       return <span style={{color:"red"}}>
                        {num.toFixed(2)}%
                    </span>
                    }
                    else{
                        return <span style={{color:"green"}}>
                        {num.toFixed(2)}%
                    </span>
                    }
            }
        },
        {
            title: t.volume,
            dataIndex: 'volume',
            key: 'volume',
        },
    ];
    // =================================================
    return (
        <Table
         columns={columns}
          dataSource={sortedData(datalist)}
          pagination={false}
          rowClassName={styles.row}
          className={styles.table}
          scroll={{x:true}}
          size='small'
          onRow={(record) => {
              return{
                onClick: () =>router.push(`/coin/${record.name.id}`)
              }
          }}
           />
    )
}
