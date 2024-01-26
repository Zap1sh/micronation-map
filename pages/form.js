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

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeInarN5XBS8BRQBl7RGMVI6hQu76tyIkNRRw6Za56jYVDvwA/viewform?embedded=true" width="640" height="840" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </main>

      <Footer />
    </div>
  )
}

