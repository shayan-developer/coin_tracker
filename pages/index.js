import Head from 'next/head'
import Link from 'next/link'
import { url } from "../lib/url";
import en from "../public/locales/en/en"
import fa from "../public/locales/fa/fa"
import { ConfigProvider } from 'antd';
import { Search } from '../components/Search'
import { CoinsList } from '../components/CoinsList';
import Layout from '../components/Layout';
import { fetcher } from '../lib/fetcher';
import { useRouter } from 'next/router';
import Hero from "../components/Hero"
import Parallelogram from '../components/Parallelogram';
export default function Home({ data }) {
  const router = useRouter()
  const { locale } = router;
  const t = locale === "en" ? en : fa;
  const dir = locale === "en" ? "ltr" : "rtl"
  return (
    <>
      <Head>
        <title> price tracker </title>
      </Head>
      <Layout hero={ <Hero/>}>
        <ConfigProvider direction={dir}>
        <Search type="text" placeholder=" searching... " />
        <Parallelogram> {t.table} </Parallelogram>
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
