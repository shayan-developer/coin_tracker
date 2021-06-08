import Head from 'next/head'
import Link from 'next/link'
import {url  } from "../lib/url";
import { ConfigProvider, Image } from 'antd';
import { Search } from '../components/Search'
import { CoinsList } from '../components/CoinsList';
import { Layout } from '../components/Layout';
import { fetcher } from '../lib/fetcher';
export default function Home({data}) {
  return (
    <ConfigProvider direction="ltr">
      <Head>
        <title> price tracker </title>
      </Head>
      <Layout >
        <Search type="text" placeholder=" searching... " />
        <CoinsList datalist={data}/>
      </Layout>
    </ConfigProvider>
  )
}

export async function getStaticProps(context) {
  const res = await fetcher(url)
  return {
    props: {
      data:res
    }
  }
}
