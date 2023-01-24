import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Sevens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/** Static Rendering or Server Side Rendering */}
          {/* Pull some from a server - API endpoints  */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll
          scrollbar-hide p-3 -ml-3'>
            {cardData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/305209383_484120093721791_7145555292389666584_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=UuvNu1Jgfv8AX8-ShVF&_nc_ht=scontent-cdt1-1.xx&oh=00_AfBvdf68DPtn8E9LcNQG9Enf08b6RYSgHqcqPKaJRMuvhA&oe=63D41177"
          title='The Greastest Outdoors'
          description="Wishlists created by Sevens."
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  { /* pré-fetch */ }
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').
    then(
      (res) => res.json()
    );

  const cardData = await fetch('https://www.jsonkeeper.com/b/VHHT').
    then((res) =>
      res.json()
    )
  return {
    props: {
      exploreData,
      cardData

    },
  };
}