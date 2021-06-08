import Head from 'next/head'
import Link from 'next/link'
import { ConfigProvider, Image } from 'antd';
import { Search } from '../components/Search'
import { CoinsList } from '../components/CoinsList';
import { Layout } from '../components/Layout';
export default function Home() {
  return (
    <ConfigProvider direction="ltr">
      <Layout >
        <Search type="text" placeholder=" searching... " />
        <CoinsList />
      </Layout>
    </ConfigProvider>
  )
}

