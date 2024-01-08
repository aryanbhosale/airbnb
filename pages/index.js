import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import exploreData from '@/data'
import MediumCard from '@/components/MediumCard'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData }) {
  return (
    <div
      className={``}
    >
      <Head>
        <title>Airbnb</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      
      <Banner />
      <Header />

      <main className='max-w-9xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-3xl font-semibold pb-5'>
            Explore Nearby
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location, dates }) => (
              <MediumCard key={img} img={img} distance={distance} location={location} dates={dates} />
            ))}
          </div>
        </section>
      </main>

      <Footer />

    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      exploreData,
    }
  }
}