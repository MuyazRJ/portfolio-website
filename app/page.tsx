import { Banner, Benefits, Carousel, Form, Hero, Info, Why } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='overflow-hidden'>
      <Hero/>
      <Info/>
      <Banner/>
      <Benefits/>
      <Why/>
      <Carousel/>
      <Form/>
   </main>
  )
}
