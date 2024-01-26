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

<iframe src="https://www.google.com/maps/d/embed?mid=1kfQqQ5Z_3goRO8qbbbF_X3DxtOrgD1E&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>

<p>To add a new Micronation to the Map, Please Visit www.micronation-map.netlify.app/form</p>

    </div>
)
