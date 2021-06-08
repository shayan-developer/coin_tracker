import React from 'react'
import { Layout } from '../../components/Layout';
import { fetchId } from '../../lib/fetchId';
import { getPost } from '../../lib/getPost';
import { url } from '../../lib/url';

export default function Coin({data}) {
    return (
        <Layout>
            <h1>{data.name}</h1>
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