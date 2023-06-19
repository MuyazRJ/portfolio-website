import { Banner, Benefits, Carousel, DisclosureArea, Form, Hero, Info, Why } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='overflow-hidden'>
      <div id="hero"><Hero/></div>
      <div id="info"><Info/></div>
      <div id="banner"><Banner/></div>
      <div id="benefits"><Benefits/></div>
      <div id="why"><Why/></div>
      <div id="carousel"><Carousel/></div>
      <div id='form'><Form/></div>
      <div id="disclosure"><DisclosureArea/></div>
   </main>
  )
}
