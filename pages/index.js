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

<html>
<head>
<style>
a:link, a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: red;
}
</style>
</head>
<body>

<a href="form.js" target="_blank">Add a Micronation to the Map</a>

</body>

      <Footer />
    </div>
  )
}
