import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="此域名出售!" />
        <p className="description">
          如果想要购买请联系邮箱 <code>x@dalao.net</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
