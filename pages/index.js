import Head from 'next/head'
import Link from 'next/link'
import { url } from "../lib/url";
import { ConfigProvider, Image } from 'antd';
import { Search } from '../components/Search'
import { CoinsList } from '../components/CoinsList';
import Layout from '../components/Layout';
import { fetcher } from '../lib/fetcher';
import { useRouter } from 'next/router';
export default function Home({ data }) {
  const router = useRouter()
  const { locale } = router;
  const dir = locale === "en" ? "ltr" : "rtl"
  return (
    <>
      <Head>
        <title> price tracker </title>
      </Head>
      <Layout >
        <ConfigProvider direction={dir}>
        <Search type="text" placeholder=" searching... " />
        <CoinsList datalist={data}/>
        </ConfigProvider>
      </Layout >
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetcher(url)
  return {
    props: {
      data: res
    }
  }
}
