import React from 'react'
import  Layout  from '../../components/Layout';
import { fetchId } from '../../lib/fetchId';
import { getPost } from '../../lib/getPost';
import { url } from '../../lib/url';
import { Card, Image } from 'antd';
import styles from "../../styles/coin.module.css"
const { Meta } = Card;

export default function Coin({ data }) {
    return (
        <Layout>
            <Card
                hoverable
                className={styles.card}
                cover={<Image className={styles.img} alt={data.name} src={data.image.large} preview={false} />}
            >
                <Meta title={data.name} />
                <p className={styles.txt}>{data.symbol.toUpperCase()}</p>
                <p className={styles.txt}>Price : ${data.market_data.current_price.usd.toLocaleString()} </p>
                <p className={styles.txt}> MKT CAP : ${data.market_data.market_cap.usd.toLocaleString()} </p>
            </Card>
        </Layout>
    )
}
export async function getStaticPaths({ locales }) {
    const res = await fetchId(url)
    const paths = res
    return {
        paths,
        fallback: true
    }
}
export async function getStaticProps({ params }) {
    const res = await getPost(params.id);
    return {
        props: {
            data: res
        }
    }
}