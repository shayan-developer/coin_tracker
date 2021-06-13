import Head from 'next/head'
import { url } from "../lib/url";
import en from "../public/locales/en/en"
import fa from "../public/locales/fa/fa"
import { ConfigProvider } from 'antd';
import { CoinsList } from '../components/CoinsList';
import Layout from '../components/Layout';
import { fetcher } from '../lib/fetcher';
import { useRouter } from 'next/router';
import Hero from "../components/Hero"
import Converter from "../components/Converter"
import Intro from "../components/Intro"
import Parallelogram from '../components/Parallelogram';
import Carrousel from '../components/Carrousel';
export default function Home({ data }) {
  const router = useRouter()
  const { locale } = router;
  const t = locale === "en" ? en : fa;
  const dir = locale === "en" ? "ltr" : "rtl"
  return (
    <>
      <Head>
        <title> {t.heroTxt} </title>
      </Head>
      <Layout hero={ <Hero/>}>
        <ConfigProvider direction={dir}>
        <Parallelogram> {t.what_currency} </Parallelogram>
        <Intro/>
        <Parallelogram> {t.converter_currency} </Parallelogram>
        <Converter coins={data}/>
        <Carrousel/>
        <Parallelogram> <span id="table">{t.table}</span> </Parallelogram>
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
