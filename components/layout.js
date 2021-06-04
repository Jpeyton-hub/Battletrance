import Head from 'next/head'
import Footer from './footer'
import Header from './header'

const Layout = ({children}) => {
    return (
        <div className='container'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
                />
                <title>BattleTrance</title>
            </Head>
            <Header />
            <main className=''>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
