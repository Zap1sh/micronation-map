import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Micronation Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Micronation Map" />
        <p className="description">
          Welcome to Micronation Map! The Map Is Created by My Maps Google.
        </p>
      </main>

      <Footer />
    </div>
  )
}
