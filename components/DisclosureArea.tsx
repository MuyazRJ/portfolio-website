"use client"

import TextReveal from '@/motion/TextReveal'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function DisclosureArea() {
  return (
    <div className="w-full px-4 pt-16 flex flex-col items-center max-w-[1200px] mb-[100px] mx-auto">
      <TextReveal>
        <h2 className='font-bold sm:text-7xl self-center mb-[4rem] text-[#1c1c1c] text-center text-6xl'>Got a question?</h2>
      </TextReveal>
      
      <div className="w-[full] rounded-2xl bg-[#303030] p-2 shadow-lg relative">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-box">
                <span className='text-xl'>I'm interested, how do we continue?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black duration-300`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-[600ms] ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-[300ms] ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="disclosure-text duration-300">
              We begin with consulting with you on your business and all the things you want to optimise. We analyse how we can present your business against your competitors, and analyse the advantages we can make. Then our teams go through an extensive list of structures and designs to work out which works best. 
                    <br></br><br></br>
              After your website design is complete, a split testing is done to decide how effective it is and make it even better. Lastly we will launch your website and you get to relax more and work less. Contact us here. 
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-box">
                <span className='text-xl'>What happens when I get in contact?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black duration-300`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-[400ms] ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-[300ms] ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="disclosure-text duration-300">
              We will communicate via an initial email, and then agree on a call or message, or whichever works best for you.
              Receive your initial email by contacting us here.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-box">
                <span className='text-xl'>How much will it cost?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black duration-300`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-[400ms] ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-[300ms] ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="disclosure-text duration-300">
              Once you get in contact with us, we will consult with you and decide a price based on your budget, business goals
              and time frame. Get in contact with us here.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-box">
                <span className='text-xl'>What web technologies do you use?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black duration-300`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-[400ms] ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-[300ms] ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="disclosure-text duration-300">
                We leverage the cutting-edge and highly sought-after framework Next.js, which combines the power of React with robust backend development capabilities through Express.js.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-box">
                <span className='text-xl'>Do you offer responsive design to ensure websites work well on mobile devices?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black duration-300`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-[400ms] ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-[300ms] ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="disclosure-text duration-300">
                Yes, we offer responsive design services to ensure that websites work seamlessly and provide an optimal user experience across various devices, including mobile phones, tablets, and desktops.<br/><br/> Our team of web developers understands the importance of responsive design in today's mobile-driven world.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
