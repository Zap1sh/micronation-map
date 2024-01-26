import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Micronation Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Micronation Form" />
        <p className="description">
          Please Fill out the Form Below to add your Micronation.
        </p>

<iframe src="https://www.google.com/maps/d/embed?mid=1kfQqQ5Z_3goRO8qbbbF_X3DxtOrgD1E&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
      </main>

      <Footer />
    </div>
  )
}

