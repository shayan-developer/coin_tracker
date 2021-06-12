import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout';
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import { fetchId } from '../../lib/fetchId';
import { getPost } from '../../lib/getPost';
import { url } from '../../lib/url';
import { Card, Image ,ConfigProvider} from 'antd';
import styles from "../../styles/coin.module.css"
import { useRouter } from 'next/router';
const { Meta } = Card;

export default function Coin({ data }) {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : fa;
    const dir = locale === "en" ? "ltr" : "rtl"
    return (
        <>
            <Head>
                <title>{data.name}</title>
            </Head>
            <Layout>
                <ConfigProvider direction={dir}>
                    <Card
                        hoverable
                        className={styles.card}
                        cover={<Image className={styles.img} alt={data.name} src={data.image.large} preview={false} />}
                    >
                        <Meta title={data.name} />
                        <p className={styles.txt}>{data.symbol.toUpperCase()}</p>
                        <p className={styles.txt}>{t.price} : ${data.market_data.current_price.usd.toLocaleString()} </p>
                        <p className={styles.txt}> {t.volume} : ${data.market_data.market_cap.usd.toLocaleString()} </p>
                        <p className={styles.txt}>{t.genesis} : {data.genesis_date}</p>
                    </Card>
                </ConfigProvider>
            </Layout>
        </>
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