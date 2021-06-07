import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <div className='container'>
        <h1>hello World from home</h1>
      </div>
    </Layout>
  )
}
