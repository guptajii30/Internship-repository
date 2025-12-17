import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BatchInfo from '../components/BatchInfo';
import Highlights from '../components/Highlights';
import Stats from '../components/Stats';
import ProgramValue from '../components/ProgramValue';
import Mentors from '../components/Mentors';
import Testimonials from '../components/Testimonials';
import HiringPartners from '../components/HiringPartners';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>LearnBetter - Masters in Computer Science: Cloud Computing & AI System Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <BatchInfo />
        <Highlights />
        <Stats />
        <ProgramValue />
        <Mentors />
        <Testimonials />
        <HiringPartners />
        <Footer />
      </main>
    </>
  );
}
