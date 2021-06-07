import Head from 'next/head'
import { ConfigProvider, Image } from 'antd';
import { Search } from '../components/Search'
import { CoinsList } from '../components/CoinsList';
import {Layout} from '../components/Layout';
export default function Home() {
  return (
    <ConfigProvider direction="ltr">
      <Layout >
        <Image src='../logo.png' />
        <Search type="text" placeholder=" searching... " />
        <CoinsList />
      </Layout>
    </ConfigProvider>
  )
}

