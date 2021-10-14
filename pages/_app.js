import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import '../styles/header.scss';
import Header from "../components/Header";
import Footer from '../components/Footer';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  const { title = '', disable = {} } = Component
  return (
    <>
    <Head>
        <title>{ title }</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
    </Head>
    { !disable.header && <Header /> }
      <Component {...pageProps} />
    { !disable.footer && <Footer /> }
    </>
  )
}
export default MyApp