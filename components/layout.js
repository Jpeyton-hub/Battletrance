import Head from 'next/head'

const Layout = ({children, home, dash, entry}) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
                />
                <title>BattleTrance</title>
            </Head>
            <header>
                {home ? (<></>) : dash ? (<></>) : entry ? (<></>) : (<></>)}
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout
