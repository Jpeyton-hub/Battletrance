import Head from 'next/head'

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
            <header>
                
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout
