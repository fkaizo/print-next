import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Submit from '../components/form'

export default function Home() {


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Submit />
    </Layout>
  )
}