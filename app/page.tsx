import { Banner, Benefits, Hero, Info, Why } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='overflow-hidden'>
      <Hero/>
      <Info/>
      <Banner/>
      <Benefits/>
      <Why/>
   </main>
  )
}
