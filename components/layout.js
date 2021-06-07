import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, home, schedule, trance }) => {
  return (
    <>
      <Head home schedule trance>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        ></link>
        <title>BattleTrance</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Layout;
