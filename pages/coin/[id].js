import React from 'react'
import { Layout } from '../../components/Layout';
import { fetchId } from '../../lib/fetchId';
import { getPost } from '../../lib/getPost';
import { url } from '../../lib/url';
import { Card ,Image} from 'antd';
import styles from "../../styles/coin.module.css"
const { Meta } = Card;

export default function Coin({ data }) {
    return (
        <Layout>
            <Card
                hoverable
                className={styles.card}
                style={{ width: 240 }}
                cover={<Image alt={data.name}src={data.image.large} preview={false}/>}
            >
                <Meta title={data.name} />
               <p>{data.symbol.toUpperCase()}</p>
                <p>Price : ${data.market_data.current_price.usd.toLocaleString()} </p> 
                <p> MKT CAP : ${data.market_data.market_cap.usd.toLocaleString()} </p>
            </Card>
        </Layout>
    )
}
export async function getStaticPaths() {
   const res = await fetchId(url)
   const paths=res
    return {
                paths,
                fallback: false
    }
}
export async function getStaticProps({params}) {
    const res =await getPost(params.id);
    return{
                props:{
                data:res
        }
    }
}