import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>此域名出售!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="此域名出售!" />
        <p className="description">
          如果想要购买请联系QQ <code>741117455</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
